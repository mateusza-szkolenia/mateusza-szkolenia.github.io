import urllib.request
import json

table = 'A'
code = 'EUR'
startDate = '2005-01-01'
endDate = '2006-01-01'

URL = f'http://api.nbp.pl/api/exchangerates/rates/{table}/{code}/{startDate}/{endDate}/'

with urllib.request.urlopen(URL) as f:
    x = json.load(f)
    x2 = {**x}
    del x2['rates']
    print(x2)
    for rate in x['rates']:
        print(rate)
