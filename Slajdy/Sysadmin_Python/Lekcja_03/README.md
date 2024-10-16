# Lekcja 3

## Slajdy

[Pokaz slajdów](Slajdy.html) • [Treść](Slajdy.md)

## Tematy

- Import i eksport danych: JSON, YAML, Pickle, Marshal
- Podstawy obiektowości
- Wbudowane dekoratory
- @dataclass

## Zadania

### Zadanie 1

Napisać program przetwarzający bazę polskich miejscowości w formacie YAML lub JSON:

https://mateusza-szkolenia.github.io/Programowanie/Zbiory_danych/Miejscowosci/

Stworzyć klasę, która:
- opakuje surowy słownik pobrany z JSON lub Yaml
- będzie potrafiła wyświetlić swoje skłądowe w standardowy sposób

Stworzyć funkcję pomocniczą do liczenia odległości między dwoma współrzędnymi (w linii prostej).

Stworzyć klasę, która będzie zawierać listę miejscowości wczytaną z pliku,
a także będzie potrafiła filtrować miejscowości wg odległości od danych współrzędnych lub wg nazwy.

Na koniec odnaleźć dwie pary miejscowości:
- z maksymalną odległością od siebie nawzajem
- z minimalną odległością od siebie nawzajem

### Zadanie 2

Napisać program przetwarzający lotnisk <https://datahub.io/core/airport-codes>

Dla dwóch wskazanych lotnisk (wg kodów IATA, czyli np. WAW, GDN) podać:
- informację o lotniskach
- ich współrzędne
- przybliżoną odległość w linii prostej między lotniskami (funkcja Haversine)



## Rozwiązania

[Rozwiązania zadań](Rozwiazania.md)