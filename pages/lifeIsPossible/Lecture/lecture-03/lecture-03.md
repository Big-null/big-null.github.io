---
marp: true
class: invert
footer: 'Life is Possible - Apps workshop'
paginate: true

style: |
  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .columns-three {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }
---

# Life is Possible - 生命教育 手機程式工作坊

Lecture 03 - Introduce to CSS and bulma

---

# Menu

- What and Why of CSS
- Concepts of CSS
- Concepts of `classe`, and `id` in HTML
- Basics CSS structure
- Reading CSS `style` and `documents`
- Basic use of bulma

---

# What is CSS and Why
Does the website looks beautiful at your previous Lab 02 HTML task?

---

# How does these website looks? 
Demo: 
https://81-web.com/
https://1guu.jp/


---

# CSS (Cascading Style Sheets)

### AKA: CSS can be used for very basic document text styling

---

![bg w:1250](https://www.interviewbit.com/blog/wp-content/uploads/2021/10/HTML-and-CSS.png)


---

# What the different of HTML and CSS?

<div class="columns">

<div>

# HTML

All you contents and text

e.g Humans body bones and muscles 💀
</div>

<div>

# CSS

All you style and hows the UI look

e.g Humans Skin and hair 🎅
</div>

</div>

---

# Quick demo of how (Internal method)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #apple {
            color: red;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1 id="apple">I am an apple.</h1>
</body>
</html>
```

---

# Quick demo of how (External method)

<div class="columns">

<div>

`index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Skipped -->
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <h1 class="apple">I am an apple.</h1>
</body>
</html>
```
</div>

<div>

`index.css`
```css
.apple {
    color: red;
    text-align: center;
}
```

</div>

---

# Quick demo of how (Inline method)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>
    <h1 style="color: red; text-align: center;">
        I am an apple.
    </h1>
</body>
</html>
```

---

# Which CSS method we prefered?

<div class="columns-three">

<div>

# Internal CSS

Semi-recommended 👍
</div>

<div>

# External CSS 

Most recommended 👍👍
</div>

<div>

# Inline CSS

Lessly-recommended 🤚
</div>

</div>

---

# Class exercise (5 mins)
Try to create a `index.html` and `index.css` inside a folder.
then copy these stuff inside each folder.

<div class="columns">

<div>

`index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta 
      name="viewport" 
      content="width=device-width, initial-scale=1.0"
    >
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <h1 class="school">Hello schools.</h1>
</body>
</html>
```
</div>

<div>

`index.css`
```css
.school {
    color: #FF00FF;
    text-align: right;
}
```

</div>

---

# Short Break

---

# Introduce to `id` and `class`

As the top examples, you may have seen the following code:

```html
<h1 class="school">Hello schools.</h1>
<h1 id="apple">I am an apple.</h1>
```
So, what is the `id` and `class`?

---

# `id` and `class`
In general introductions, it said:

> The `id` attribute specifies a unique id for an HTML element. The value of the `id` attribute must be unique within the HTML document.

> The `class` attribute is often used to point to a `class` name in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific `class` name.

---

# `id` and `class`
### AKA: We use `id` and `class` to POINT to the elements that we want to apply something in that elements.
(e.g. Apply some style, events, control the regarding elements ...)

---

# Different of `id` and `class`

1. `id` is a unique tags, it can only references to ONE element only.
`class` can be apply to a lot of elements at the same time.

Correct ⭕
```html
<h1 id="apple">I am an apple.</h1>
<h3 class="school">Hello schools 3.</h3>
<h2 class="school">Hello schools 2.</h2>
```

Wrong ❌ (same id can not be reuse again)
```html
<h1 id="apple">I am an apple.</h1>
<h1 id="apple">Hello schools 1.</h1>
<h3 class="school">Hello schools 3.</h3>
<h2 class="school">Hello schools 2.</h2>
```

---

## More correct samples

Correct ⭕
```html
<h1 id="apple">I am an apple.</h1>
<h3 id="orange">Hello schools 3.</h3>
<h2 class="school">Hello schools 2.</h2>
```

Correct ⭕
```html
<h1 id="apple" class="school">I am an apple.</h1>
<h3 id="orange">Hello schools 3.</h3>
<h2 class="school boxes">Hello schools 2.</h2>
```

---
2. `class` can multi apply to various elements, `id` can not.

Correct ⭕
```html
<h2 class="school">Hello schools 2.</h2>
<h2 class="boxes">Hello schools 2.</h2>
<h2 class="school boxes">Hello tom</h2>
```
In this top example, the `Hello tom` elements can use the css of both class `school` and `boxes`

Wrong ❌ (id can not be apply more than one time)
```html
<h1 id="apple orange">I am an apple.</h1>
```


---

# Short Break

---

# How to apply `id` and `class`?

---

# `id`

To link a `id`, we use `#` to represent the following tag is a `id` references.

<br>

<div class="columns">

<div>

`index.css`
```css
#apple {
    color: red;
    text-align: center;
}

#orange {
    color: yellow;
}
```

</div>

<div>

`index.html`
```html
<h1 id="apple">I am an apple.</h1>
<h1 id="orange">I am an orange?</h1>
```
</div>

---

# `class`

To link a `class`, we use `.` in css to represent the following tag is a `class` references.

<br>

<div class="columns">

<div>

`index.css`
```css
.apple-class {
    color: red;
    text-align: center;
}

.box {
    font-size: 30px
}
```

</div>

<div>

`index.html`
```html
<div class="box">
  I am an apple.
</div>

<h1 class="apple-class box">
  I am an apple also
</h1>
```
</div>

---

# CSS file
All the css style will be put together.
```css
.apple-class {
    color: red;
    text-align: center;
}

.box {
    font-size: 30px
}

#apple {
    color: red;
    text-align: center;
}

#orange {
    color: yellow;
}
```

---

# What can we do with css?

* Color style
* Layout style
* Text style
* Animations
* Size and height 
* Display method
* And more ...

---

# What css can't do?

* Logics control
* Handling event for interactions
* Control display when something happens

These are the functions of `javascript` to do, we will learn `javascript` in the next lesson.

---

# CSS utilis
All references in:
https://www.w3schools.com/css/default.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color

---

# Break

---

# CSS utilis Notices

1. Some tags are not very common / deprecated / relatively new, hence we can't introduce all tags in a short period.

2. Depends on the needed, you should google it / search the docs as your requirement. Even a senior programmer can't memorized all syntax and codes. Don't try to memorized all syntax, but the concepts that which css format can be apply.

---

# CSS utilis

### Common Text related
```css
.some-class {
  color: blue;
  text-align: center;
  font-size: 100px;
  font-weight: 600;
  font-family: 'Courier New', Courier, monospace;
}
```

More:
https://developer.mozilla.org/en-US/docs/Web/CSS/font
https://developer.mozilla.org/en-US/docs/Web/CSS/text-align

---

# CSS utilis

### Common background color and others
```css
.some-class {
  background-color: #123F02;
  text-shadow: 2px 2px;
  box-shadow: 10px 10px;
}
```

---

# CSS utilis

### Common layout utilis

- `margin`: https://www.w3schools.com/css/css_margin.asp
- `padding`: https://www.w3schools.com/css/css_padding.asp
- `Height, Width`: https://www.w3schools.com/css/css_dimension.asp
- `border`: https://www.w3schools.com/css/css_border.asp
- `float`: https://www.w3schools.com/css/css_float.asp

---

# CSS utilis

### Common layout utilis (Advance)

- `position` : https://www.w3schools.com/css/css_positioning.asp
- `display` : https://www.w3schools.com/css/css_display_visibility.asp
- `z-index` : https://www.w3schools.com/css/css_z-index.asp

---

# CSS utilis

### Common layout utilis (Important)
`display: flex`
`justify-content: flex-start | flex-end | center | space-between | space-around;`
`align-items: flex-start | flex-end | center | baseline | stretch;`
https://www.casper.tw/css/2017/07/21/css-flex/

---

## `display flex` demo

https://grid.malven.co/

---

## `display flex` practice game

https://flexboxfroggy.com/

---

# Break

---

# Introduce to bulma
> Bulma is a free, open source framework that provides ready-to-use frontend components that you can easily combine to build responsive web interfaces.

https://bulma.io/documentation/overview/start/

---

# Why bulma

- Builded decent components to use
- Decent UI
- Easy responsive website setting
- Write less CSS

---
## Install in HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello Bulma!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
  </head>
  <body>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Hello World
      </h1>
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
    </div>
  </section>
  </body>
</html>
```

---

## Columns

- https://bulma.io/documentation/columns/basics/  


---

## Elements

- Button: https://bulma.io/documentation/elements/button/  
- Box: https://bulma.io/documentation/elements/box/  
- Title: https://bulma.io/documentation/elements/title/  

And more: https://bulma.io/documentation/elements/  

---

## Components

- Navbar: https://bulma.io/documentation/components/navbar/    
- Card: https://bulma.io/documentation/components/card/    

And more: https://bulma.io/documentation/components/    

---

# Lab 01 - Enhance the Introduce yourself
Remember the previous `Introduce yourself` page from `lecture 02`?
Let's create more CSS and bulma to decorate it!

---

# Lab 01 - Enhance the Introduce yourself
Something that you **Should** add to your pages
- `Text Color` and `background color`
- `Font size`, `text align`
- `Border`
- At least two elements that from `bulma`

Something that you **Can** add to your pages
- More `bulma` components and layout stuff
- More you can think of ...


---

# End