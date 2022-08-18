# 20: HTML

<style>/* <!-- */
.htmlrender {
    color: black;
    font-family: serif;
    background: white;
    padding: 1em;
    text-align: left;
    outline: 5px dotted #888;
}
/* --> */</style>

---
# HTML

HyperText Markup Language

---
## Hypertext

*więcej niż tekst*

---
## Markup Language

*język znaczników*

---
**nie jest to język programowania ale opisu dokumentu**

------
# Znaczniki

```html
<p>
    To jest fragment <b>kodu
    <abbr title='HyperText Markup Language'>HTML</abbr></b>
    a to <a href='https://pl.wikipedia.org'>link do
    Wikipedii</a>.
</p>
```

---
## Działanie

<div class='htmlrender'>
<p>
  To jest fragment <b>kodu 
  <abbr title='HyperText Markup Language'>HTML</abbr></b>
  a to <a href='https://pl.wikipedia.org'>link do Wikipedii</a>.
</p>
</div>

------
# Zasady składni HTML-a

---
## Znaczniki

Znaczniki definiują elementy i ich zawartość

---

| znacznik  | element                |
|-----------|------------------------|
| `<p>`     | akapit (paragraf)      |
| `<img>`   | obraz                  |
| `<table>` | tabelka                |
| `<a>`     | odsyłacz               |
| ...       | ...                    |

---
## Sekcje

Znaczniki wyznaczają sekcje, mające początek i koniec

```html
<znacznik>
   zawartość
</znacznik>
```

---
## Zagnieżdżenia

Sekcje mogą być zagnieżdżone

```html
<aaa>
    <bbb>
        <ccc>Hej</ccc>
    </bbb>
    <ddd>Cześć</ddd>
</aaa>
```

---
## Białe znaki

Nowe linie i spacje nie mają znaczenia.

```html
<a><b><c>xxx</c></b><b>yyy</b></a>
```

To to samo co:
```html
<a>
    <b> <c>xxx </c>  
    </b>
    <b>yyy</b>
</a>
```

---
## Puste znaczniki

Znaczniki mogą być puste, tzn. nie posiadają znacznika zamykającego.

```html
<img src='fotka1.jpg'>
<img src='fotka2.jpg'>
<img src='fotka3.jpg'>
```

---
## Przeplatanie znaczników

**NIEDOZWOLONE**

```html
1 <u> 2 <b> 3 </u> 4 </b> 5
  │     │        │      │
  └─u────────────┘      │
        └─────────────b─┘
```
---

