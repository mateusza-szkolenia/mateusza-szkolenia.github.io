#!/usr/bin/env python3

import os
import subprocess
import tempfile
import urllib.request

WIKI_URL = 'https://en.wikipedia.org/wiki/Red_Hat_Enterprise_Linux'
OUTPUT = '../img/rhel-timeline.png'

def find_timeline_image(htmlsrc):
    import html.parser

    class Parser(html.parser.HTMLParser):
        imageurl = None
        def handle_starttag(self, tag, attrs):
            if tag != 'img':
                return
            try:
                attrs = dict(attrs)
                assert attrs['usemap'].startswith('#timeline_')
                url = attrs['src']
                if url.startswith('//'):
                    url = 'https:' + url
                self.imageurl = url
            except AssertionError:
                return
            except KeyError:
                return
    p = Parser()
    p.feed(htmlsrc)
    return p.imageurl

htmlsrc = urllib.request.urlopen(WIKI_URL).read().decode('UTF-8')
x = find_timeline_image(htmlsrc)
pngimg = urllib.request.urlopen(x).read()

TEMP_OUTPUT = tempfile.mktemp('.png')
with open(TEMP_OUTPUT, 'wb') as f:
    f.write(pngimg)

SIZE = '1600x960'

subprocess.run([
    'convert', TEMP_OUTPUT, 
    '-resize', SIZE,
    '-background', 'White',
    '-gravity', 'center',
    '-extent', SIZE,
    OUTPUT
])

# os.unlink(TEMP_OUTPUT)

# convert in.png -resize 900x900 -background Black -gravity center -extent 900x900 out.png
