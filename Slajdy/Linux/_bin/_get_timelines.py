#!/usr/bin/env python3

import os
import subprocess
import tempfile
import urllib.request
import yaml

OUTPUTDIR = '../img'

def get_timeline(wiki_url, size, filename):
    output = f'{OUTPUTDIR}/{filename}'

    pngimg = get_png_from_url(wiki_url)

    TEMP_OUTPUT = tempfile.mktemp('.png')
    with open(TEMP_OUTPUT, 'wb') as f:
        f.write(pngimg)
    subprocess.run([
        'convert', TEMP_OUTPUT, 
        '-resize', size,
        '-background', 'White',
        '-gravity', 'center',
        '-extent', size,
        output
    ])
    os.unlink(TEMP_OUTPUT)


def get_png_from_url(url):
    x = find_timeline_image_from_url(url)
    return urllib.request.urlopen(x).read()


def find_timeline_image_from_url(url):
    htmlsrc = urllib.request.urlopen(wiki_url).read().decode('UTF-8')
    return find_timeline_image(htmlsrc)


def find_timeline_image(htmlsrc):
    import html.parser

    class Parser(html.parser.HTMLParser):
        imageurl = None
        def handle_starttag(self, tag, attrs):
            if tag != 'img':
                return
            try:
                assert self.imageurl is None
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

for distro, params in yaml.load(open('_timelines.yml'), Loader=yaml.SafeLoader).items():
    wiki_url = params['url']
    size = params['size']
    filename = params['filename']
    get_timeline(wiki_url, size, filename)

