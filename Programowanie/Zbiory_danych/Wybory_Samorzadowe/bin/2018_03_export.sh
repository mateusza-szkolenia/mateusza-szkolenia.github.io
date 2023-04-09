#!/bin/bash

ROK=2018

sqlite3 wybory"$ROK".db .dump > ../data/"$ROK"-wybory-samorzadowe.sql
