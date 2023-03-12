# Problemy z SSH 8

Najnowsze wersje OpenSSH domyślnie blokują kilka starych i uważanych za mniej bezpieczne algorytmów kryptograficznych. Próba połączenie z serwerem używającym tylko starych algorytm zakończy się niepowodzeniem.

Problem ten pojawia się np. w przypadku serwera protokołu SSH `dropbear`, używanego w dystrybucji *OpenWRT*.

Obejście problemu:

```text
Host stary.serwer.example.com
    HostKeyAlgorithms +ssh-rsa
    PubkeyAcceptedKeyTypes +ssh-rsa
````
