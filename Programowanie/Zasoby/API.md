# API

## isEven API

Dokumentacja: https://isevenapi.xyz/
CORS: `nie`

## Chuck Norris API

Dokumentacja: https://api.chucknorris.io/
CORS: `tak`

Przykład:
```javascript

fetch('https://api.chucknorris.io/jokes/random')
    .then(resp=>resp.json())
    .then(joke=>console.log("Joke: ", joke.value))
```

## NBP Web API

Doumentacja: http://api.nbp.pl/
CORS: `nie`

Przykład:
```python
import json
import requests

waluta = 'EUR'
url = f'http://api.nbp.pl/api/exchangerates/rates/A/{waluta}/today/'

resp = json.loads(requests.get(url).content)
print(f"Kurs {waluta}: {resp['rates'][0]['mid']}")
```
