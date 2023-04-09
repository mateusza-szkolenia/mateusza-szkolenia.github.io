CREATE TABLE typ_komitetu (
    id          Integer Primary Key,
    nazwa       Text Unique
);
CREATE TABLE komitet (
    id          Integer Primary Key,
    sygnatura   Text Unique,
    nazwa       Text,
    id_typu     Integer
);
CREATE TABLE kandydat (
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
CREATE TABLE stanowisko (
    id          Integer Primary Key,
    nazwa       Text,
    szczebel    Text,
    teryt       Text 
);
CREATE TABLE lista (
    id              Integer Primary Key,
    id_stanowiska   Integer,
    id_komitetu     Integer,
    okreg           Integer
);
CREATE TABLE kandydat_lista (
    id              Integer Primary Key,
    id_kandydata    Integer,
    id_listy        Integer,
    pozycja         Integer
);
