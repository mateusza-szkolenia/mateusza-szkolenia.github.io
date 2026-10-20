<!-- .slide: data-background-image="img/jesien-linuksowa-bg-gray.png" -->
<!-- .slide: data-background-size="contain" -->
<!-- .slide: data-autofragments -->
<!-- .slide: data-background="#eee" -->

# Initramfs
<!-- .element: style="margin-top: 1em; margin-bottom: 0;" -->
## tajemniczy etap startu Linuksa
<!-- .element: style="margin-top: 0; font-size: 0.8em;" -->

Mateusz Adamowski
<!-- .element: style="font-size: 0.8em;" -->

Jesień Linuksowa 2026  
Kraków, 2026-10-23
<!-- .element: style="font-size: 0.8em;" -->

---
<!-- .slide: data-autofragments -->
## O mnie

- sysadmin (od 2005)
- programista (Python, Bash, JS, C)
- miłośnik Linuksa (od 2000)
- szkoleniowiec

------
<!-- .slide: data-background="#eee" -->

# initramfs

Komu to potrzebne?

---
<!-- .slide: data-background="#000" -->
![Error](img/initramfs/error2.jpg)

---
<!-- .slide: data-background="#000" -->
![Error](img/initramfs/error3.webp)

---
<!-- .slide: data-background="#000" -->
![Error](img/initramfs/error1.jpg)

---
<!-- .slide: data-autofragments -->

## Czy initramfs jest potrzebny?

- Często nie
- Czasami nie

Ale po kolei...

------
<!-- .slide: data-autofragments -->
# Start systemu

- UEFI / BIOS
- GRUB
- kernel + initrd
- systemd

---
<!-- .slide: data-autofragments -->
## BIOS

Umie wczytać MBR  
(446 bajtów)

---
<!-- .slide: data-autofragments -->
## UEFI

- Tablica partycji  
  (MBR lub GPT)
- FAT

---
<!-- .slide: data-autofragments -->
## GRUB

- Tablica partycji
- FAT, ext4, XFS, ISO-9660
- (...*LVM, RAID, LUKS*...) ?

---
<!-- .slide: data-autofragments -->
## Jak dostać się do dysku systemowego?

- dostanie się do dysku wymaga modułów
- moduły są na dysku

---
<!-- .slide: data-autofragments -->
## initramfs

- minimalistyczne środowisko
- całkowicie w RAM-ie
- sterowniki i podstawowe narzędzia

------
<!-- .slide: data-autofragments -->
## initrd?

---
## ramdisk vs ramfs
<!-- .slide: data-autofragments -->
- RD - ramdisk
- ramfs - RAM filesystem

---
<!-- .slide: data-autofragments -->
## struktura initrd

- urządzenie blokowe
- ext2

------
<!-- .slide: data-autofragments -->
# struktura initramfs

- archiwum cpio

---
<!-- .slide: data-autofragments -->
# cpio?

- poprzednik tara

------
<!-- .slide: data-autofragments -->
# Busybox

- lekka implementacja coreutils
- ... i nie tylko

------
<!-- .slide: data-autofragments -->
# Praca z initramfs

- lsinitramfs
- unmkinitramfs

------
<!-- .slide: data-autofragments -->
# Use case #1: LUKS

- zaszyfrowany dysk
- jak podać hasło zdalnie?

---
## dropbear

- serwer SSH w initramfs
- gotowa integracja w Debianie:  
  `apt-get install dropbear-initramfs`

------
<!-- .slide: data-autofragments -->
# initramfs w Debianie

- `update-initramfs`
- `/usr/share/initramfs-tools`
- `/etc/initramfs-tools`

---

# Dodawanie własnych skryptów w Debianie

- dwa rodzaje skryptów:
  - hooki przy **budowaniu** initramfs
  - skrypty wykonywane **podczas startu**
- własne pliki trzymaj w `/etc/initramfs-tools`
- po zmianach: `update-initramfs -u`

---
<!-- .slide: data-autofragments -->
# hook

- uruchamiany na komputerze, który buduje initramfs
- kopiuje do obrazu potrzebne programy, biblioteki i konfigurację
- katalog: `/etc/initramfs-tools/hooks/`
- przykład:

```sh
#!/bin/sh
. /usr/share/initramfs-tools/hook-functions
copy_exec /usr/sbin/iptables
```

- plik hooka musi być wykonywalny

---
<!-- .slide: data-autofragments -->
# script

- uruchamiany już podczas startu systemu
- katalog zależy od etapu startu, np.:
  - `/etc/initramfs-tools/scripts/init-premount/`
  - `/etc/initramfs-tools/scripts/local-top/`
  - `/etc/initramfs-tools/scripts/local-premount/`
- dobierz etap do tego, czy potrzebujesz sieci, czy zamontowanego rootfs
- po dodaniu skryptu: `update-initramfs -u`

<!-- Obrazek: schemat etapów startu initramfs i miejsca uruchamiania skryptów -->

------

# Use case #2: iptables

- reguły firewalla jeszcze przed zamontowaniem rootfs
- np. ograniczenie dostępu do SSH w Dropbearze
- potrzebne: narzędzia, biblioteki i moduły netfilter
- hook dodaje pliki, skrypt konfiguruje reguły

------

# Use case #3

- WireGuard w initramfs
- tunel do zdalnego odblokowania LUKS lub diagnostyki
- potrzebne: moduł `wireguard`, `wg`, `ip` i konfiguracja
- klucz prywatny w initramfs wymaga ochrony obrazu

------

# Use case #4 notyfikacje

- `curl` / `wget` mogą wysłać informację o wyniku startu
- np. błąd montowania rootfs albo gotowość do odblokowania LUKS
- sieć, DNS i certyfikaty CA muszą być dostępne w initramfs
- nie wysyłaj haseł ani kluczy

------

# Going diskless

A gdyby tak nie montować dysku i zostać w RAM-ie na zawsze?

---
- kernel i initramfs można wczytać np. przez PXE
- `/init` uruchamia system z rootfs w pamięci
- możliwy jest też rootfs przez sieć, np. NFS
- zastosowania: rescue, kioski, laboratoria
- ograniczenia: pamięć RAM, czas startu i brak trwałego zapisu

<!-- Obrazek: schemat startu PXE i systemu działającego z rootfs w RAM-ie -->

------

# dracut

- generator initramfs używany m.in. w Fedorze i RHEL
- moduły dobierają potrzebne funkcje: LVM, LUKS, RAID, sieć
- obraz dopasowany do hosta albo ogólny
- budowanie: `dracut -f`
- zawartość obrazu: `lsinitrd`

-------

# systemd w initramfs

- systemd może być PID 1 w initramfs
- jednostki koordynują wykrywanie urządzeń, LUKS i montowanie rootfs
- po przygotowaniu systemu następuje przejście do właściwego rootfs
- szczegóły zależą od generatora i dystrybucji

------

# ukify

- narzędzie projektu systemd do budowania UKI
- UKI łączy kernel, initramfs i wiersz poleceń kernela
- jeden plik EFI może zawierać cały obraz startowy
- można go podpisać do uruchamiania z Secure Boot

<!-- Obrazek: przekrój UKI z kernelem, initramfs i wierszem poleceń -->

------
# Materiały

- materiały i pozostałe slajdy:

[mateusza-szkolenia.github.io](https://mateusza-szkolenia.github.io/)

------

[Koniec](./)
