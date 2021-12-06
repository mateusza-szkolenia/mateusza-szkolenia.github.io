#!/bin/bash

for f in *-dane-gus-populacja.sql
do
    db="${f%.sql}.db"
    [[ -e "$db" ]] && rm "$db"
    sqlite3 "$db" < "$f"
done
