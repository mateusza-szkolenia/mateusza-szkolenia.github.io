#!/usr/bin/env python3

import os
import ast
import jinja2
import yaml

TEMPLATES_DIR = '.templates'

def lesson_path(n: int) -> str:
    """Lesson path"""
    return f"Lekcja_{n:02d}"


def task_path(lesson_n: str, task_n: str) -> str:
    """Task path"""
    return f"{lesson_path(lesson_n)}/Rozwiazania/Zadanie_{task_n:02d}.py"


def load_lesson(n: int) -> dict:
    """Load lesson"""
    filename = f'{lesson_path(n)}/Lekcja.yaml'
    try:
        with open(filename, 'r', encoding='UTF-8') as lekcja_f:
            lekcja = yaml.safe_load(lekcja_f)
    except FileNotFoundError:
        lekcja = {'tematy': ['**WORK IN PROGRESS**']}

    return lekcja


def load_task(lesson_id: int, task_id: int) -> tuple[str, str]:
    """Load_task"""
    filename = task_path(lesson_id, task_id)

    with open(filename, 'r', encoding='UTF-8') as task_file:
        task_src = task_file.readlines()

    task_tree = ast.parse("".join(task_src))
    task_desc = ast.get_docstring(task_tree)

    return task_desc, task_src


def load_tasks(lesson_id: int) -> 'Generator[int, str, list[str]]':
    for n in range(1, 10):
        try:
            task = load_task(lesson_id, n)
        except FileNotFoundError:
            break
        yield n, *task


def make_vars(n: int) -> dict:
    lekcja = load_lesson(n)
    variables = {
        'numer_lekcji': n,
        'lekcja': lekcja,
        'zadania': [*load_tasks(n)]
    }
    return variables

def make_all():

    jinja_env = jinja2.Environment(loader=jinja2.FileSystemLoader(TEMPLATES_DIR))

    def render_template(output, template_name, variables):
        template = jinja_env.get_template(template_name)
        os.chmod(output, 0o644)
        with open(output, 'w', encoding='UTF-8') as output_file:
            output_file.write(template.render(**variables))
        os.chmod(output, 0o444)

    for n_lekcji in range(1, 10):
        variables = make_vars(n_lekcji)

        lesson_name = f'{lesson_path(n_lekcji)}'

        todo = [
            ('README.md', 'Lekcja.md.j2'),
            ('Rozwiazania.md', 'Lekcja_Rozwiazania.md.j2'),
            ('Slajdy.html', 'Slajdy.html.j2'),
        ]

        print(variables)

        for output, template_name in todo:
            try:
                render_template(f'{lesson_name}/{output}', template_name, variables)
            except FileNotFoundError:
                print(f"{lesson_name}: {template_name} - File Not Found Error")
                continue

if __name__ == '__main__':
    make_all()
