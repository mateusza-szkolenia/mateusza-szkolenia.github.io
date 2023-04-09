#!/usr/bin/env python3

import os

import sqlite3

ROK=2018

DIR = f"../temp/{ROK}/"

os.chdir(DIR)

DB = f"wybory.db"
SCHEMA = "../../schema.sql"

try:
    os.unlink(DB)
except FileNotFoundError:
    pass

con = sqlite3.connect(DB)

con.create_function('upper2', 1, lambda x: x.upper(), deterministic=True)
con.create_function('pierwsze', 1, lambda x: x.partition(" ")[0], deterministic=True)

con.executescript(open(SCHEMA).read())

steps = [
"""
Attach Database 'temp.db' As tmp;
""",
"""
Insert Into typ_komitetu (nazwa)
Select typ
From tmp.komitety
Group By typ;
""",
"""
Insert Into komitet (sygnatura, nazwa, id_typu)
Select
    sygnatura,
    nazwa,
    (Select id From typ_komitetu tk Where tk.nazwa = ko.typ)
From tmp.komitety ko;
""",
"""
Insert Into kandydat (imiona, imie, nazwisko, wiek, rok_ur, plec, zamieszk, id_komitetu, orig_id)
Select
    upper2(imiona),
    pierwsze(upper2(imiona)),
    upper2(nazwisko),
    wiek,
    2018 - wiek,
    "Płeć",
    "Miejscowość",
    (Select id From komitet ko Where ka.sygnatura = ko.sygnatura),
    rowid
From tmp.kandydaci_wbp ka
Union All
Select
    upper2(imiona),
    pierwsze(upper2(imiona)),
    upper2(nazwisko),
    wiek,
    2018 - wiek,
    "Płeć",
    "Miejsce zamieszkania",
    (Select id From komitet ko Where ka.sygnatura = ko.sygnatura),
    rowid
From tmp.kandydaci_rady ka;
""",
"""
Insert Into stanowisko (nazwa, szczebel, teryt)
Select Distinct urzd, 'gmina', teryt
From tmp.kandydaci_wbp
Union All
Select Distinct rada, 'gmina', teryt
From tmp.kandydaci_rady;
""",
"""
Update stanowisko
Set szczebel = 'województwo'
Where nazwa Like 'Sejmik Wojew%';
""",
"""
Update stanowisko
Set szczebel = 'powiat'
Where nazwa Like 'Rada Powiatu%';
""",
"""
Insert Into lista (id_stanowiska, id_komitetu, okreg)
Select
    (Select id From stanowisko Where nazwa = rada),
    (Select id From komitet Where nazwa = komitet),
    "okręg"
From tmp.kandydaci_rady
Group By rada, komitet, "okręg"
Union All
Select
    (Select id From stanowisko Where `nazwa` = `Urzd`),
    (Select id From komitet Where nazwa = komitet),
    0 As ok
From tmp.kandydaci_wbp
Group By "Urzd", komitet, ok;
""",
"""
Insert Into kandydat_lista (id_kandydata, id_listy, pozycja)
Select
    ka.id,
    li.id,
    pozycja
From tmp.kandydaci_rady ka1
Join kandydat ka On (ka.orig_id = ka1.rowid)
Join komitet ko Using (sygnatura)
Join stanowisko st On st.nazwa = ka1.rada
Join lista li On (li.id_stanowiska = st.id And li.id_komitetu = ko.id And li.okreg = ka1.`Okręg`)
Union All
Select
    ka.id,
    li.id,
    1
From tmp.kandydaci_wbp ka2
Join kandydat ka On (ka.orig_id = ka2.rowid)
Join komitet ko Using (sygnatura)
Join stanowisko st On st.nazwa = ka2.Urzd
Join lista li On (li.id_stanowiska = st.id And li.id_komitetu = ko.id And li.okreg = 0);
"""]

for step in steps:
    print(step)
    con.executescript(step)
    print("---")
