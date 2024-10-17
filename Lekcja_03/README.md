# Lekcja 3

## Slajdy

[Pokaz slajdów](Slajdy.html) • [Treść](Slajdy.md)

## Tematy

- Moduł `argparse`
- Import i eksport danych: `JSON`, `YAML`
- Podstawy obiektowości
- Wbudowane dekoratory
- `@dataclass`

## Zadania

### Zadanie 1

Napisać program wczytujący bazę lotnisk w formacie JSON
pobraną ze strony: <https://datahub.io/core/airport-codes>

Znaleźć na liście wszystkie duże lotniska (`"type": "large_airport"`)
i zapisać je w pliku JSON jako tablicę słowników postaci:

```
{
  "name": "Warsaw Chopin Airport",
  "continent": "EU",
  "iso_country": "PL",
  "municipality": "Warsaw",
  "iata_code": "WAW",
  "icao_code": "EPWA",
  "gps": [52.165699, 20.9671]
}
```

### Zadanie 2

W oparciu o plik z pierwszego zadania, stworzyć program
zawierający poniższe funkcje:

1. Funkcja obliczająca przybliżoną odległość między dwoma
współrzędnymi (Haversine)

2. Funkcja podająca przybliżoną odległość między dwoma
lotniskami, wczytanymi z pliku.

3. Funkcja podająca listę lotnisk znajdujących się
we wskazanej odległości od danego lotniska.

Skrypt powinien być jednocześnie samodzielnym programem
i modułem do zaimportowania z innego skryptu.

### Zadanie 3

Napisać program przetwarzający bazę polskich miejscowości w formacie YAML lub JSON:

https://mateusza-szkolenia.github.io/Programowanie/Zbiory_danych/Miejscowosci/

Stworzyć klasę, która:
- opakuje surowy słownik pobrany z JSON lub Yaml
- będzie potrafiła wyświetlić swoje składowe w standardowy sposób

Stworzyć funkcję pomocniczą do liczenia odległości między dwoma współrzędnymi (w linii prostej).

Stworzyć klasę, która będzie zawierać listę miejscowości wczytaną z pliku,
a także będzie potrafiła filtrować miejscowości wg odległości od danych współrzędnych lub wg nazwy.

Na koniec odnaleźć dwie pary miejscowości:
- z maksymalną odległością od siebie nawzajem
- z minimalną odległością od siebie nawzajem



## Rozwiązania

[Rozwiązania zadań](Rozwiazania.md)