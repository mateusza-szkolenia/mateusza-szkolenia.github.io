# Dodatkowe

Python posiada moduły obsługujące zarówno ułamki zwykłe jak i dziesiętne o dowolnej precyzji.

## Ułamki zwykłe (moduł `fractions`)

```python
from fractions import Fraction

a = Fraction(1, 7)
b = Fraction(3, 5)

print(a * b)        # wynik: 3/35
print(a + b)        # wynik: 26/35
print(b - a)        # wynik: 16/35
print(float(a))     # 0.14285714285714285
```

Wartości i operacje, które okazały się problematyczne w przypadku użycia typu `float`, zadziałają prawidłowo gdy użyjemy klasy `Fraction`.

```python
from fractions import Fraction

a = Fraction("0.1")
b = Fraction("0.7")
c = Fraction("0.3")

print(a + b)        # wynik 4/5
print(a + c)        # wynik 3/10
```

Użycie (już niedokładnej) wartości typu `float` w konstruktorze spowoduje dość trudny do przewidzenia i niezgodny z intuicją wynik.

```python
from fractions import Fraction

a = Fraction(0.1)   # typ float

print(a)            # wynik 3602879701896397/36028797018963968

# wartość w mianowniku to 2**55
print(2**55)
```

## Ułamki dziesiętne (moduł `decimal`)

```python
from decimal import Decimal

a = Decimal('0.1')
b = Decimal('0.7')

print(a * b)        # wynik: 0.07
print(a + b)        # wynik: 0.8
print(b - a)        # wynik: 0.6

print(float(a))     # wynik: 0.1
```

Wartości i operacje, które okazały się problematyczne w przypadku użycia typu `float`, zadziałają prawidłowo gdy użyjemy klasy `Decimal`.

```python
from decimal import Decimal

a = Decimal("0.1")
b = Decimal("0.7")
c = Decimal("0.3")

print(a + b)        # wynik 0.8
print(a + c)        # wynik 0.4
```

Użycie wartości typu `float` w konstruktorze ujawni niedokładność typu `float`.

```python
from decimal import Decimal

a = Decimal(0.1)          # typ float w konstruktorze

print(a)            # wynik 0.1000000000000000055511151231257827021181583404541015625

```

## Składnia

### Aliasowanie

Jeśli zamierzamy korzystać z klas `Decimal` i/lub `Fraction` i chcemy uniknąć pisania ich długich nazwy przy każdym użyciu, możemy użyć aliasów przy imporcie:

```python
from decimal import Decimal as D
from fractions import Fraction as F

a = F(3, 4)
d = D('0.01')

print(a)
print(d)
```

### Operacje między różnymi typami

#### Liczby całkowite `int`

Klasy `Fraction` i `Decimal` pozwalają na mnożenie, dzielenie, dodawanie, odejmowanie i potęgowanie przez liczb całkowitą (`int`) - wynik pozostaje oryginalnym typem.

```python
from fractions import Fraction
from decimal import Decimal

print(F(3, 4) * 3)      # 9/4
print(F(3, 4) ** 2)     # 9/16
print(F(3, 4) - 3)      # -9/4

print(D("0.2") * 3)     # 0.6
print(D("0.2") ** 2)    # 0.04
```

#### Liczby zmiennoprzecinkowe `float`

Wykonanie tych operacji wraz z liczbą typu `float` spowoduje konwersję typu `Fraction` na typ `float` i wykonanie operacji w sposób typowy dla `float`.




