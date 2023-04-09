# Wybory Samorządowe

Baza SQL zbudowana w oparciu o dane udostępnione przez Państwową Komisję Wyborczą.

## 2014

* [`sql`](data/2014-wybory-samorzadowe.sql)

## 2018

* [`sql`](data/2018-wybory-samorzadowe.sql)

Źródło danych: [https://samorzad2014.pkw.gov.pl](https://samorzad2014.pkw.gov.pl)

## schema

```sql
Create Table typ_komitetu (
    id          Integer Primary Key,
    nazwa       Text Unique
);
Create Table komitet (
    id          Integer Primary Key,
    sygnatura   Text Unique,
    nazwa       Text,
    id_typu     Integer
);
Create Table kandydat (
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
);
Create Table stanowisko (
    id          Integer Primary Key,
    nazwa       Text,
    szczebel    Text,
    teryt       Text 
);
Create Table lista (
    id              Integer Primary Key,
    id_stanowiska   Integer,
    id_komitetu     Integer,
    okreg           Integer
);
Create Table kandydat_lista (
    id              Integer Primary Key,
    id_kandydata    Integer,
    id_listy        Integer,
    pozycja         Integer
);
```
