<!-- .slide: data-background-image="img/fundacja-sysops-devops-polska-bg-gray.png" -->
<!-- .slide: data-background-size="contain" -->
<!-- .slide: data-autofragments -->

# Git - Like a pro!

Mateusz Adamowski

SysOps/DevOps Meetup #73  
Warszawa, 2025-03-20

---
<!-- .slide: data-autofragments -->
## O mnie

- sysadmin (od 2005)
- programista (Python, Bash, JS, C)
- miłośnik Linuksa (od 2000)
- szkoleniowiec

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
<!-- .slide: data-background="#121" -->

_przerwa na pytania_

------
# tig

text-mode interface for Git

---
<!-- .slide: data-auto-animate -->

![tig](img/tig-putty-1.png)

---
<!-- .slide: data-auto-animate -->

![tig](img/tig-putty-2.png)

---
<!-- .slide: data-auto-animate -->

![tig](img/tig-putty-3.png)

---
<!-- .slide: data-auto-animate -->

![tig](img/tig-putty-4.png)

---
## instalacja

```shell
# apt install tig
```
<!-- .element style="font-size: 1em;" -->

---
## tig

Filtrowanie commitów danego autora

```shell
$ tig --author=Tatham
```
<!-- .element style="font-size: 1em;" -->

---
<!-- .slide: data-auto-animate -->

![tig](img/tig-putty-author.png)

---
## tig

Filtrowanie commitów dotyczących pliku lub podkatalogu

```shell
$ tig ścieżka
```
<!-- .element style="font-size: 1em;" -->

---
<!-- .slide: data-auto-animate -->

![tig](img/tig-putty-path.png)

---
## tig

Pomijanie commitów `merge`

```shell
$ tig --no-merges
```
<!-- .element style="font-size: 1em;" -->

---
<!-- .slide: data-auto-animate -->

![tig](img/tig-nomerges-1.png)

---
<!-- .slide: data-auto-animate -->

![tig](img/tig-nomerges-2.png)

---
## tig

```shell
$ tig blame plik
```
<!-- .element style="font-size: 1em;" -->

---
<!-- .slide: data-auto-animate -->

![tig](img/tig-blame.png)

---

<!-- .slide: data-background="#401" -->

_live demo_

---
## tig

```shell
$ tig --all
```
<!-- .element style="font-size: 1em;" -->

---
## tig

```shell
$ tig commit-id
```
<!-- .element style="font-size: 1em;" -->


------
# etckeeper

automatyczne wersjonowanie `/etc`

---
## instalacja

```shell
# apt install etckeeper
```
<!-- .element style="font-size: 1em;" -->

---
<!-- .slide: data-autofragments -->
## etckeeper zastosowanie

- serwery, stacje robocze
- możliwość backupowania (push)
- identyfikacja niepożądanych zmian
- przywracanie pochopnych zmian
- rozliczalność adminów

---
<!-- .slide: data-autofragments -->
## etckeeper

- dostępny w większości dystrybucji
- integracja z menedżerem pakietów
- obsługa innych VCS
- (ale `git` FTW!)

---
<!-- .slide: data-background="#401" -->

_live demo_

------
# Hooks

---
![lshooks](img/ls-hooks.png) <!-- .element: style="height: 60vh;" -->

---
<!-- .slide: data-autofragments -->
## Hooki w gicie

- skrypty
- uruchamiają się przed operacjami
- (lub po)
- przechowywane w `.git/hooks/`
- nie są zawartością repozytorium
- nie podlegają wersjonowaniu
- są niewygodne

---
# pre-commit

![precommit](img/pre-commit.png) <!-- .element: style="height: 40vh;" -->

---
<!-- .slide: data-autofragments -->
## Hooki pre-commit

- walidacja plików
  - składnia
  - nazwy i typy plików
  - rozmiar
  - sekrety?
- autoformatowanie i naprawianie plików
  - znaki końca linii
  - jednolity styl formatowania

---
<!-- .slide: data-autofragments -->
## Instalacja narzędzia

```shell
$ apt install pre-commit
```
<!-- .element style="font-size: 1em;" -->

alternatywnie:

- `brew install pre-commit`
- `pip install pre-commit`

---
## Dodanie do projektu

`.pre-commit-config.yaml`

```yaml [1-8|1|2-3|4|5-8|5|6|7|8|1-8]
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v5.0.0
    hooks:
      - id: trailing-whitespace
      - id: end-of-file-fixer
      - id: check-yaml
      - id: check-added-large-files
```

---
<!-- .slide: data-autofragments -->
## Integracja z repozytorium

```shell
$ pre-commit install
```
<!-- .element: style="font-size: 1em; margin: 1em;" -->

Dodaje hook `pre-commit` w `.git/hooks/`

---
## Uruchomienie (ręczne)

![precommit](img/pre-commit-run.png) <!-- .element: style="height: 50vh;" -->

---
## Uruchomienie (pełne)

![precommit](img/pre-commit-run-a.png) <!-- .element: style="height: 50vh;" -->

---
## Uruchomienie (commit)

![precommit](img/pre-commit-zmiany.png) <!-- .element: style="height: 50vh;" -->

---
<!-- .slide: data-autofragments -->
### Działanie

- walidacja
- edycja

---
<!-- .slide: data-background="#302" -->

_zobaczmy stronę projektu_

<https://github.com/pre-commit/pre-commit-hooks>

---
<!-- .slide: data-autofragments -->
## Więcej hooków

