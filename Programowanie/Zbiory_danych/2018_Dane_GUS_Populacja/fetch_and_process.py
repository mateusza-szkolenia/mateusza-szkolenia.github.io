#!/usr/bin/env python3

WEB = 'https://stat.gov.pl/obszary-tematyczne/ludnosc/ludnosc/ludnosc-piramida/'
URL = 'https://stat.gov.pl/files/gfx/portalinformacyjny/pl/defaultstronaopisowa/5822/1/1/dane.js'

import ast
import urllib
import urllib.request
import datetime
import re
import json
import jinja2

TODAY = datetime.date.today().isoformat()

LOCAL = f'{TODAY}-dane.js'

OUTPUT_SQL = f'{datetime.date.today().year}-dane-gus-populacja.sql'

TEMPLATE = """
-- data source: {{WEB}}
-- data scrapped from: {{URL}}

Begin;
Create Table `populacja` (
        `rok`       Integer Not Null,
        `wiek`      Integer Not Null,
        `plec`      Char(1) Not Null
                    Check (`plec` In ('M', 'K')),
        `liczba`    Integer,

        Unique  (rok, wiek, plec)
);

{% for (rok, wiek, plec, liczba) in rekordy %}
Insert Into `populacja` Values({{rok}}, {{wiek}}, '{{plec}}', {{liczba}});
{%- endfor %}
Commit;
"""

try:
    data: str = open(LOCAL).read()
except FileNotFoundError:
    with urllib.request.urlopen(URL) as f_in:
        data: str = f_in.read().decode()
    with open(LOCAL, "w") as f_out:
        f_out.write(data)

dane = {
    'M': {},
    'K': {}
}

for line in data.split('\n'):
    m = re.match(r'^\W*var\W+(\w+)\W*=(.+)\W*;\W*$', line)
    try:
        key, value = m[1], m[2]
    except TypeError:
        continue
    value = ast.literal_eval(value.strip())

    if key == 'nYrBeg':
        start_year = value
    elif key == 'nYrEnd':
        end_year = value
    elif key[0:5] in ['aFPop', 'aMPop']:
        age = key[5:]
        plec = {'F': 'K', 'M': 'M'}[key[1]]
        try:
            age = int(age)
        except:
            pass
        dane[plec][age] = value

rekordy = []

for rok_pos, rok in enumerate(range(start_year, end_year+1)):
    for plec in 'MK':
        for wiek, liczby in dane[plec].items():
            try:
                wiek = int(wiek)
            except:
                continue
            rekordy.append((rok, wiek, plec, liczby[rok_pos]))

template = jinja2.Template(TEMPLATE)
dane = {
    'WEB': WEB,
    'URL': URL,
    'rekordy': rekordy
}

with open(OUTPUT_SQL, 'w') as f:
    f.write(template.render(**dane))

