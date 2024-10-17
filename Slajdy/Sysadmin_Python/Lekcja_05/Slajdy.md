<!-- .slide: data-background="../assets/fundacja-sysops-devops-polska-bg-gray.png" -->
Python dla sysadminów

# Lekcja 5

Mateusz Adamowski

------
<!-- .slide: data-autofragments -->
# API

Na przykładzie NetBoksa

------
# Przygotowanie śrosdowiska

---
## Stworzenie konta

```bash
cd /opt/netbox-docker
docker compose exec netbox /opt/netbox/netbox/manage.py createsuperuser
```

---
## Stworzenie przykładowych danych

- Tworzymy ręcznie dwa wpisy w IPAM
  - adres IP
  - zakres IP
---
