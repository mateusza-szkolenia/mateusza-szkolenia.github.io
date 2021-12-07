#!/usr/bin/env python3

import urllib
import urllib.request
import html

WIKI_URL = 'https://en.wikipedia.org/wiki/Ubuntu_version_history'
OUTPUT = '../img/ubuntu-timeline.png'

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
with open(OUTPUT, 'wb') as f:
    f.write(pngimg)

