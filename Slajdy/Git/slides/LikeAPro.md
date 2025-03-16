<!-- .slide: data-autofragments -->

# Git - Like a pro!

Mateusz Adamowski  

SysOps/DevOps Meetup #73  
Warszawa, 2025-03-20

---
<!-- .slide: data-autofragments -->
## Mateusz Adamowski

- sysadmin od 2005
- użytkownik Linuksa od 2000
- szkoleniowiec

------
<!-- .slide: data-background="#eee" -->

![Git](img/1280px-Git-logo.svg.png)

------
# Historia powstania Gita

---
<!-- .slide: data-autofragments -->
## Rok 2000

- dial-up internet
- _cloud computing_ - nie istnieje
- wirtualizacja, konteneryzacja - raczkują
- CVS, Subversion

---

> If you like using CVS, you should be in some kind of mental institution or somewhere else.
>
> (Linus Torvalds)

---

> Subversion has been the most pointless project ever started... Subversion used to say, 'CVS done right.' With that slogan there is nowhere you can go. There is no way to do CVS right."
>
> (Linus Torvalds)

---
<!-- .slide: data-autofragments -->
## Linux

- flagowy projekt free/open source
- kernel 2.2.x
- 1.5M LoC
- rosnąca popularność i zainteresowanie gigantów

---

> For the first 10 years of kernel maintenance, we literally used tarballs and patches, which is a much superior source control management system than CVS is.
>
> (Linus Torvalds)

------
<!-- .slide: data-background="#eee" -->

![BitKeeper](img/Bitkeeper-logo.png)

(2002)
---
<!-- .slide: data-autofragments -->
## BitKeeper

Innowacyjne narzędzie do kontroli wersji firmy BitMover.

- komerycjne (płatne)
- rozproszone
- repozytoria "w chmurze"
- <i class='fab fa-windows'></i> <i class='fab fa-apple'></i> <i class='fab fa-linux'></i>
- _kontrowersyjne_ licencjonowanie

---
<!-- .slide: data-autofragments -->
## Darmowa licencja

- dla developerów FLOSS
- ograniczona funkcjonalność
- kontrowersyjne zapisy
    - zakaz rozszerzania funkcjonalności
    - niedostępna dla developerów innych VCS

---
<!-- .slide: data-autofragments -->
## Kontrowersje

Flagowy projekt FLOSS zarządzany komercyjnym narzędziem.

vs

_I'll use the best tool for the job and, quite frankly, BitKeeper was it._

---
## Wycofanie licencji

(2005)

---
<!-- .slide: data-autofragments -->
## Powstanie Gita

- napisany w kilka dni przez Linusa Torvaldsa
- języki: C, shell, perl
- narzędzia systemowe typu diff, patch

---

> Take CVS as an example of what not to do; if in doubt, make the exact opposite decision
>
> (Linus Torvalds)

---
## Windows?

- znaki końca linii
- nazwy plików
- prawa dostępu
- narzędzia shellowe

---
## BitKeeper?

- 2016 - open source (Apache License 2)
- 2018 - discontinued

------
# tig

---

# `tig --author`

---

# `tig katalog/`

---

# `tig --all`

------
# etckeeper

------
# pre-commit

------
# git worktree

------
# git filter-branch

------
# Gitea

------

[Koniec](./)

