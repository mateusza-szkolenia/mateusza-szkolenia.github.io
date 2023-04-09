Create Temporary Table zmienne(
    nazwa Text Unique,
    wartosc
);

Insert Into zmienne Select 'imie', 'MAGDALENA';
Insert Into zmienne Select 'plec', (
    Select plec
    From kandydat
    Where imie = (Select wartosc From zmienne Where nazwa = 'imie')
    Group By plec
    Order By Count() Desc
    Limit 1
);

Select * From zmienne;

Create Temporary View wyniki As
Select
    imie,
    rok_ur,
    count() As liczba,
    liczba_wszystkich,
    1.0 * count() / liczba_wszystkich As popularnosc
From kandydat k1
Join (
    Select
        rok_ur As rok,
        count() As liczba_wszystkich
    From kandydat
    Where plec = (Select wartosc From zmienne Where nazwa = 'plec')
    Group By rok_ur
) As roczniki
On roczniki.rok == k1.rok_ur
Where
    imie = (Select wartosc From zmienne Where nazwa = 'imie')
Group By
    imie,
    rok_ur
;

Explain Select * From wyniki;
Explain Query Plan Select * From wyniki;

Create Temporary View wykres As
Select
    imie,
    rok_ur,
    liczba,
    Round(liczba_wszystkich / liczba),
    Replace(
        Hex(Zeroblob(100.0 * popularnosc / (Select Max(popularnosc) From wyniki))),
        '00', 'X'
    ) || ' ' || liczba
From wyniki
Order By rok_ur;

Select * From wykres;

