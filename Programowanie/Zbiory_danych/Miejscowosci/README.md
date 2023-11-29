# Miejscowości w Polsce (wg geoportal)

Źródło danych: Geoportal

| rok | data pozyskania | `SQL` | `SQLite` | `CSV` | `TXT` | `JSON` | `Yaml` |
|-----|-----------------|-------|----------|-------|-------|--------|--------|
| 2021 | 2021-12-09 | [[SQL]](data/2021-polskie-miasta.sql) |[[DB]](data/2021-polskie-miasta.db) |[[CSV]](data/2021-polskie-miasta.csv) |[[TXT]](data/2021-polskie-miasta.txt) |[[JSON]](data/2021-polskie-miasta.json) |[[YAML]](data/2021-polskie-miasta.yaml) |
| 2022 | 2022-06-08 | [[SQL]](data/2022-polskie-miasta.sql) |[[DB]](data/2022-polskie-miasta.db) |[[CSV]](data/2022-polskie-miasta.csv) |[[TXT]](data/2022-polskie-miasta.txt) |[[JSON]](data/2022-polskie-miasta.json) |[[YAML]](data/2022-polskie-miasta.yaml) |
| 2023 | 2023-11-29 | [[SQL]](data/2023-polskie-miasta.sql) |[[DB]](data/2023-polskie-miasta.db) |[[CSV]](data/2023-polskie-miasta.csv) |[[TXT]](data/2023-polskie-miasta.txt) |[[JSON]](data/2023-polskie-miasta.json) |[[YAML]](data/2023-polskie-miasta.yaml) |

## Opis formatów

### SQL

Plik SQL w składni zgodnej z `SQLite`.

```sql
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
```

### TXT

Plik tekstowy z kolumnami odzielonymi znakiem `TAB`.

```
nazwa   szerokosc       dlugosc wojewodztwo     powiat
Aleksandrów Kujawski    52.8766 18.6934 kujawsko-pomorskie      aleksandrowski
Aleksandrów Łódzki      51.8194 19.3038 łódzkie zgierski
Alwernia        50.0598 19.5396 małopolskie     chrzanowski
Andrychów       49.8552 19.3375 małopolskie     wadowicki
...
```

### CSV

Plik z wartościami oddzielonymi przecinkami.

```csv
nazwa,szerokosc,dlugosc,wojewodztwo,powiat
Aleksandrów Kujawski,52.8766,18.6934,kujawsko-pomorskie,aleksandrowski
Aleksandrów Łódzki,51.8194,19.3038,łódzkie,zgierski
Alwernia,50.0598,19.5396,małopolskie,chrzanowski
Andrychów,49.8552,19.3375,małopolskie,wadowicki
Annopol,50.8854,21.8569,lubelskie,kraśnicki
...
```

### JSON

Plik JSON.

```json
[
    {
        "n": "Aleksandrów Kujawski",
        "gps": [ 52.8766, 18.6934 ],
        "w": "kujawsko-pomorskie",
        "p": "aleksandrowski"
    },
    {
        "n": "Aleksandrów Łódzki",
        "gps": [ 51.8194, 19.3038 ],
        "w": "łódzkie",
        "p": "zgierski"
    },
    {
        "n": "Alwernia",
        "gps": [ 50.0598, 19.5396 ],
        "w": "małopolskie",
        "p": "chrzanowski"
    },
    "..."
]
```

### YAML

Plik YAML

```yaml
- gps:
  - 52.8766
  - 18.6934
  n: Aleksandrów Kujawski
  p: aleksandrowski
  w: kujawsko-pomorskie
- gps:
  - 51.8194
  - 19.3038
  n: Aleksandrów Łódzki
  p: zgierski
  w: łódzkie
- gps:
  - 50.0598
  - 19.5396
  n: Alwernia
  p: chrzanowski
  w: małopolskie
- gps:
  - 49.8552
  - 19.3375
  n: Andrychów
  p: wadowicki
  w: małopolskie
- ...
```
