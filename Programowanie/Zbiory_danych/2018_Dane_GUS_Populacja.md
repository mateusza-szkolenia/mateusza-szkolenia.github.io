# 2018 Dane GUS Populacja

Baza SQL zbudowana w oparciu o dane udostępnione przez Główny Urząd Statystyczny.

Plik SQL: [`2018-dane-gus-populacja.sql`](2018-dane-gus-populacja.sql)

SHA-224: `fbd9e98feb838840dfe8f109bbea802115497be9ea5c1b8dbe145d24`

Źródło danych: GUS

## Tabele
### populacja
    rok     Integer Not Null,
    wiek    Integer Not Null,
    plec    Char(1) Not Null
            Check (plec In ('M', 'K')),
    liczba  Integer,
    Unique (rok, wiek, plec)