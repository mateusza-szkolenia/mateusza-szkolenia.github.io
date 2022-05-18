#!/usr/bin/env python3


def check_right_place(correct: str, guess: str) -> int:
    return len([None for (a, b) in zip(correct, guess) if a == b])


def check_correct(correct: str, guess: str) -> int:
    return len([None for a in guess if a in correct])


def check_code(correct: str, guess: str) -> "int, int":
    return [f(correct, guess) for f in [check_right_place, check_correct]]


constrains = [
    ('690', [1, 1]),
    ('741', [0, 1]),
    ('504', [0, 2]),
    ('387', [0, 0]),
    ('219', [0, 1])
]


all_codes = ["%03d" % i for i in range(1000)]


for cc, ccons in constrains:
    new_codes = []
    print(f"All_codes: {all_codes}")
    for code in all_codes:
        check_result = check_code(code, cc)
        print(f"{code, cc = } {check_result = } {ccons = }")
        if check_code(code, cc) == ccons:
            new_codes.append(code)
    all_codes = new_codes

print(all_codes)

