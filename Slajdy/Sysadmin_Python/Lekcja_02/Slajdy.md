<!-- .slide: data-background="../assets/fundacja-sysops-devops-polska-bg-gray.png" -->
Python dla sysadminów

# Lekcja 2

Mateusz Adamowski

------
# Wstęp do pythona

(szybkie przypomnienie i wyrównanie)

---
<!-- .slide: data-autofragments -->
## Instrukcje sterujące

- wyjątki  
  `raise`, `try`, `except`, `finally`
- warunki  
  `if`, `elif`, `else`
- pętle  
  `for`, `while`, `else` (_sic_)
- dopasowania  
  `match`, `case`

------
## Wyjątki

Sytuacja uniemożliwiające wykonanie funkcji zgodnie z jej przeznaczeniem.

---
## Przykłady wyjątków

- `FileNotFoundError`
- `PermissionError`
- `ZeroDivisionError`
- `TypeError`
- `ValueError`

---
## Obłsuga wyjątków

Nieobsłużony wyjątek propaguje się wyżej.

Ostatecznie - kończy program z kodem błędu.

---
```
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ZeroDivisionError: division by zero
```

---
## Obłsuga wyjątków

```python [1-8|1,4|2-3|2|4|5|6|8]
try:
  plik = open("plik1.txt", "r")
  dane = plik.read()
except FileNotFound:
  print("Plik nie istnieje, używam pustego zbioru.")
  dane = ""

print(f"Długość danych: {len(dane)}")
```

Note:
- nie koniecznie oznacza to błąd
- powżyszy kod nie obsłuży innych błędów otwarcia i czytania z pliku:
  - braku praw dostępu
  - błąd IO lub OS (np. zbyt długa lista symlinków)
------
## Warunki

```python
if a == 9:
  print("dziewięć")
elif a == 11:
  print("jedenaście")
else:
  print("co innego")
```

---
## Wyrażenia warunkowe

```python
x = "pełnoletni" if wiek >= 18 else "nieletni"
```

---
## Operator `or`

Użycie do niewelowania pustej wartości

```python
imie = input("Podaj imie:") or "anonim"
```

------
## Pętla `for`

```python
for liczba in [4, 5, 6, 7]:
  print(f"Liczba: {liczba}")
```

---
## Pętla `while`

```python
while x < 100:
  x = x * 1.13
  print("#" * x)
```

---
## Sterowanie pętli

- `break`
- `continue`

---
## Blok `else` w pętlach

```python [1-7|1|2|3|7|1|2|1|2|1|2|1|2|4-5|7]
for serwer in serwery:
  if serwer.jest_wolny:
    break
else:
  serwer = stworz_nowy()

print("Serwer do użycia: {serwer}")
```

---
## Wyrażenia listowe

```python
linie = [linia for linia in linie_pliku if linia != ""]
```

---
## Wyrażenia listowe

```python
linie = [linia
         for linia in linie_pliku
         if linia != "" and not linia.startswith("#")]
```

---
## Wyrażenia listowe

```python
liczby = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

szesciany = [n**3 for n in liczby]
```

---
## Generatory

```python
liczby = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

szesciany = (n**3 for n in liczby)
```

---
## Dopasowania

```python

match osoba:
  case imie, 'M', wiek:
    print("Mężczyzna {imie} ({wiek})")
  case imie, 'K', _:
    print("Kobieta {imie}")
  case _, _, _:
    print("Brak danych")
```

------
# Funkcje

---
## Składnia

```python
def funkcja(parametr):
  print("Witam serdecznie")
  print(f"I żegnam: {parametr}")
  return 42
```

Note:
  - twórcy pythona stwierdzili, że wygodnie będzie nie definiować typów parametrów ani typu zwracanego

---
## Opisywanie typów i dokumentacja

```python
def funkcja(parametr: str) -> int:
  """Funkcja witająca"""

  print("Witam serdecznie")
  print(f"I żegnam: {parametr}")
  return 42
```

Note:
  - a jeszcze wygodniej, jakby je jednak podawać.

---
## Lambdy

- funkcje anonimowe
- proste funkcje w postaci wyrażeń

---
## Użycie lambdy

Sortowanie wg drugiej litery imienia

```python
imiona = ["Michał", "Adam", "Mateusz", "Igor", "Remigiusz"]

imiona.sort(key=lambda x: x[1])
```
