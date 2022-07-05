# Bazy danych Berkeley DB

## Zastosowanie

- Postfix
    - tablice asocjacyjne z mapowaniem aliasów, wirtualnych adresów etc

## Linia poleceń

### Instalacja narzędzi

```console
$ apt-get install db-util
```

### Zrzut bazy danych

W formacie hex:

```console
$ db_dump baza.db
```

W formacie drukowalnym:

```console
$ db_dump -p baza.db
```

## Python 3

Pakiet: [BSDDB3](https://pypi.org/project/bsddb3/)

```console
$ pip3 install bsddb3
```

lub

```console
$ apt-get install python3-bsddb3
```

### Otwarcie bazy typu **hash**

```python
import bsddb3

baza = bsddb3.hashopen("baza.db")

print(f'klucze = {baza.keys()}')

for k, v in baza.items():
    print(f'{k} = {v}')

if baza.has_key('abc'):
    print(baza.get('abc'))
else:
    print("Brak")
```

