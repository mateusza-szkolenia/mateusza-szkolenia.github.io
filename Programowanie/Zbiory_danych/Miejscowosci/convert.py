#!/usr/bin/env python3

zip_fn = 'tmp/PRNG_MIEJSCOWOSCI_GML.zip'
data_fn = 'PRNG_MIEJSCOWOSCI_GML/PRNG_MIEJSCOWOSCI_GML.xml'
output_fn = 'polskie-miasta'

import json
import yaml
import xml.etree.ElementTree as ET
import datetime
import jinja2
import locale
import os
import zipfile

YEAR = f'{datetime.date.today().year}'
OUTPUT = f'data/{YEAR}-{output_fn}'

def znajdz_pole(el, nazwa):
    return [*el.findall(f'.//{{*}}{nazwa}')][0].text

def process_single(el):
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
    return miasto

try:
    os.mkdir('data')
except FileExistsError:
    pass

locale.setlocale(locale.LC_COLLATE, "pl_PL.UTF-8")

try:
    miasta = json.load(open(f'{OUTPUT}.json'))
except FileNotFoundError:
    zf = zipfile.ZipFile(zip_fn)
    input_f = zf.open(data_fn)
    tree = ET.parse(input_f)
    fC = tree.getroot()

    miasta = []
    for fM in fC:
        m = process_single(fM)
        if m:
            miasta.append(m)
            print(m)


miasta.sort(key=lambda m:locale.strxfrm(m['n']))

wojewodztwa = [*{m['w'] for m in miasta}]
wojewodztwa.sort(key=lambda w:locale.strxfrm(w))
wojewodztwa = {n: (i + 1) for (i, n) in enumerate(wojewodztwa)}

with open(f'{OUTPUT}.json', 'w') as f:
    json.dump(miasta, f, indent=4, ensure_ascii=False)

with open(f'{OUTPUT}.txt', 'w') as f:
    f.write('nazwa\tszer\tdlug\twoj\n')
    for m in miasta:
        n, (lat, lon), woj = m['n'], m['gps'], m['w']
        f.write(f'{n}\t{lat:.4f}\t{lon:.4f}\t{woj}\n')

with open(f'{OUTPUT}.csv', 'w') as f:
    f.write('nazwa,szerokosc,dlugosc,wojewodztwo\n')
    for m in miasta:
        n, (lat, lon), woj = m['n'], m['gps'], m['w']
        f.write(f'{n},{lat:.4f},{lon:.4f},{woj}\n')

with open(f'{OUTPUT}.yml', 'w') as f:
    yaml.dump(miasta, stream=f, allow_unicode=True)

SQL_TEMPLATE = """
-- 
-- 

Begin;

Create Table `wojewodztwa`(
    `id`        Integer Primary Key,
    `nazwa`     Text Unique Not Null
);

Create Table `miasta`(
    `nazwa`     Text Not Null,
    `lat`       Float Not Null,
    `lon`       Float Not Null,
    `woj_id`    Integer Not Null,
    `powiat`    Text Not Null
);

{% for (nazwa, id) in wojewodztwa.items() %}
Insert Into `wojewodztwa` Values ({{id}}, '{{nazwa}}');
{%- endfor %}

{% for m in miasta %}
Insert Into `miasta` Values ('{{m.n}}', {{m.gps[0]}}, {{m.gps[1]}}, {{wojewodztwa[m.w]}}, '{{m.p}}');
{%- endfor %}

Commit;
"""
template = jinja2.Template(SQL_TEMPLATE)

with open(f'{OUTPUT}.sql', 'w') as f:
    t_params = {'wojewodztwa': wojewodztwa, 'miasta': miasta}
    f.write(template.render(**t_params))

