# Struktura ludności według wieku (dane GUS)

Źródło danych: GUS

| rok | data pozyskania | `SQL` | `SQLite` | `CSV` | `TXT` | `JSON` |
|-----|-----------------|-------|----------|-------|-------|--------|
| 2018 | 2018-06-01 |[[SQL]](2018-dane-gus-populacja.sql) |[[DB]](2018-dane-gus-populacja.db) |[[CSV]](2018-dane-gus-populacja.csv) |[[TXT]](2018-dane-gus-populacja.txt) |[[JSON]](2018-dane-gus-populacja.json) |
| 2021 | 2021-12-05 |[[SQL]](2021-dane-gus-populacja.sql) |[[DB]](2021-dane-gus-populacja.db) |[[CSV]](2021-dane-gus-populacja.csv) |[[TXT]](2021-dane-gus-populacja.txt) |[[JSON]](2021-dane-gus-populacja.json) |

## Opis formatów

### SQL

Plik SQL w składni zgodnej z `SQLite`.

```
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

### CSV

Plik z wartościami oddzielonymi przecinkami.

## JSON

Plik JSON.

