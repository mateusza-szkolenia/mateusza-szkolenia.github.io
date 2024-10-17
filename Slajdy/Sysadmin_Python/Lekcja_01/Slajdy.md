<!-- .slide: data-background="../assets/fundacja-sysops-devops-polska-bg-gray.png" -->
Python dla sysadminów

# Lekcja 1

Mateusz Adamowski

------
# Wstęp do pythona

(szybkie przypomnienie i wyrównanie)

---
<!-- .slide: data-autofragments -->
# Typy w pythonie

- proste:  
  `int  float  str  bool  ...`
- złożone:  
  `list  dict  tuple  set  ...`
- obiekty klas zdefiniowanych:  
  `class Cokolwiek`
- inne  
  
---
# Typy w pythonie

<div class="cols cols-2">
<div><code>C, C++, Java, Rust, Go</code><br>
zmienne mają typy  </div>
<div><code><u>python</u>, JS, PHP</code><br>
wartości mają typy</div>
</div>
------
<!-- .slide: data-autofragments -->
## `int` - liczby całkowite

- zawsze ze znakiem
- dowolny rozmiar (zakres)

Zastępuje każdy typ całkowity:  
`char  int  u64  BigInt`

---
## `int` - przykład

```python [1|2|3]
a = 1234
b = 586792345963492768536729485534543
c = -4273894732478932897437298497837894
```

Note:
- `b`: 109 bitów
- można użyć bezpośrednio do obliczeń kryptograficznych na liczbach o długości kilku tysięcy bitów

---
## `int` - literały

```python [1|2|3|4|5]
a = 8000000000              # dziesiętne
a = 8_000_000_000           # separator
a = 0x7fff                  # szesnastkowy (hex)
a = 0o755                   # ósemkowy (octal)
a = 0b1111_1111_0000_0001   # binarny
```

------
<!-- .slide: data-autofragments -->
## `float` - typ zmiennoprzecinkowy

- zawsze 64-bitowy
- IEEE 754  
  `double, FP64, float64 ...`
- obarczony "niedoskonałościami" standardu

---
## `float` - przykład

```python [1|2|3]
x = 34.5
x = 100 / 3             # 33.333333333333336
x = 0.1 + 0.2           # 0.30000000000000004
```

---
<!-- .slide: data-autofragments -->
## konwersja typów

- użycie konstruktorów
- wynik operacji arytmetycznych

---
## konwersja - przykłady

```python [1|2|3|4|5|6]
x = int(56.7)           # 56
x = int("1234")         # 1234
x = float(67)           # 67.0
x = int("12345", 8)     # 5349
x = 100 / 3             # float: 33.33
x = 100 // 3            # int: 33
```

------
<!-- .slide: data-autofragments -->
## operacje bitowe i binarne

- standardowe jak w C:  
  `| ^ & << >> ~`
- metody do liczenia bitów
- reprezentacja binarna, szesnastkowa, ósemkowa

---
### `int`: operacje bitowe

```python [1|2|3|4|5]
a = bin(192)            # '0b11000000'
a = (192).bit_length()  # 8
a = (192).bit_count()   # 2
a = hex(192)            # '0xc0'
a = oct(192)            # '0o300'
```

------
<!-- .slide: data-autofragments -->
### `str`

- napis
- obsługa Unicode
- niemutowalny
- indeksowalny
- dużo metod pomocniczych

---
### `str`: przykład

```python [1|2|3|4]
miasto = "Łódź"
len(miasto)         # 4
miasto[2]           # "d"
"kot" + "let"       # "kotlet"
```

Note:
- pojedynczy znak też jest stringiem
- nie można zmienić znaku przez przypisanie

---
<!-- .slide: data-autofragments -->
### f-strings

- tworzenie stringów poprzez podstawianie wartości
- najlepsza metoda "sklejania" stringów
- dużo sposobów formatowania

---
### f-strings: przykład

```python [1|2|3|4]
wiadomosc = f'Nazywam się {imie}'
wiadomosc = f'Wynik dodawania: {2 + 2}'
wiadomosc = f'Stan licznika: {licznik:09d}'
wiadomosc = f'{a = } {b = } {a * b = }'
```

---
### f-strings

Dokumentacja:  
<https://docs.python.org/3/tutorial/inputoutput.html>

---
### inne metody formatowania stringów

Odradzane.

- operator `%`
- metoda `.format`
- konwertowanie i sklejanie

---
### operator `%`

