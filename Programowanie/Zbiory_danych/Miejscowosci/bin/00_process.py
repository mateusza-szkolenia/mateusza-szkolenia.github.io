#!/usr/bin/env python3

URL = 'https://opendata.geoportal.gov.pl/prng/PRNG_MIEJSCOWOSCI_GML.zip'
zip_fn = '../tmp/PRNG_MIEJSCOWOSCI_GML.zip'
data_fn = 'PRNG_MIEJSCOWOSCI_GML.xml'
output_fn = 'polskie-miasta'

import datetime
import jinja2
import json
import locale
import os
import sqlite3
import urllib.request
import xml.etree.ElementTree as ET
import yaml
import zipfile

YEAR = f'{datetime.date.today():%Y}'
TODAY = f'{datetime.date.today():%F}'
OUTPUT = f'../data/{YEAR}-{output_fn}'

def znajdz_pole(el, nazwa):
    return [*el.findall(f'.//{{*}}{nazwa}')][0].text

def process_single(el):
    print(f"Przetwarzam węzeł: {el}")
    rodzaj = znajdz_pole(el, 'rodzajObiektu')
    if rodzaj != 'miasto':
        return None
    nazwa = znajdz_pole(el, 'nazwaGlowna')
    gps = znajdz_pole(el, 'wspolrzedneGeograficzne')
    woj = znajdz_pole(el, 'wojewodztwo')
    powi = znajdz_pole(el, 'powiat')
    lat, lon = [float(f"{float(x):.4f}") for x in gps.split(' ')]
    miasto = {
        'n': nazwa,
        'gps': [lat, lon],
        'w': woj,
        'p': powi
    }
    print(f"Miasto: {miasto}")
    return miasto

def process_all(root):
    print(f"Przetwarzam dokument xml: {root}")
    result = []
    for fM in root:
        m = process_single(fM)
        if m != None:
            result.append(m)
    print(f"Wynik: {len(result) = }")
    return result

def process_xml(f_xml):
    print(f"Przetwarzam plik xml: {f_xml}")
    tree = ET.parse(f_xml)
    xml_root = tree.getroot()
    return process_all(xml_root)

def process_zipped_xml(f_zip):
    print(f"Przetwarzam plik zip: {f_zip} [{data_fn}]")
    f_xml = f_zip.open(data_fn)
    return process_xml(f_xml)

def retrieve_zip():
    try:
        print("Tworzę katalog tmp")
        os.mkdir('tmp')
    except FileExistsError:
        pass
    print(f"Pobieram zip z {URL}")
    urllib.request.urlretrieve(URL, zip_fn)

try:
    print("Tworzę katalog data")
    os.mkdir('data')
except FileExistsError:
    pass

locale.setlocale(locale.LC_COLLATE, "pl_PL.UTF-8")

#try:
#    miasta = json.load(open(f'{OUTPUT}.json'))
#except FileNotFoundError:

try:
    zf = zipfile.ZipFile(zip_fn)
except FileNotFoundError:
    retrieve_zip()
    zf = zipfile.ZipFile(zip_fn)

miasta = process_zipped_xml(zf)

print(miasta)

miasta.sort(key=lambda m: locale.strxfrm(m['n']))

wojewodztwa = [*{m['w'] for m in miasta}]
wojewodztwa.sort(key=lambda w: locale.strxfrm(w))
wojewodztwa = {n: (i + 1) for (i, n) in enumerate(wojewodztwa)}

powiaty = [*{m['p'] for m in miasta}]
powiaty.sort(key=lambda p: locale.strxfrm(p))
powiaty = {n: (i + 1) for (i, n) in enumerate(powiaty)}

print(f"{len(miasta) = }  {len(wojewodztwa) = }  {len(powiaty) = }")

print("Zapis json")
with open(f'{OUTPUT}.json', 'w') as f:
    json.dump(miasta, f, indent=4, ensure_ascii=False)

print("Zapis txt")
with open(f'{OUTPUT}.txt', 'w') as f:
    f.write('nazwa\tszerokosc\tdlugosc\twojewodztwo\tpowiat\n')
    for m in miasta:
        n, (lat, lon), woj, powi = m['n'], m['gps'], m['w'], m['p']
        f.write(f'{n}\t{lat:.4f}\t{lon:.4f}\t{woj}\t{powi}\n')

print("Zapis csv")
with open(f'{OUTPUT}.csv', 'w') as f:
    f.write('nazwa,szerokosc,dlugosc,wojewodztwo,powiat\n')
    for m in miasta:
        n, (lat, lon), woj, powi = m['n'], m['gps'], m['w'], m['p']
        f.write(f'{n},{lat:.4f},{lon:.4f},{woj},{powi}\n')

print("Zapis yaml")
with open(f'{OUTPUT}.yaml', 'w') as f:
    yaml.dump(miasta, stream=f, allow_unicode=True)

SQL_TEMPLATE = """
-- źródło danych: {{URL}}
-- data pozyskania: {{TODAY}}

Begin Transaction;

Create Table wojewodztwa (
    id          Integer Primary Key,
    nazwa       Text Unique Not Null
);

Create Table powiaty (
    id          Integer Primary Key,
    nazwa       Text Unique Not Null
);

Create Table miasta (
    nazwa       Text Not Null,
    lat         Float Not Null,
    lon         Float Not Null,
    woj_id      Integer Not Null,
    pow_id      Integer Not Null
);

Create View miasta_full As
Select
    m.nazwa As nazwa,
    lat,
    lon,
    w.nazwa As wojewodztwo,
    p.nazwa As powiat
From miasta As m
Left Join wojewodztwa As w
    On (w.id = m.woj_id)
Left Join powiaty As p
    On (p.id = m.pow_id)
;

{% for (nazwa, id) in wojewodztwa.items() %}
Insert Into wojewodztwa Values ({{id}}, '{{nazwa}}');
{%- endfor %}

{% for (nazwa, id) in powiaty.items() %}
Insert Into powiaty Values ({{id}}, '{{nazwa}}');
{%- endfor %}

{% for m in miasta %}
Insert Into miasta Values ('{{m.n}}', {{m.gps[0]}}, {{m.gps[1]}}, {{wojewodztwa[m.w]}}, {{powiaty[m.p]}});
{%- endfor %}

Commit;
"""
template = jinja2.Template(SQL_TEMPLATE)

t_params = {
    'wojewodztwa': wojewodztwa,
    'powiaty': powiaty,
    'miasta': miasta,
    'URL': URL,
    'TODAY': TODAY
}

sqlscript = template.render(**t_params)

print("Zapis daty")
with open(f'{OUTPUT}.date', 'w') as f:
    f.write(TODAY)

print("Zapis sql")
with open(f'{OUTPUT}.sql', 'w') as f:
    f.write(sqlscript)

print("Zapis SQLite DB")
try:
    os.unlink(f'{OUTPUT}.db')
except FileNotFoundError:
    pass

db = sqlite3.connect(f'{OUTPUT}.db')
db.executescript(sqlscript)
db.commit()

