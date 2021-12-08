# Struktura ludności według wieku (dane GUS)

Źródło danych: GUS

| rok | data pozyskania | `SQL` | `SQLite` | `CSV` | `TXT` | `JSON` |
|-----|-----------------|-------|----------|-------|-------|--------|
| 2018 | 2018-06-01 |[[SQL]](2018-dane-gus-populacja.sql) |[[DB]](2018-dane-gus-populacja.db) |[[CSV]](2018-dane-gus-populacja.csv) |[[TXT]](2018-dane-gus-populacja.txt) |[[JSON]](2018-dane-gus-populacja.json) |
| 2021 | 2021-12-05 |[[SQL]](2021-dane-gus-populacja.sql) |[[DB]](2021-dane-gus-populacja.db) |[[CSV]](2021-dane-gus-populacja.csv) |[[TXT]](2021-dane-gus-populacja.txt) |[[JSON]](2021-dane-gus-populacja.json) |

## Opis formatów

### SQL

Plik SQL w składni zgodnej z `SQLite`.

```sql
Create Table `populacja`(
    `rok`       Integer Not Null,
    `wiek`      Integer Not Null,
    `plec`      Char(1) Not Null
                Check (`plec` In ('M', 'K')),
    `liczba`    Integer,

    Unique (`rok`, `wiek`, `plec`)
);
```

### TXT

Plik tekstowy z kolumnami odzielonymi znakiem `TAB`.

```
rok	wiek	liczba_m	liczba_k
1970	0	267062	254499
1970	1	256244	245698
1970	2	259486	247922
1970	3	255955	245349
...
```

### CSV

Plik z wartościami oddzielonymi przecinkami.

```csv
rok,wiek,liczba_m,liczba_k
1970,0,267062,254499
1970,1,256244,245698
1970,2,259486,247922
1970,3,255955,245349
```

### JSON

Plik JSON.

```json
[
    {
        "rok": 1970,
        "wiek": 0,
        "m": 267062,
        "k": 254499
    },
    {
        "rok": 1970,
        "wiek": 1,
        "m": 256244,
        "k": 245698
    },
    ...
```