```python
"%s ma %d psy" % ("Ala", 2)

# Ala ma 2 psy
```

---
### operator `%`

```python
imie = "Ala"
ile = 2
"%s ma %d psy" % (imie, ile)

# Ala ma 2 psy
```

---
### metoda `.format`

```python
imie = "Ala"
ile = 2
"{} ma {} psy".format(imie, ile)

# Ala ma 2 psy
```

---
### sklejanie

```python
"Ala" + " ma " + str(2) + " psy"

# Ala ma 2 psy
```

------
### `bool`

<div class="cols cols-2">
<div><code>True</code></div>
<div><code>False</code></div>
</div>
------
<!-- .slide: data-autofragments -->
### `list`

- sekwencja wartości
- dynamiczna zmiana długości
- wartości dowolnych typów
- *typ referencyjny* (mutowalny)

---
### `list`: przykład

```python [1|1,3|1,4|1,5|1,6]
dni = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek']

dni[0]          # "Poniedziałek"
dni[1:3]        # ['Wtorek', 'Środa']
dni[-1]         # "Piątek"
dni[-1:]        # ['Piątek']
```

---
<!-- .slide: data-autofragments -->
### indeksowanie elementów

- działa analogicznie dla `str` i `list`
- `zmienna[pozycja]`
- `zmienna[- pozycja]`
- `zmienna[od : do]`
- `zmienna[od : krok : do]`

Note:
Jedna subtelna różnica:
- wycinek i element `str` zawsze też jest `str`
- wycinek `list` jest `list`, ale element jest właściwego sobie typu

Sięgnięcie po nieistniejącą pozycję skutkuje wyjątkiem `IndexError`, ale sięgnięcie poza zakres jest dozwolne i skutkuje pustym wynikiem.

---
<!-- .slide: data-autofragments -->
## `list`

Może pełnić funkcję innych struktur:
- **kolejka** (queue)
- **stos** (stack)
- **tablica** (array)

---
<!-- .slide: data-auto-animate -->
## lista jako kolejka

```python
kolejka = ["plik10.txt", "plik11.txt", "plik12.txt"]
```

```python [1]
plik = kolejka.pop(0)
print(plik)
plik = kolejka.pop(0)
print(plik)
plik = kolejka.pop(0)
print(plik)
```

---
<!-- .slide: data-auto-animate -->
## lista jako kolejka

```python
kolejka = ["plik11.txt", "plik12.txt"]
```

```python [1-2]
plik = kolejka.pop(0)
print(plik)
plik = kolejka.pop(0)
print(plik)
plik = kolejka.pop(0)
print(plik)
```

```
plik10.txt
```

---
<!-- .slide: data-auto-animate -->
## lista jako kolejka

```python
kolejka = ["plik12.txt"]
```

```python [3-4]
plik = kolejka.pop(0)
print(plik)
plik = kolejka.pop(0)
print(plik)
plik = kolejka.pop(0)
print(plik)
```

```
plik10.txt
plik11.txt
```


---
<!-- .slide: data-auto-animate -->
## lista jako kolejka

```python
kolejka = []
```

```python [5-6]
plik = kolejka.pop(0)
print(plik)
plik = kolejka.pop(0)
print(plik)
plik = kolejka.pop(0)
print(plik)
```

```
plik10.txt
plik11.txt
plik12.txt
```

Note:
- kolejne próby skończą się wyjątkiem `IndexError`

---
## lista jako stos

```python
stos = [1]
```

```python [1|2|3|5|6|7|8]
stos.append(10) # [1, 10]
stos.append(20) # [1, 10, 20]
stos.append(30) # [1, 10, 20, 30]
...
stos.pop()      # 30  # [1, 10, 20]
stos.pop()      # 20  # [1, 10]
stos.pop()      # 10  # [1]
stos.pop()      # 1   # []
```

Note:
- kolejne próby skończą się wyjątkiem `IndexError`

---
<!-- .slide: data-autofragments -->
# lista - operacje

- `lista.reverse()`
- `lista.sort()`

---
<!-- .slide: data-autofragments -->
## słownik `dict`

- kolekcja przyporządkowań KLUCZ ⇾ WARTOŚĆ
- klucze: najczęściej `str` (ale nie tylko)
- wartości: dowolne typy
- _słownik, mapa, hash, tablica asocjacyjna itp_

---
## słownik

```python
user = {"name": "joe", "uid": 1033}
```

---
<!-- .slide: data-autofragments -->
## zbiór `set`

