<!-- .slide: data-background="../assets/fundacja-sysops-devops-polska-bg-gray.png" -->
Python dla sysadminów

# Lekcja 8

Mateusz Adamowski

---
<!-- .slide: data-autofragments -->
# Python a Bash

Czy i kiedy przepisać skrypt Basha na Pythona?

---
<!-- .slide: data-autofragments -->
# Cechy shella

- _uruchamianie programów_
- polecenia zorientowane na operacje na plikach
- zmienne → nazwy plików

------
# Typowe operacje shellowe

...ale zapisane w Pythonie

---
## Kopiowanie pliku

<div class="cols cols-2">
<div>
<h3>Bash</h3>
<pre>
<code>cp pierwszy drugi</code>
</pre>
</div>
<div style='width: 70%'>
<h3>Python</h3>
<pre>
<code>from shutil import copy</code>
<code></code>
<code>copy("pierwszy", "drugi")</code>
</pre>
</div>
</div>

---
## Kopiowanie katalogu

<div class="cols cols-2">
<div>
<h3>Bash</h3>
<pre>
<code>cp -r pierwszy drugi</code>
</pre>
</div>
<div style='width: 70%'>
<h3>Python</h3>
<pre>
<code>from shutil import copytree</code>
<code></code>
<code>copytree("pierwszy", "drugi")</code>
</pre>
</div>
</div>

---
## Usuwanie pliku

<div class="cols cols-2">
<div>
<h3>Bash</h3>
<pre>
<code>rm plik</code>
</pre>
</div>
<div style='width: 70%'>
<h3>Python</h3>
<pre>
<code>from os import unlink</code>
<code></code>
<code>unlink("plik")</code>
</pre>
</div>
</div>

---
## Usuwanie pliku

_gdy plik może nie istnieć_

<div class="cols cols-2">
<div>
<h3>Bash</h3>
<pre>
<code>rm -f plik</code>
</pre>
</div>
<div style='width: 70%'>
<h3>Python</h3>
<pre>
<code>from os import unlink</code>
<code></code>
<code>try:</code>
<code>  unlink("plik")</code>
<code>except FileNotFound:</code>
<code>  pass</code>
</pre>
</div>
</div>

---
## Uruchomienie programu

<div class="cols cols-2">
<div>
<h3>Bash</h3>
<pre>
<code>program arg1 arg2</code>
</pre>
</div>
<div style='width: 70%'>
<h3>Python</h3>
<pre>
<code>from subprocess import run</code>
<code></code>
<code>run(["program", "arg1", "arg2"])</code>
</pre>
</div>
</div>

---
## Uruchomienie programu

i zapisanie wyniku do pliku

<div class="cols cols-2">
<div>
<h3>Bash</h3>
<pre>
<code>program arg1 > wynik</code>
</pre>
</div>
<div style='width: 70%'>
<h3>Python</h3>
<pre>
<code>from subprocess import run</code>
<code></code>
<code>process = run(["program", "arg1"]
                    capture_output=True)</code>
<code></code>
<code>with open("wynik", "wb") as output:</code>
<code>  output.write(process.stdout)</code>
</pre>
</div>
</div>

---
## Usuwanie plików wg maski

<div class="cols cols-2">
<div>
<h3>Bash</h3>
<pre>
<code>rm -f *.png</code>
</pre>
</div>
<div style='width: 70%'>
<h3>Python</h3>
<pre>
<code>from os import unlink</code>
<code>from glob import glob</code>
<code></code>
<code>for filename in glob("*.png"):</code>
<code>  unlink(filename)</code>
</pre>
</div>
</div>

------
# A zalety?

---
## Brak wad

[Pułapki Basha](https://mywiki.wooledge.org/BashPitfalls)
[The UNIX Haters Book](https://web.mit.edu/~simsong/www/ugh.pdf)

---
<!-- .slide: data-autofragments -->
## Problemy basha

Problematyczne sytuacje

- spacje i znaki specjalne w nazwach plików
- bardzo długa lista plików (`xargs`)
- brak plików pasujących do maski

---
<!-- .slide: data-autofragments -->
## Problemy basha

- ubogi aparat arytmetyczny
- brak zagnieżdżonych tablic
- konieczność polegania na zewnętrznych programach
- złe nawyki "programistów"

---
<!-- .slide: data-autofragments -->
## Zalety pythona

- brak ograniczeń w długości listy argumentów
- brak problemów z _eskejpowaniem_
- wydajniejsze operacje na tekstach
- funkcjonalny system typów
- obciążenie wydajności procesami potomnymi

---
## Prosty skrypt

```bash
#!/bin/bash

date > /tmp/plik
cp /tmp/plik /tmp/plik2
mv /tmp/plik /tmp/plik3
```
---
## Uruchomienie

```command [1|2,6,10|3,7,11|4,8,12|5,9,13|14]
$ strace -e trace=clone -f bash skrypt.sh 
clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLDstrace: Process 15112 attached
, child_tidptr=0x7081aaf60a10) = 15112
[pid 15112] +++ exited with 0 +++
-- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=15112, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLDstrace: Process 15113 attached
, child_tidptr=0x7081aaf60a10) = 15113
[pid 15113] +++ exited with 0 +++
-- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=15113, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLDstrace: Process 15114 attached
, child_tidptr=0x7081aaf60a10) = 15114
[pid 15114] +++ exited with 0 +++
-- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=15114, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
+++ exited with 0 +++
```

---
## Uruchomienie

3 operacje = 3 procesy potomne

Note:
- tworzenie procesu jest tanie i szybkie w Linuksie
- ale jednak nie aż tak
- może zaśmiecać logi `auditd` itp

---
## Operacje na tekście

Shell

```bash
napis="ala ma kota"

echo "$napis" | sed -e 's/ala/Ala/' | sed -e 's/kota/psa/'
```

---
## Operacje na tekście

BASH

```bash
napis="ala ma kota"
napis2="${napis/ala/Ala}"
napis3="${napis2/kota/psa}"

echo "$napis3"
```

---
## W Pythonie

```python
napis = "ala ma kota"
napis2 = napis.replace("ala", "Ala").replace("kota", "psa")

print(napis2)
```

---
