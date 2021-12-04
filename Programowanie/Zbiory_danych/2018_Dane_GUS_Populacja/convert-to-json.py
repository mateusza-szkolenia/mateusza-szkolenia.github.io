#!/usr/bin/env python3

import sqlite3
import json

DB = "2018-dane-gus-populacja.db"
JSON = "2018-dane-gus-populacja.json"

SQL = '''
Select
    p1.rok As rok,
    p2.wiek As wiek,
    p1.liczba As 'liczba_m',
    p2.liczba As 'liczba_k'
From populacja p1
Join populacja p2
On (p1.rok = p2.rok And p1.wiek = p2.wiek)
Where
    p1.plec = 'M'
    And p2.plec = 'K'
Order By
    rok, wiek
'''

db = sqlite3.connect(DB)

with open(JSON, "w") as out_file:
    x = ({"rok":rok, "wiek":wiek, "m": m, "k": k} for (rok, wiek, m, k) in db.execute(SQL))
    json.dump([*x], out_file, indent=4)