- kolekcja unikalnych wartości
- brak kolejności

---
## zbiór

```python
opcje = {"compress", "fast", "zero"}
```

---
<!-- .slide: data-autofragments -->
## krotka `tuple`

- sekwencja wartości

------
# Operacje na plikach

---
## `open`: otwarcie pliku

```python
open(NAZWAPLIKU)
```

------
<!-- .slide: data-auto-animate -->
## `str` vs `byte`

```
x = "ŻÓŁW"
len(x)          # 4
```

---
## napis

<!-- .slide: data-auto-animate -->
<div class=cols style='font-size:4em'>
<div>Ż</div>
<div>Ó</div>
<div>Ł</div>
<div>W</div>
</div>

---
## Unicode

<!-- .slide: data-auto-animate -->
<div class=cols style='font-size:3em'>
<div>Ż<br>379</div>
<div>Ó<br>211</div>
<div>Ł<br>321</div>
<div>W<br>87</div>
</div>

---
## UTF-8

<!-- .slide: data-auto-animate -->
<div class=cols style='font-size:3em'>
<div>Ż<br><code style='font-size:0.4em'>c5 bb</code></div>
<div>Ó<br><code style='font-size:0.4em'>c3 93</code></div>
<div>Ł<br><code style='font-size:0.4em'>c5 81</code></div>
<div>W<br><code style='font-size:0.4em'>57</code></div>
</div>

---
## bajty `bytes`

```python [1|2|1-2|4|5|4-5|7]
bytes("ŻÓŁW", 'UTF8')           # b'\xc5\xbb\xc3\x93\xc5\x81W'
len(bytes("ŻÓŁW", 'UTF8'))      # 7

bytes("ŻÓŁW", 'ISO8859-2')      # b'\xaf\xd3\xa3W'
len(bytes("ŻÓŁW", 'ISO8859-2')) # 4

bytes("χελώνα", "ISO8859-2")  # UnicodeEncodeError
```

---
## konwersja

```python [1|2|1,2|4]
bytes("napis", "UTF8")  #
"napis".encode()        # zwraca bajty

b'\xd0\xba\xd0\xbe\xd1\x82'.decode() # 'кот'
```

Można podać stronę kodową, domyślnie jest to `UTF8`

------
## użycie modułów

```
import nazwa

nazwa.funkcja()
```

---
## użycie funkcji z modułów

```
from nazwa import funkcja

funkcja()
```

---
## użycie funkcji z modułów

**NIEWSKAZANE**

```
from nazwa import *

funkcja()
```

---
<!-- .slide: data-autofragments -->
## przydatne moduły

- `os`
- `glob`
- `shutil`
- `sys`
- `math`
- `subprocess`
- `re`
- `datetime`

------
<!-- .slide: data-autofragments -->
## `os`

Funkcje systemu operacyjnego (syscalle)

Operacje plikowe:  
`stat`, `unlink`, `mkdir`, `chmod`

Operacje systemowe:  
`statvfs`, `sync`, `curdir`

Operacje na procesie:  
`getpid`, `getenv`

------
<!-- .slide: data-autofragments -->
## `os.path`

Operacje na ścieżkach

Testy:  
`isdir`, `isfile`, `exists`

Budowanie ścieżek:  
`dirname`, `basename`, `commonpath`, `relpath`

------
## `glob`

Listowanie pasujących nazw plików.

------
<!-- .slide: data-autofragments -->
## `shutil`

Odpowiedniki poleceń shellowych, które wymagają więcej niż jednej operacji.

Np. rekurencyjne kopiowanie, usuwanie.

------
<!-- .slide: data-autofragments -->
## `sys`

Informacja o "systemie" i Pythonie.

- `sys.argv` - parametry uruchomienia procesu
- `version` - wersja Pythona
- `version_info` - wersja Pythona
- `sys.stdin`, `sys.stdout` - deskryptory

------
<!-- .slide: data-autofragments -->
## `math`

Funkcje matematyczne.

- `log` - logarytm
- `sin`, `cos` - trygonometria
- `sqrt`, `pow` - potęgowanie i pierwiastkowanie
- `pi` - stała π

------
<!-- .slide: data-autofragments -->
## `subprocess`

Wygodna obsługa procesów potomnych.

------
<!-- .slide: data-autofragments -->
## `re`

Wyrażenia regularne.

------
<!-- .slide: data-autofragments -->
## `datetime`, `time`

Daty, godziny.
