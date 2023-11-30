#!/usr/bin/env python3

import sys
import sqlite3

try:
    db, rok, plec = sys.argv[1:]
except ValueError:
    print(f"usage: {sys.argv[0]} DB ROK PLEC")
    exit(1)

QUERY = """
Select
    imie, count()
From kandydat
Where rok_ur = ? And plec = ?
Group By imie
Order By count() Desc
"""

with sqlite3.connect(db) as con:
    for x in con.execute(QUERY, (rok, plec )):
        print(x)
    print("bye")
