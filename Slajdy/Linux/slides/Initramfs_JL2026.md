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
# initrd?

---
## ramdisk vs ramfs
<!-- .slide: data-autofragments -->
- RD - ramdisk
- ramfs - RAM filesystem

---
## struktura ramdisk

- urządzenie blokowe
- ext2

------
# struktura initramfs

- archiwum cpio

---
# cpio?

- poprzednik tara

------
# Busybox

------
# Budowa initrd

- mkfs

------

# Praca z initramfs

- lsinitramfs
- unmkinitramfs

------

# initramfs w Debianie

---

# Dodawanie własnych skryptów w Debianie

---

# hook

---

# script

---



------

# Use case #1: LUKS

- dropbear

------

# Use case #2: iptables

- iptables

------

# Use case #3

- wireguard

------

# Use case #4 notyfikacje

- curl/wget

------

# Going diskless

------

# dracut

-------

# systemd w initramfs

------

# ukify

------
# Slajdy?

[mateusza-szkolenia.github.io](https://mateusza-szkolenia.github.io/)

------

[Koniec](./)