- [black](https://github.com/psf/black-pre-commit-mirror) (formatowanie pythona)
- [ansible-lint](https://github.com/ansible/ansible-lint) (walidacja kodu ansible)
- [shellcheck](https://github.com/koalaman/shellcheck-precommit) (walidacja kodu skryptów shellowych)
- [pylint](https://pylint.pycqa.org/en/latest/user_guide/installation/pre-commit-integration.html) (walidacja kodu pythona)

---
## Github Actions

```yaml
name: pre-commit

on:
  pull_request:
  push:
    branches: [main]

jobs:
  pre-commit:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-python@v3
    - uses: pre-commit/action@v3.0.1
```

---
## Gitlab Pipeline

```yaml
pre-commit:
  image: docker.io/jfxs/pre-commit:latest
  stage: test
  script:
    - task --taskfile /lint.yml pre-commit DIR=$(pwd)
```

------
# Podpisywanie commitów

----
<!-- .slide: data-auto-animate -->

![sign](img/ssh-sign-1.png)

---
<!-- .slide: data-auto-animate -->

![sign](img/ssh-sign-2.png)

---
## Generowanie klucza

```
$ ssh-keygen -t ed25519
```
<!-- .element: style="font-size: 1.3em;" -->

---
## Konfiguracja

```shell [1-3|1|2|3|1-3]
$ git config --global user.signingkey ~/.ssh/id_ed25519.pub
$ git config --global gpg.format ssh
$ git config --global commit.gpgsign true
```

---
### Upload klucza GitLab

![Klucz](img/gitlab-ssh-key.png)

---
## Upload klucza GitHub

![Klucz](img/github-ssh-key.png)

------
<!-- .slide: data-autofragments -->
# git worktree

- osobny katalog dla gałęzi

---
## stworzenie worktree

```shell [1-3|1|2|3|1-3]
$ git branch ABC-10
$ git worktree add ../ABC-10
$ cd ../ABC-10
```
<!-- .element: style="font-size: 1em;" -->

---
## usunięcie worktree

```shell [1-2|1|2|1-2]
$ git worktree list
$ git worktree remove ../ABC-10
```

------
<!-- .slide: data-autofragments -->

# praca z dużymi repo
<!-- .element: style="font-size: 2em;" -->

- niepotrzebna historia
- niepotrzebne podkatalogi
- długi czas klonowania
- zmarnowane miejsce na dysku

---
<!-- .slide: data-autofragments -->
## płytki klon

```shell
$ git clone --depth=2 "$REPO"
```
<!-- .element: style="font-size: 1em;" -->

Tylko _n_ ostatnich commitów.

---
## rzadki checkout

_sparse_

```shell [1-5|1|2|3|4|5|1-5]
$ git clone --no-checkout --filter=tree:0 --depth=2 "$REPO"
$ cd repo/
$ git sprase-checkout set --no-cone katalog/
$ git checkout
$ git sparse-checkout add inny_katalog/
```

------
<!-- .slide: data-autofragments -->
# monorepo

- duże repozytoria
- misz-masz małych projektów

---
<!-- .slide: data-autofragments -->
Mamy duże repozytorium.

Chcemy wyodrębnić historię jednego podkatalogu

---

```shell
$ export FILTER_BRANCH_SQUELCH_WARNING=1
$ git filter-branch --subdirectory-filter crypto/ -- --all
```

---
<!-- .slide: data-background="#401" -->

_live demo_

---
<!-- .slide: data-autofragments -->
Mamy dwa różne repozytoria.

Chcemy scalić je w jedno.

---
```shell
$ git remote add repo2 "$REPO2"
$ git fetch repo
$ git merge --allow-unrelated-histories repo2/master
```

---
<!-- .slide: data-background="#401" -->

_live demo_

---
<!-- .slide: data-autofragments -->
Wrzuciliśmy do repozytorium plik, który nie powinien się tam znaleźć.

Musimy przepisać historię.

---

Znajdujemy commit, w którym dokonaliśmy niepożądanej zmiany.

---

```shell [1-7|1|2|3|4|5|6|7|1-7]
$ rm niechciany_plik.txt
$ vim plik.txt
$ git add .
$ git commit -m 'FIX'
$ git rebase -i ZLY_COMMIT
# przenosimy ostatni commit na drugą pozycję
# zmieniamy go na "fixup"
```

---
<!-- .slide: data-background="#401" -->

_live demo_

---
# git subtree

```shell
$ git subtree --prefix "$TREE" pull "$SRC" "$SRC_BRANCH" --squash
```

---
<!-- .slide: data-background="#401" -->

_live demo_


------
# Gitea

---

![Gitea](img/gitea-web.png)

---
<!-- .slide: data-autofragments -->
## Gitea

- alternatywa dla GitLaba i GitHuba
- self-hosted
- napisana w Go
- trywialna instalacja
- DB: SQLite, MySQL, Postgres
- obsługuje CI/CD

---
<!-- .slide: data-background="#401" -->

_live demo_

------
<!-- .slide: data-background-image="img/fundacja-sysops-devops-polska-bg-gray.png" -->
<!-- .slide: data-background-size="contain" -->
# Szkolenia

<ul id='lista-szkolen'>
<li class=fragment>
<a href="https://www.sysopspolska.pl/szkolenia/python/"><b>Python dla administratorów</b></a><br>
15-16 maja 2025
</li>
<li class=fragment>
<a href="https://www.sysopspolska.pl/szkolenia/"><b>Git</b></a><br>
<i>(już wkrótce!)</i>
</li>
</ul>

<p class=fragment><code>https://www.sysopspolska.pl/szkolenia</code></p>

<style>
#lista-szkolen {
    display: flex;
    list-style: none;
    text-align: center;
}
#lista-szkolen li {
    width: 47%;
}
</style>

------
# Slajdy?

[mateusza-szkolenia.github.io](https://mateusza-szkolenia.github.io/)

------

[Koniec](./)

