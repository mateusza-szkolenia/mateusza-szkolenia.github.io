#!/usr/bin/python3

import glob
import jinja2
import os

os.chdir(os.path.dirname(__file__)+"/..")

j2 = jinja2.Environment(loader=jinja2.FileSystemLoader("_templates"))
reveal_template = j2.get_template("Reveal.html.j2")
README_template = j2.get_template("README.md.j2")
Index_template = j2.get_template("Index.html.j2")

def get_slidesets():
    for p in glob.glob("slides/*.md"):
        ss = open(p).read()
        st = [x for x in ss.split("\n") if x.startswith("# ")][0][2:]
        hfn = os.path.basename(p)[:-3] + ".html"
        yield {
            "title": st,
            "filename": p,
            "md_filename": os.path.basename(p),
            "html_filename": hfn
        }

for slideset in get_slidesets():
    reveal = reveal_template.render(**slideset)
    reveal_fn = slideset['html_filename']

    try:
        os.unlink(reveal_fn)
    except:
        pass
    open(reveal_fn, "w").write(reveal)
    os.chmod(reveal_fn, 0o444)

open("0.html", "w").write(Index_template.render(**{"slidesets": [*get_slidesets()]}))
open("README.md", "w").write(README_template.render(**{"slidesets": [*get_slidesets()]}))
