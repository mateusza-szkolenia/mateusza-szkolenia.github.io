#!/usr/bin/env python3

"Generate listings"

import glob
import os
import jinja2

def get_slidesets():
    "Get slides filenames"
    for s_filename in glob.glob("slides/*.md"):
        s_content = open(s_filename).read()
        s_title = [x for x in s_content.split("\n") if x.startswith("# ")][0][2:]
        hfn = os.path.basename(s_filename)[:-3] + ".html"
        yield {
            "title": s_title,
            "filename": s_filename,
            "md_filename": os.path.basename(s_filename),
            "html_filename": hfn
        }

VERSIONS = {
    'revealjs_version': '4.3.1'
}

def main():
    "Main"
    os.chdir(os.path.dirname(__file__) + "/..")

    j2env = jinja2.Environment(loader=jinja2.FileSystemLoader("_templates"))

    slidesets = [*get_slidesets()]
    slidesets.sort(key=lambda x: x['title'])

    for slideset in slidesets:
        reveal_template = j2env.get_template("Reveal.html.j2")
        params = {**slideset, **VERSIONS}
        reveal = reveal_template.render(**params)
        reveal_fn = slideset['html_filename']

        try:
            os.unlink(reveal_fn)
        except FileNotFoundError:
            pass
        open(reveal_fn, "w").write(reveal)
        os.chmod(reveal_fn, 0o444)

    outputs = [
        ('0.html', 'Index.html.j2'),
        ('README.md', 'README.md.j2'),
    ]

    for filename, templatename in outputs:
        with open(filename, 'w') as output_file:
            template = j2env.get_template(templatename)
            content = template.render(slidesets=slidesets)
            output_file.write(content)

if __name__ == '__main__':
    main()

