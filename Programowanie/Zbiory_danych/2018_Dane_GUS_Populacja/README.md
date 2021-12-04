# 2018 Dane GUS Populacja

Baza danych zbudowana w oparciu o dane udostępnione przez Główny Urząd Statystyczny.

Źródło danych: GUS

## SQL

Plik SQL w składni zgodnej z `SQLite`.

Plik: [`2018-dane-gus-populacja.sql`](2018-dane-gus-populacja.sql)

### Tabele
#### populacja
```
CREATE TABLE populacja (
        rok     Integer Not Null,
        wiek    Integer Not Null,
        plec    Char(1) Not Null
                        Check ( plec In ( 'M', 'K' ) ),
        liczba  Integer,

        Unique ( rok, wiek, plec )
)
```

## TXT

Plik tekstowy z kolumnami odzielonymi znakiem `TAB`.

Plik txt: [`2018-dane-gus-populacja.txt`](2018-dane-gus-populacja.txt)

## CSV

Plik z wartościami oddzielonymi przecinkami.

Plik: [`2018-dane-gus-populacja.csv`](2018-dane-gus-populacja.csv)

## JSON

Plik JSON.

Plik: [`2018-dane-gus-populacja.json`](2018-dane-gus-populacja.json)

