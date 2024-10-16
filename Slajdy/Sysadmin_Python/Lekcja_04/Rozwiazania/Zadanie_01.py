#!/usr/bin/env python3

"""Napisać program podający *uptime* systemu w godzinach, z dokładnością do dziesiątej części."""


PROC_UPTIME = '/proc/uptime'

with open(PROC_UPTIME, 'r', encoding='utf-8') as uptime_f:
    uptime_line = uptime_f.read()

uptime = float(uptime_line.split(" ")[0])

print(f"Uptime: {uptime / 60 / 60:.1f}h")
