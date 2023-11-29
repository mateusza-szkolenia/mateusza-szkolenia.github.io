# Miejscowości w Polsce (wg geoportal)

Źródło danych: Geoportal

| rok | data pozyskania | `SQL` | `SQLite` | `CSV` | `TXT` | `JSON` |
|-----|-----------------|-------|----------|-------|-------|--------|

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
