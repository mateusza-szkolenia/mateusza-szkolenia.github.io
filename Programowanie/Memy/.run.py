#!/usr/bin/env python3

import glob
import jinja2

OUTPUT = "README.md"

EXTS = ['png', 'jpg', 'webp', 'jpeg']

def get_pictures():
    for ext in EXTS:
        pattern = f'*.{ext}'
        for filename in glob.glob(pattern):
            yield filename

TEMPLATE = """# Memy 

{% for picture in pictures %}
## `{{picture}}`

![{{picture}}]({{picture}})
{% endfor %}
"""

template = jinja2.Template(TEMPLATE)

data = {
    'pictures': get_pictures()
}

with open(OUTPUT, 'w') as readme:
    readme.write(template.render(**data))
