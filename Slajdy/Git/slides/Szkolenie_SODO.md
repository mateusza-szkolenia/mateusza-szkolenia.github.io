<!-- .slide: data-background-image="img/fundacja-sysops-devops-polska-bg-gray.png" -->
<!-- .slide: data-background-size="contain" -->
<!-- .slide: data-autofragments -->

# Szkolenie Git

Mateusz Adamowski

SysOps/DevOps

------
<!-- .slide: data-background="#eee" -->

![Git](img/1280px-Git-logo.svg.png)

------
# Historia powstania

---

_cofnijmy się w czasie do 2000_

---
<!-- .slide: data-autofragments -->
## Rok 2000

- dial-up internet
- _cloud computing_ - nie istnieje
- wirtualizacja, konteneryzacja - raczkują
- CVS, Subversion

---
<!-- .slide: data-autofragments -->
## CVS (1990)

- brak śledzenia katalogów i zmian nazw
- tylko praca online
- blokady
- fatalna obsługa gałęzi i tagów

---

![Torvalds](img/torvalds.jpg)

---
<!-- .slide: data-auto-animate -->
> If you like using CVS, you should be in some kind of mental institution or somewhere else.
>
> (Linus Torvalds)

---
<!-- .slide: data-auto-animate -->
> Jeśli lubisz używać CVS, powinieneś być w zakładzie psychiatrycznym czy gdzieś.
>
> (Linus Torvalds)

---
<!-- .slide: data-autofragments -->
## Subversion (1995)

- centralny serwer
- branche jako podkatalogi
- niefektywne przechowywanie
- brak kontroli integralności danych
- ograniczenia w obsłudze metadanych (np. `chmod`)
- słaba funkcjonalność mergowania

---
<!-- .slide: data-auto-animate -->

> Subversion has been the most pointless project ever started... Subversion used to say, 'CVS done right.' With that slogan there is nowhere you can go. There is no way to do CVS right.
>
> (Linus Torvalds)

---
<!-- .slide: data-auto-animate -->

> Subversion to najbardziej bezsensowny projekt, jaki kiedykolwiek rozpoczęto... Motto Subversion brzmiało: „CVS zrobione prawidłowo”. Z tym sloganem nie da się nic osiągnąć. Nie da się zrobić prawidłowo CVS.
>
> (Linus Torvalds)

---
<!-- .slide: data-background="#eee" -->
![Tux](img/tux.png) <!-- .element: style="height: 50vh;" -->

---
<!-- .slide: data-autofragments -->
## Linux

- flagowy projekt free/open source
- kernel 2.2.x, 2.4.x
- 1.5M LoC
- rosnąca popularność i zainteresowanie gigantów

---
<!-- .slide: data-auto-animate -->

> For the first 10 years of kernel maintenance, we literally used tarballs and patches, which is a much superior source control management system than CVS is.
>
> (Linus Torvalds)

---
<!-- .slide: data-auto-animate -->

> Przez pierwszych 10 lat rozwoju kernela używaliśmy po prostu archiwów tara i patchy, co jest znacznie lepszym systemem kontroli wersji niż CVS.
>
> (Linus Torvalds)

------
<!-- .slide: data-background="#eee" -->

![BitKeeper](img/Bitkeeper-logo.png)

(2002)
---
<!-- .slide: data-autofragments -->
<!-- .slide: data-background="#eee" -->

## BitKeeper

Innowacyjne narzędzie do kontroli wersji firmy BitMover.

- komercyjne (płatne)
- rozproszone
- trzyma repozytoria "w chmurze"
- <i class='fab fa-windows'></i> <i class='fab fa-apple'></i> <i class='fab fa-linux'></i>
- _kontrowersyjne_ licencjonowanie

---
<!-- .slide: data-autofragments -->
## Darmowa licencja

- dla developerów FLOSS
- ograniczona funkcjonalność
- kontrowersyjne zapisy
  - niedostępna dla developerów innych VCS
  - zakaz rozszerzania funkcjonalności

---
<!-- .slide: data-autofragments -->
<!-- .slide: data-background="#211" -->
## Flame wars

Flagowy projekt FLOSS zarządzany komercyjnym narzędziem.

vs

_I'll use the best tool for the job and, quite frankly, BitKeeper was it. (Torvalds)_

---
<!-- .slide: data-background="#522" -->
## Wycofanie licencji

(2005)

---
<!-- .slide: data-autofragments -->
## Powstanie Gita

- napisany w kilkanaście dni przez Linusa Torvaldsa
- języki: C, shell, perl
- narzędzia systemowe typu diff, patch

---
<!-- .slide: data-auto-animate -->

> Take CVS as an example of what not to do; if in doubt, make the exact opposite decision
>
> (Linus Torvalds)

---
<!-- .slide: data-auto-animate -->

> Trzeba wziąć CVS jako przykład czego nie robić, a w razie wątpliwości - zrobić odwrotnie.
>
> (Linus Torvalds)

---
<!-- .slide: data-autofragments -->
# Rozwój gita

- konkurencyjne narzędzia
  - Mercurial (`hg`)
  - Bazaar (`bzr`)
  - Fossil (SQLite)
  - Monotone

---
<!-- .slide: data-autofragments -->
<!-- .slide: data-background="#117" -->
## Windows?
<!-- .element: style="background: #fff; color: #117;" -->

- inne znaki końca linii
- nazwy plików, ścieżki
- prawa dostępu
- brak narzędzi shellowych
- wolniejszy system plików i tworzenie procesów

---
## Windows problems

<iframe src='assets/faylor-email.html' style='width: 60vw; height: 40vh;'></iframe>

---
<!-- .slide: data-background="#ddd" -->

> Are we *really* contemplating porting git to native Windows?
>
> I guess I missed that memo.

---
<!-- .slide: data-background="#eee" -->
## Git for Windows

![Git for Windows](img/git-for-windows.png)

---
<!-- .slide: data-background="img/bliss.jpg" -->
![Git bash](img/git-bash-windows-bin.png)

---
<!-- .slide: data-autofragments -->
## Git Bash (Windows)

- translacja ścieżek Windows na Linux
- konwersja plików "w locie"
- narzędzia:
  - shell (`bash`)
  - coreutils: `awk`, `sed`, `grep`...
  - `perl`, `GPG`

---
<!-- .slide: data-autofragments -->
## GitHub (2008)

- platforma web
- darmowy hosting projektów FLOSS

---
<!-- .slide: data-autofragments -->
## GitLab (2011)

- self-hosted
- od 2014 też jako usługa
- GitLab CI (2012, zintegrowane w 2015)

---
<!-- .slide: data-autofragments -->
## GitHub Actions (2018)

- CI/CD

---
<!-- .slide: data-autofragments -->
## Microsoft?

- własne produkty:
    - Visual SourceSafe
    - Team Foundation Server
    - Source Depot
- 2017 - [MS używa wewnętrznie gita](https://arstechnica.com/information-technology/2017/02/microsoft-hosts-the-windows-source-in-a-monstrous-300gb-git-repository/)
- 2018 - zakup GitHuba przez MS

---
<!-- .slide: data-autofragments -->
## BitKeeper?

- 2000 - powstanie
- 2002 - współpraca z deweloperami Linuksa
- 2005 - odebranie licencji deweloperom Linuksa
- 2016 - open source (Apache License 2)
- 2018 - discontinued

------

[Koniec](./)

