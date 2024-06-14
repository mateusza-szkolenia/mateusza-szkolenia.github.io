#!/usr/bin/env python3

from dataclasses import dataclass
from glob import glob

OUTPUT = "README.md"

EXTS = ['png', 'jpg', 'webp', 'jpeg']

@dataclass
class Picture:
    name: str
    def __str__(self):
        name: str = self.name
        return f'## `{name}`\n\n![{name}]({name})\n\n'

@dataclass
class Readme:
    pictures: list[Picture]
    def __str__(self):
        pictures: str = "\n".join(map(str, self.pictures))
        return f"# Memy\n\n{pictures}"

def get_pictures() -> list[str]:
    pics = []
    for ext in EXTS:
        pics.extend(Picture(p) for p in glob(f'*.{ext}'))
    return sorted(pics, key=lambda p: p.name)

def main():
    readme = Readme(pictures=get_pictures())
    with open(OUTPUT, 'w') as readme_file:
        readme_file.write(str(readme))

if __name__ == '__main__':
    main()
