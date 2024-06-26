# API

## isEven API

Dokumentacja: <https://isevenapi.xyz/>  
CORS: `nie`  

### Przykład
```shell
$ curl https://api.isevenapi.xyz/api/iseven/6/
```

## Chuck Norris API

Dokumentacja: <https://api.chucknorris.io/>
CORS: `tak`  

### Przykład
```javascript
fetch('https://api.chucknorris.io/jokes/random')
    .then(resp=>resp.json())
    .then(joke=>console.log("Joke: ", joke.value))
```

## NBP Web API

Doumentacja: <http://api.nbp.pl/>  
CORS: `nie`  

### Przykład
```python
#!/usr/bin/python3

import json
import urllib.request

waluta = 'EUR'
url = f'http://api.nbp.pl/api/exchangerates/rates/A/{waluta}/today/'

with urllib.request.urlopen(url) as f:
    resp = json.load(f)
print(f"Kurs {waluta}: {resp['rates'][0]['mid']}")
```

## Random User Generator

Dokumentacja: <https://randomuser.me/>
CORS: `tak`

### Przykład
```javascript
fetch('https://randomuser.me/api/')
    .then(r => r.json())
    .then(u => console.log(u))
```

## dummyJSON

Dokumentacja: <https://dummyjson.com/docs>
CORS: `tak`

