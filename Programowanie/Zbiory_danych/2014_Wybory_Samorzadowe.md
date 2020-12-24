# 2014 Wybory Samorządowe
Baza SQL zbudowana w oparciu o dane udostępnione przez Państwową Komisję Wyborczą.

Plik SQL: [2014-wybory-samorzadowe.sql](2014-wybory-samorzadowe.sql)

Źródło danych: https://samorzad2014.pkw.gov.pl/

## Tabele
### typ_komitetu
    id          Integer Primary Key,
    nazwa       Text Unique
### komitet
    id          Integer Primary Key,
    sygnatura   Text Unique,
    nazwa       Text,
    id_typu     Integer
### kandydat
    id          Integer Primary Key,
    imiona      Text,
    imie        Text,
    nazwisko    Text,
    wiek        Integer,
    rok_ur      Integer,
    plec        Char(1),
    zamieszk    Text,
    id_komitetu Integer,
    orig_id     Integer
### stanowisko
    id          Integer Primary Key,
    nazwa       Text,
    szczebel    Text,
    teryt       Text 
### lista
    id              Integer Primary Key,
    id_stanowiska   Integer,
    id_komitetu     Integer,
    okreg           Integer
### kandydat_lista
    id              Integer Primary Key,
    id_kandydata    Integer,
    id_listy        Integer,
    pozycja         Integer
