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
## Atrybuty

Znaczniki mogą mieć atrybuty postaci `klucz=wartość`

```html
<a href="https://alx.pl">ALX Szkolenia</a>
```

---
## Atrybuty i cudzysłowy

Wartości atrybutów powinny być w cudzysłowach lub apostrofach

```html
<p title="Wstęp">Celem niniejszego opracowania jest...</p>

<p title='Zakończenie'>Dziękuję za uwagę...</p>
```

---
## Atrybuty i cudzysłowy

Dozwolone jest pominięcie cudzysłowów, jeśli wartość atrybutu nie zawiera spacji i znaków wprowadzających niejednoznaczność.

```html
<a href=https://alx.pl>ALX Szkolenia</a>
```

**Uchodzi to jednak za nieelegancki kod**

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
<!-- .slide: data-auto-animate -->
## Białe znaki

Nowe linie i spacje nie mają znaczenia.

```html
<a><b><c>xxx</c></b><b>yyy</b></a>
```

---
<!-- .slide: data-auto-animate -->
## Białe znaki

Nowe linie i spacje nie mają znaczenia.

```html
<a>
    <b><c>xxx</c></b>
    <b>yyy</b>
</a>
```

---
<!-- .slide: data-auto-animate -->
## Białe znaki

Nowe linie i spacje nie mają znaczenia.

```html
<a>
    <b>
        <c>xxx</c>  
    </b>
    <b>yyy</b>
</a>
```

---
<!-- .slide: data-auto-animate -->
## Białe znaki

Nowe linie i spacje nie mają znaczenia.

```html
<a>
<b>
<c>xxx</c>  
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
## Puste znaczniki - notacja XML

Można spotkać się z poniższą notacją pochodzącą z języka XML/XHTML:

```html
<img src='fotka1.jpg' />
<img src='fotka2.jpg' />
<img src='fotka3.jpg' />
```

Jest ona dopuszczalna ale niepotrzebna.

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
## Encje

Znaki mające specjalne znaczenie umieszcza się na stronie za pomocą encji:

| znak | encja   |
|------|---------|
| `<`  | `&lt;`  |
| `>`  | `&gt;`  |
| `&`  | `&amp;` |


---
## Encje - przykład

```html
<p>Obrazki to znacznik &lt;img src="plik.png"&gt;</p>
```
<div class='htmlrender'>
<p>Obrazki to znacznik &lt;img src="plik.png"&gt;</p>
</div>

---
## Gdyby zabrakło encji...

```html
<p>Obrazki to znacznik <img src="plik.png"></p>
```
<div class='htmlrender'>
<p>Obrazki to znacznik <img src="plik.png"></p>
</div>


------
# Działanie przeglądarki

- pobranie kodu strony
- parsowanie kodu
- budowanie drzewa elementów
- renderowanie

------
## Pobieranie kodu

1. plik lokalny `file:///`
2. zasoby zdalne: `http://` lub `https://`

------
## Parsowanie kodu

------
## Budowanie drzewa

---
## DOM

*Document Object Model*

(obiektowy model dokumentu)

------
## Renderowanie

