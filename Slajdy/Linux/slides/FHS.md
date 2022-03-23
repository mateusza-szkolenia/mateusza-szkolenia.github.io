# 40: Filesystem Hierarchy Standard
---
## Top level folders

<div>
<div class=fragment>
<i class='fa fa-folder'></i> <code>bin</code>
</div>
<div  class=fragment>
<i class='fa fa-folder'></i> <code>boot</code>
</div>
<div  class=fragment>
<i class='fa fa-folder'></i> <code>dev</code>
</div>
<div  class=fragment>
<i class='fa fa-folder'></i> <code>etc</code>
</div>
<div  class=fragment>
<i class='fa fa-folder'></i> <code>home</code>
</div>
<div  class=fragment>
<i class='fa fa-folder'></i> <code>lib</code>
</div>
<div  class=fragment>
<i class='fa fa-folder'></i> <code>lib32</code>
</div>
<div  class=fragment>
<i class='fa fa-folder'></i> <code>lib64</code>
</div>
<div  class=fragment>
<i class='fa fa-folder'></i> <code>lost+found</code>
</div>
<div  class=fragment>
<i class='fa fa-folder'></i> <code>mnt</code>
</div>
<div  class=fragment>
<i class='fa fa-folder'></i> <code>media</code>
</div>
<div  class=fragment>
<i class='fa fa-folder'></i> <code>opt</code>
</div>
<div  class=fragment>
<i class='fa fa-folder'></i> <code>proc</code>
</div>
<div  class=fragment>
<i class='fa fa-folder'></i> <code>root</code>
</div>
<div  class=fragment>
<i class='fa fa-folder'></i> <code>run</code>
</div>
<div  class=fragment>
<i class='fa fa-folder'></i> <code>sbin</code>
</div>
<div  class=fragment>
<i class='fa fa-folder'></i> <code>srv</code>
</div>
<div  class=fragment>
<i class='fa fa-folder'></i> <code>sys</code>
</div>
<div  class=fragment>
<i class='fa fa-folder'></i> <code>tmp</code>
</div>
<div  class=fragment>
<i class='fa fa-folder'></i> <code>usr</code>
</div>
<div  class=fragment>
<i class='fa fa-folder'></i> <code>var</code>
</div>
</div>
<style>
  #top-level-folders + div {
    display: flex; flex-wrap: wrap; justify-content: space-between; padding-bottom: 2em;
  }
  #top-level-folders + div div {
    padding: 0.3em;
  }
</style>

------
### `/bin`, `/sbin`

- pliki wykonywalne (polecenia)
- *binarne*
---
### podział na `/bin` oraz `/sbin`

- użytkowe i systemowe
- pomijany w niektórych dystrybucjach
------
### `/boot`

- kernele
- pliki potrzebne do uruchomienia systemu
------
### `/etc`

- konfiguracja
- pliki tekstowe
------
### `/dev`

- pliki urządzeń
------
### `/home`

- katalogi domowe
- (odpowiednik `C:\Users`)
---
### `/root`

- katalog domowy **roota**
- (celowo poza `/home`)
------
### `/lib`, `/lib32`, `/lib64`

- biblioteki systemowe
- sterowniki
- (odpowiedniki DLL i innych)
------ 
### `/mnt`, `/media`

- nośniki zewnętrzne
- dodatkowe partycje
- odpowiednik liter dysków zewnętrznych
------
### `/proc` (`procfs`)

Interfejs kernela do:
- procesora (CPU)
- procesów
- pamięci
- informacji o kernelu itp

Uwaga: *Nie są to prawdziwe pliki na dysku.*
------
### `/sys` (`sysfs`)

- podobnie jak `proc`
- interfejs do urządzeń, sterowników i podsystemów

Uwaga: *Nie są to prawdziwe pliki na dysku.*
------
### `/tmp`

- pliki tymczasowe
------
### `/usr`

- oprogramowanie użytkowe
- luźny odpowiednik `C:\Program Files`
---
### `/usr/share`

- zasoby niezależne od platformy:
    - grafika, ikony, fonty
    - słowniki, tłumaczenia
    - definicje składni
---
### `/usr/include`

- nagłówki języka C, C++
---
### `/usr/src`

- kod źródłowy
---
### `/usr/share/doc`

- dokumentacja
---
### `/usr/bin`, `/usr/sbin`

- podobnie jak `/bin`
---
### `/usr/lib`

- podobnie jak `/lib`
---
<!-- .slide: data-autofragments -->
### podział na `/bin` i `/usr/bin`

- `/bin`: potrzebne do startu systemu
- `/usr/bin`: aplikacje użytkowe
- możliwość wydzielenia `/usr`
  - osobna partycja
  - współdzielony katalog VM, kontenerów
  - dysk sieciowy
  - *read-only*
---
### `/usr/local`

- oprogramowanie zainstalowane spoza pakietów dystrybucji
------
### `/var`

- pliki zmienne
- *szeroko pojęte bazy danych*
- jedyne miejsce modyfikowane przez usługi
---
### `/var/log`

- logi (dzienniki) systemowe
---
### `/var/lib`

- zbiory danych aplikacji
- bazy danych (np. MySQL, Postgresql)
---
### `/var/cache`

- pliki podręczne i tymczasowe usług
---
### `/var/spool`

- kolejki przetwarzania
  - drukarki
  - poczty
  - harmonogramu zadań
  - etc.
------
### `/srv`

- dane serwowane
------
### `/run` (lub `/var/run`)

- informacje o działających usługach
- dane ulotne
------
### `/lost+found`

- odzyskane fragmenty plików
- (występuje tylko w systemie plików `ext2/3/4`)
------
### `/opt`

- dodatkowe oprogramowanie niepochodzące z dystrybucji
------
### `/etc/*.d`

- katalogi z "rozszerzeniem" `.d`
- zawierają konfigurację rozbitą na odrębne pliki
------
[Koniec](./)
