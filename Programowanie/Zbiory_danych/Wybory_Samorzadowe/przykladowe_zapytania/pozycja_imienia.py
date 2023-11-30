#!/usr/bin/env python3

import sys
import sqlite3

try:
    db, name = sys.argv[1:]
except ValueError:
    print(f"usage: {sys.argv[0]} DB NAME")
    exit(1)

QUERY = """
With
    imiona_w_latach(imie, plec, rok_ur, liczba) As (
        Select imie, plec, rok_ur, count()
        From kandydat
        Group By imie, plec, rok_ur
    )
Select
    rok_ur,
    1 + (Select count()
     From imiona_w_latach i2
     Where i2.rok_ur = i1.rok_ur
     And i2.plec = i1.plec
     And i2.liczba > i1.liczba
    ) As miejsce
From imiona_w_latach i1
Where imie = ?
Order By rok_ur
"""

with sqlite3.connect(db) as con:
    for x in con.execute(QUERY, (name, )):
        print(x)
    print("bye")
