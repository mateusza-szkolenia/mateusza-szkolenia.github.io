#!/usr/bin/env python3 

import glob
import sqlite3
import json

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

for DB in glob.glob("*-dane-gus-populacja.db"):
    BASENAME = DB.replace('.db','')
    CSV = f'{BASENAME}.csv'
    JSON = f'{BASENAME}.json'
    TXT = f'{BASENAME}.txt'

    db = sqlite3.connect(DB)
    dbq = db.execute(SQL)
    columns = [x[0] for x in dbq.description]

    dbdata = [*dbq]

    with open(CSV, 'w') as out_file:
        out_file.write(','.join(columns) + '\n')
        for row in dbdata:
            out_file.write(','.join([f'{x}' for x in row]) + '\n')

    with open(TXT, "w") as out_file:
        out_file.write(','.join(columns) + '\n')
        for row in dbdata:
            out_file.write('\t'.join([f'{x}' for x in row]) + "\n")

    with open(JSON, 'w') as out_file:
        x = ({'rok':rok, 'wiek':wiek, 'm': m, 'k': k} for (rok, wiek, m, k) in dbdata)
        json.dump([*x], out_file, indent=4)

