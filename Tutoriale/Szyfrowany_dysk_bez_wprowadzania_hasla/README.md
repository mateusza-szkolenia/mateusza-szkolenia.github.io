# Szyfrowany dysk (LUKS) bez wprowadzania hasła

## RHEL, CentOS, Rocky Linux

Uwaga! Poniższa metoda pozwala na automatyczne odszyfrowywanie głównego systemu plików podczas uruchamiania systemu, bez konieczności podawania hasła. Co do zasady podważa ona sens stosowania szyfrowania, ale może być przydatna jako rozwiązanie tymczasowe.

**Dane zaszfrowane przechowywane razem z kluczem to dane niezaszyfrowane.**

## Statyczny klucz zaszyty w `initrd` (`initramfs`, `initcpio`)

### Utworzenie klucza

Klucz może być dowolnym plikiem, np. ciągiem losowych bajtów.

```console
$ dd if=/dev/urandom of=/tmp/tajny-klucz bs=1024 count=1
```

(W tym miejscu warto również zmienić prawa dostępu pliku klucza.)

### Identyfikacja szyfrowanego woluminu.

Szyfrowane urządzenie blokowe możemy zidentyfikować np. poleceniem `lsblk`

```console
$ lsblk
NAME                  MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
sda                     8:0    0 111.8G  0 disk  
├─sda1                  8:1    0     1G  0 part  /boot
└─sda2                  8:2    0 110.8G  0 part  
  └─luks-67b5ce62ce1a 253:0    0 110.8G  0 crypt 
    ├─vg0-root        253:1    0    70G  0 lvm   /
    ├─vg0-swap        253:2    0     3G  0 lvm   [SWAP]
    └─vg0-home        253:3    0  37.8G  0 lvm   /home
sr0                    11:0    1  1024M  0 rom   
```

Tutaj jest to `/dev/sda2`, po odszyfrowaniu widoczne jest jako `luks-67b5ce62ce1a`.

Upewniamy się, że szyfrowane urządzenie jest zdefiniowne w pliku `/etc/crypttab`.

```console
$ cat /etc/crypttab
luks-67b5ce62ce1a UUID=67b5ce62ce1a none discard
```

### Dodanie klucza do woluminu:

```console
$ cryptsetup luksAddKey /dev/sdXXX /tmp/tajny-klucz
```

### Umieszczenie klucza w katalogu `/etc`

Rekomendowanym katalogiem do przechowywania statycznych kluczy jest `/etc/cryptsetup-keys.d/`. Jeśli ten katalog nie istnieje, możemy go utworzyć.

Klucz zapisujemy w pliku o nazwie odpowiadającej nazwie woluminu, w powyższym przypadku jest to: `luks-67b5ce62ce1a.key`

### Zdefiniowanie klucza w `/etc/crypttab`

Zawartość pliku po zmianie:

```
luks-67b5ce62ce1a UUID=67b5ce62ce1a /etc/cryptsetup-keys.d/luks-67b5ce62ce1a.key discard
```

**Uwaga! Nowsze wersje dystrybucji automatycznie szukają pliku o takiej nazwie w tej lokalizacji, więc można w nich pominąć zmianę parametru `none`.**

### Umieszczenie kluczy w obrazie `initramfs`

Dodatkowe pliki, które chcemy umieścić w obrazie `initramfs` definiujemy w konfiguracji narzędzia `dracut`.

Należy utworzyć plik konfiguracyjny np. o nazwie `/etc/dracut.conf.d/szyfrowanie.conf` i zawartości:

```
install_items='/etc/cryptsetup-keys.d/*'
```

Następnie, należy wymusić przebudowanie obrazu poleceniem: `dracut -f`

Aby upewnić się, że pliki zostały wrzucone do obrazu, należy posłużyć się poleceniem `lsinitrd`, np.

```console
$ lsinitrd /boot/initramfs-*.el*.img | grep cryptsetup
```

### Usunięcie klucza

Klucz można usunąć poleceniem: `cryptsetup luksRemoveKey /dev/sdXXX /etc/cryptsetup-keys.d/klucz`

