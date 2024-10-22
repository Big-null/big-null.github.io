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
---

# Life is Possible - 生命教育 手機程式工作坊

Lecture 09 - Project Week 3

---

# Bonus Menu (20 mins short talk)

- AOS - Animate on scroll library
- Animate.css
- sweetalert2

---

# AOS - Animate on scroll library 
https://michalsnik.github.io/aos/

> Animate On Scroll Library, helps to add scroll in animations in html

---

# Install

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <!-- Add AOS CSS here -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
</head>
<body>
    <div data-aos="fade-up">Hello mate</div>

    <!-- Add AOS js AND init here -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init();
    </script>
</body>
</html>
```

---

# Usage

In brief, choose the effect that you want in the animations, then add the `data-aos="????"` in regarding DOM elements.

```html
<div data-aos="fade-left"></div>
<div data-aos="flip-left"></div>
<div data-aos="zoom-in"></div>
```

See https://michalsnik.github.io/aos/ for more references.

---

# Animate.css
https://animate.style/

> Animate.css is a library of ready-to-use, cross-browser animations for use in your web projects. Great for emphasis, home pages, sliders, and attention-guiding hints.

---

# Install

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <!-- Add Animate.css here -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
</head>
<body>
  <div 
    class="animate__animated animate__bounce animate__infinite"
  >
  Hello mate
  </div>
</body>
</html>
```

---

# Usage

Select the animate you like in the https://animate.style/ 
Then add the string in the regarding DOM elements.

e.g. If I choose `animate__flash`
```html
<h4 
  class="animate__animated animate__flash animate__infinite"
>
Hello mate
</h4>
```

- `animate__animated` : Must be added to the class if you want it to animated
- `animate__infinite` : Will loop the animations if added.

---

# sweetalert2
https://sweetalert2.github.io/  

> A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScript's popup boxes

---

# Install

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>

  <!-- Add sweetalert2@11 js here -->
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</body>
</html>
```

---

# Usage
sweetalert2 is a javascript driven library, when you call the regarding functions, it will pop up a alert box.

```html
<script>
  Swal.fire('Hello all')
</script>
```

---

# More Usage
You can combo the html and js to control when the alter box pop up.

```html
<button id="alterBtn"> Click me </button>

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
  const alterBtn = document.getElementById("alterBtn")

  alterBtn.addEventListener("click", () => {
      Swal.fire("Hello all")
  })
</script>
```

---

# Enjoy

