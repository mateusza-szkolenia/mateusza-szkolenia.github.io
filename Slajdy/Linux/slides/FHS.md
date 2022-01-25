# File System Hierarchy
---
## Top level folders

<div style='display: flex; flex-wrap: wrap; justify-content: space-between; padding-bottom: 2em;'>
<div  class=fragment>
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

------
### `/bin`, `/sbin`

- pliki wykonywalne
- *binarne*
---
### podział na `/bin` i `/sbin`

- użytkowe i systemowe
- pomijany w niektórych dystrybucjach
------
### `/boot`

- kernele
- pliki potrezbne do uruchomienia systemu
------
### `/etc`

- konfiguracja
------
### `/dev`

- pliki urządzeń
------
### `/home`

- katalogi domowe
- odpowiednik `C:\Users\`
---
### `/root`

- katalog domowy **roota**
------
### `/lib`, `/lib32`, `/lib64`

- biblioteki systemowe
- odpowiednik DLL
------ 
### `/mnt` i `/media`

- nośniki zewnętrzne
- dodatkowe partycje
------
### `/proc`

- interfejs kernela do:
 - procesora (CPU)
 - procesów
 - pamięci
 - informacji o kernelu itp
------
### `/sys`

- podobnie jak `proc`
- interfejs do urządzeń i podsystemów
------
### `/tmp`

- pliki tymczasowe
------
### `/usr`

- oprogramowanie użytkowe
---
### `/usr/share`

- pliki niezależne od platformy:
    - mapy
    - grafika
    - ikony
    - słowniki
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
### `/usr/local`

- oprogramowanie zainstalowane spoza pakietów
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

- pamięć podręczna aplikacji
---
### `/var/spool`

- kolejki przetwarzania
  - drukarki
  - poczty
  - etc.
------
### `/srv`

- dane serwowane
------
### `/run` (lub `/var/run`)

- informacje o działających usługach
------
### `/lost+found`

- odzyskane fragmenty plików
------
### `/opt`

- dodatkowe oprogramowanie niepochodzące dystrybucji
------
### `/etc/*.d`

- katalogi zawierające konfigurację rozbitą na odrębne pliki

