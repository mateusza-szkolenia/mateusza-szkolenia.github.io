#!/usr/bin/env python3

KAPREKAR = 6174

def gen_seq(start: int|str):
    curr = int(start)
    assert curr < 10000
    
    while True:
        curr = f'0000{curr}'[-4:]
        asce = ''.join(sorted(curr))
        desc = asce[::-1]

        curr = int(desc) - int(asce)

        print(f'{asce = } {desc = } {curr = }')
        yield curr
        if curr == KAPREKAR:
            break

while True:
    x = input("Podaj liczbe: ")
    for xx, _ in zip(gen_seq(x), range(10)):
        print(f' {xx}')
