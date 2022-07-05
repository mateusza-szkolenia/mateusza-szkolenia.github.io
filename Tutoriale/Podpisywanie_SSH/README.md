# Podpisywanie plików kluczami SSH

## Generowanie klucza

Jeśli posiadasz już swoje klucze SSH, możesz pominąć ten krok. Jeśli jednak korzystasz z kluczy starego typu (`rsa`), warto wygenerować sobie nowe typu `ed25519`.

```console
$ ssh-keygen -t ed25519
Generating public/private ed25519 key pair.
Enter passphrase (empty for no passphrase):
Enter same passphrase again: 
Your identification has been saved in ~/.ssh/id_ed25519
Your public key has been saved in ~/.ssh/id_ed25519
The key fingerprint is:
SHA256:JZlwqIRyk4Ts6BiBmXl+OhSka3ExB6IeLQoN5oPlX+E user@hostname
The key's randomart image is:
+--[ED25519 256]--+
|+X+*..o..        |
|&BX =..+ o       |
|B%o* .E + .      |
|*oO.o.   o       |
|== o.   S        |
|o.o              |
|   .             |
|                 |
|                 |
+----[SHA256]-----+

```

Wygenerowany przeze mnie klucz (publiczny) to:

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAICW08ZMY5KY5Ty5Eao5aRjGQ5OTA3fniOnJjXFxAlsWp
```

Klucz prywatny wygląda mniej więcej tak:
```
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxAAAAAAABAAAAMwAAAAtzc2gtZW
................................
... N I E    U J A W N I A J ...
................................
zHjxpV+6xVrbW4CrkuaxxxxxxxxhdGV1c3phQHB0cjA=
-----END OPENSSH PRIVATE KEY-----
```

**Nie należy ujawniać swojego klucza prywatnego.**

## Podpisywanie plików

### Przykładowy plik `nauka1.txt`:

```
Ala ma kota.
Kot ma pchły.
Koniec.
```

Suma SHA256: `c815c021e5aa48ac71efd24ad192530792a18273909a7e6174257083f74eff54`

Proces podpisywania:

```console
$ ssh-keygen -Y sign -f ~/.ssh/id_ed25519 -n file nauka1.txt
Signing file nauka1.txt
Write signature to nauka1.txt.sig
```

#### Namespace (`-n`)

Parametr `-n` widoczny w poleceniu to *namespace* (*przestrzeń nazw*). Jest to dodatkowy tekst podpisywany razem z zawartością pliku, mający na celu wskazanie przeznaczenia składanego podpisu. Mechanizm ten ma zabezpieczyć przed sytuacją, gdy prawidłowo podpisany plik przeznaczony do jednego zastosowania, mógłby przypadkiem zostać użyty w innej aplikacji, niezgodnie z intencją autora. Na przykład: stworzony przez kogoś skrypt (prawidłowo podpisany i wysłany jako załącznik maila) mógłby zostać użyty w jakimś systemie automatyzacji jako prawidłowy zestaw instrukcji do wykonania, a podpis złożony przez autora na potwierdzenie integralności i autentyczności pliku, zostałby potraktowany jako uwierzytelnienie do wykonania, pomimo, że intencją autora nie było uwierzytelnienie tego skryptu do takiego zastosowania.

W przypadku podpisywania plików do ogólnego zastosowania, rekomendowane jest użycie nazwy `file`. Nazwa ta będzie też potrzebna odbiorcy do sprawdzenia poprawności.

### Sygnatura `nauka1.txt.sig`

```
-----BEGIN SSH SIGNATURE-----
U1NIU0lHAAAAAQAAADMAAAALc3NoLWVkMjU1MTkAAAAgJbTxkxjkpjlPLkRqjlpGMZDk5M
Dd+eI6cmNcXECWxakAAAAEZmlsZQAAAAAAAAAGc2hhNTEyAAAAUwAAAAtzc2gtZWQyNTUx
OQAAAEDPShjZeepYL79UgmFesZr3twqIlEITXqzJadVPuCXatXpK40ti/N6ElDc2070oym
FkmLXBepTApljeZplv/+YC
-----END SSH SIGNATURE-----
```


