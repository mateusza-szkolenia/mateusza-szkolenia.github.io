# 00: Podstawowe pojęcia

------
## Bit

*binary digit*

---
<!-- .slide: data-autofragments -->

## Bit

- jednostka ilości informacji
- jeden z dwóch możliwych stanów
  - prawda ⇿ fałsz
  - zero ⇿ jeden
  - włączony ⇿ wyłączony

------
## System binarny

2 cyfry:  
0 i 1

---
<!-- .slide: data-auto-animate -->
### Przykład

Liczba binarna: `101111`

---
<!-- .slide: data-auto-animate -->
### Przykład

```
 1  0  1  1  1  1
```

---
<!-- .slide: data-auto-animate -->
### Przykład

```
 1  0  1  1  1  1
```

```txt
32 16  8  4  2  1
```

---
<!-- .slide: data-auto-animate -->
### Przykład
```
 1  0  1  1  1  1
```

```txt
32  -  8  4  2  1
```

---
<!-- .slide: data-auto-animate -->
### Przykład
```txt
32 + 8 + 4 + 2 + 1
```

---
<!-- .slide: data-auto-animate -->
### Przykład
```txt
32 + 8 + 4 + 2 + 1 = 47
```

---
<!-- .slide: data-auto-animate -->
### Wynik

`101111` = `47`

------
## System dziesiętny

dziesięć cyfr:  
0, 1, 2, ... 9

------
## System szesnastkowy

- szesnaście cyfr
- `0, 1, 2, 3, 4, 5, 6, 7, 8, 9`
- `A, B, C, D, E, F`

---
### zastosowanie

- wygodny zapis wartości binarnych
- cztery bity to jedna cyfra szesnastkowa

---
<!-- .slide: data-auto-animate -->
### przykład

liczba binarna: `1011011111000110101`

---
<!-- .slide: data-auto-animate -->
### przykład

```
1011011111000110101
```

---
<!-- .slide: data-auto-animate -->
### przykład

```txt
101 1011 1110 0011 0101
```

---
<!-- .slide: data-auto-animate -->
### przykład

```
101 1011 1110 0011 0101
```

```
  5   11   14    3    5
```

---
<!-- .slide: data-auto-animate -->
### przykład

```
101 1011 1110 0011 0101
```

```
  5    B    E    3    5
```

---
<!-- .slide: data-auto-animate -->
## wynik

`5be35`

---
## zapis

- `0x5be35` (C, Java, Python)
- `5be35h` (Pascal, ASM)

------
## System ósemkowy

osiem cyfr:  
0, 1, 2, 3, 4, 5, 6, 7

---
### zastosowanie

- wygodny zapis wartości binarnych
- trzy bity to jedna cyfra ósemkowa

---
### zapis

`537`

- `0537` (C, Java, Python2, YAML, JS)
- `0o537` (Python3)

------
## Bajt (byte)

*binary term*

---
### Bajt

8 bitów

(256 wartości)

------
<!-- .slide: data-autofragments -->
## Kilobajt (1kB)

* 1024 B?
* 1000 B?

Różnica: *2.4%*

---
### Dlaczego 1024?

2<sup>10</sup> = 1024 ≈ 1000

---
### 1000 vs 1024

<div style='display: flex; justify-content: space-between;'>
<div style='width: 45%' class=fragment>

### 1000

- system dziesiętny
- przedrostki z układu SI

</div>
<div style='width: 45%' class=fragment>

### 1024

- system binarny
- symetria budowy
- adresowalność

</div>
</div>

------
<!-- .slide: data-autofragments -->
## Megabajt (1MB)

* 1024 × 1024 = 1048576 B?
* 1000 × 1000 B?
* 1000 × 1024 B?

Różnica: *4.85%*

------
<!-- .slide: data-autofragments -->
## Gigabajt (1GB)

* 1024 × 1024 × 1024 = 1073741824 B?
* 1000 × 1000 × 1000 B?

Różnica: *7.3%*

------
## System SI

| jednostka| symbol |wartość  | wartość            |
|----------|--------|--------:|-------------------:|
| bajt     | B      |     1 B | 1 B                |
| kilobajt | kB     |  1000 B | 1000 B             |
| megabajt | MB     | 1000 kB | 1000000 B          |
| gigabajt | GB     | 1000 MB | 1000000000 B       |
| terabajt | TB     | 1000 GB | 1000000000000 B    |
| petabajt | PB     | 1000 TB | 1000000000000000 B |

<style> #system-si + table { font-size: 0.8em; } </style>

---
<!-- .slide: data-autofragments -->
## System "informatyczny"

| jednostka| symbol |wartość   | wartość            |
|----------|--------|---------:|-------------------:|
| bajt     | B      |      1 B | 1 B                |
| kibibajt | kiB    |   1024 B | 1024 B             |
| mebibajt | MiB    | 1024 kiB | 1048576 B          |
| gibibajt | GiB    | 1024 MiB | 1073741824 B       |
| tebibajt | TiB    | 1024 GiB | 1099511627776 B    |
| pebibajt | PiB    | 1024 TiB | 1125899906842624 B |

<style> #system-informatyczny + table { font-size: 0.8em; } </style>

------
<!-- .slide: data-autofragments -->
## Na co dzień

- Używa się wartości przybliżonych
- Obu systemów używa się przemiennie
- Dokładny rozmiar wyraża się w bajtach

------
<!-- .slide: data-autofragments -->
## Pojemność dysków i zużycie miejsca

Brak możliwości precyzyjnego wskazania
- struktura systemu plików
- wielkość bloku
- kompresja i pliki rzadkie
- dodatkowe mechanizmy (snapshoty, CoW)

------
## ASCII

American Standard Code for Information Interchange

---
### Znaki ASCII

- litery `A-Z` i `a-z`
- cyfry
- podstawowe znaki interpunkcyjne
- podstawowe matematyczne
- znaki sterujące

Łącznie: 127 znaków (7 bitów)

------
## Strony kodowe (8-bit)

---
### ISO-8859-x

---
### Windows-125x

------
## Unicode

------
## UTF-8

------
<!-- .slide: data-autofragments -->
# Komputer a OS

---
<!-- .slide: data-autofragments -->
# Rola OS

- dostęp do urządzeń (drivery)
- zarządzanie pamięcią
- zarządzanie procesami
- udostępnienie interfejsu

------
[Koniec](./)

