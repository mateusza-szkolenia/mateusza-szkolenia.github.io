# Dodatkowe

W Pythonie można w wygodny sposób obsłużyć sytuację wyjątkową. Może to być błąd, lub zdarzenie, które przerywa normalny przebieg programu i wymaga specjalnego obsłużenia.

## Błąd konwersji

Program pyta o wagę i konwertuje ją na typ `float`. Jeśli użytkownik wpisze wartość (napis), której nie da się przekonwertować, program zgłosi błąd `ValueError`. Można go przechwycić i wyświetlić komunikat o błędzie.

```python
try:
    waga = float(input("Podaj wagę: "))
except ValueError:
    print("Nieprawidłowa wartość")
```

## Błąd dzielenia przez zero

PRogram pyta o dwie liczby i podaje ich iloraz. Jeśli użytkownik wpisze jako dzielnik wartość `0`, dzielenie nie jest możliwe. Możemy natomiast przypisać do wyniku symbol nieskończoność `float("inf")`.

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

## Błąd indeksowania

Program prosi o podanie imienia i podaje jego dziesiątą literę. (pozycja 9) Jeśli imię jest krótsze niż 10 liter, program zgłosi `IndexError`. Można go przechwycić i przypisać pusty napis.

Jeśli użytko

```python
imie = input("Podaj imię: ")

try:
    dziesiata_litera = imie[9]
except IndexError:
    dziesiata_litera = ""

print(f"Dziesiąta litera imienia to: {dziesiata_litera}")
```
