#!/usr/bin/env python3

from glob import glob
from jinja2 import Template

OUTPUT = "README.md"

EXTS = ['png', 'jpg', 'webp', 'jpeg']

TEMPLATE = """# Memy 

{% for picture in pictures %}
## `{{picture}}`

![{{picture}}]({{picture}})

{% endfor %}
"""

def get_pictures() -> list[str]:
    for ext in EXTS:
        yield from glob(f'*.{ext}')

def main():
    template = Template(TEMPLATE)
    data = {'pictures': get_pictures()}
    with open(OUTPUT, 'w') as readme:
        readme.write(template.render(**data))

if __name__ == '__main__':
    main()
