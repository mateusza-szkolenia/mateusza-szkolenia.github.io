# Dodatkowe

W Pythonie można w wygodny sposób obsłużyć sytuację wyjątkową. Może to być błąd, lub zdarzenie, które przerywa normalny przebieg programu i wymaga specjalnego obsłużenia.

## `ValueError` - Błąd wartości (konwersji)

Program pyta o wagę i konwertuje ją na typ `float`. Jeśli użytkownik wpisze wartość (napis), której nie da się przekonwertować, program zgłosi błąd `ValueError`. Można go przechwycić i wyświetlić komunikat o błędzie.

```python
try:
    waga = float(input("Podaj wagę: "))
except ValueError:
    print("Nieprawidłowa wartość")
```

## `ZeroDivisionError` - Błąd dzielenia przez zero

Program pyta o dwie liczby i podaje ich iloraz. Jeśli użytkownik wpisze jako dzielnik wartość `0`, dzielenie nie jest możliwe. Możemy natomiast przypisać do wyniku symbol nieskończoność `float("inf")`.

```python
a = int(input("Podaj a: "))
b = int(input("Podaj b: "))

try:
    wynik = a / b
except ZeroDivisionError:
    print("Dzielenie przez zero!")
    wynik = float('inf')            # nieskończoność

print(wynik)
```

## `IndexError` - Błąd indeksowania

Program prosi o podanie imienia i podaje jego dziesiątą literę. (pozycja 9) Jeśli imię jest krótsze niż 10 liter, program zgłosi `IndexError`. Można go przechwycić i napisać odpowiedni komunikat.

```python
imie = input("Podaj imię: ")

try:
    dziesiata_litera = imie[9]
    print(f"Dziesiąta litera imienia to: {dziesiata_litera}")
except IndexError:
    print(f"Imię nie ma dziesiątej litery.")
```

## Inne typowe błędy i wyjątki

### `KeyboardInterrupt`

Przerwanie działania programu skrótem klawiaturowym `CTRL-C`.

### `EOFError`

Brak możliwości wczytania danych z powodu końca pliku. (Występuje gdy naciśniemy `CTRL-D`)

### `ModuleNotFoundError`

Brak możliwości załadowania modułu instrukcją `import`. Moduł nie jest zainstalowany. Możliwe też, że zrobiliśmy pomyłkę w jego nazwie.

### `NameError`

Odwołujemy się do zmiennej lub funkcji (nazwy), której nie przypisaliśmy dotychczas żadnej wartości.

### `TypeError`

Błąd typu. Próbujemy wykonać operację na wartości (lub wartościach), które tej operacji nie obsługują.

## Błąd składni - `SyntaxError`

Ten wyjątek ma inn charakter. Nie jest zgłaszany podczas uruchamiania programu, ale podczas jego analizy leksykalnej (parsowania). Tego błędu nie da przechwycić w normalnym programie. Możliwe jest natomiast przechwycenie tego błędu, jeśli został zgłoszony przez funkcję typu `eval()`, `exec()`, `compile()`.
