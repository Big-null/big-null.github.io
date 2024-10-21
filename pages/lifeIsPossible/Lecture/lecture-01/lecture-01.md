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

Lecture 01 - Introduce to Programming

---

# Menu

- What is coding / programmers do?
- Why do we need to code?
- What should I learn for?
- Install and setup
- Lab time

---

# What do coding / programmers do?

---

# Q. What do coding / programmers do?

- Sitting in front of the computer 8 hours a day?
- Talking to the computers?
- Endless typing and typing?
- Drinking coffee all days?
- `print("Hello world")`?
- More...?

---

# A. What do coding / programmers do?

![w:900](https://i.kym-cdn.com/entries/icons/original/000/028/596/dsmGaKWMeHXe9QuJtq_ys30PNfTGnMsRuHuo_MUzGCg.jpg)

---

# Coding is...

<div class="columns">

<div>

## 🤔 Thinking

</div>

<div>

## 💻 Coding

</div>

<div>

## 🎤 Communicating

</div>

<div>

## 📚 Learning

</div>

</div>

---

# Why we need to code?

---

# A. Why we need to learn coding?

* Interested in CS / EE related fields?
* For jobs?
* Coding is cool!
* My mom told me to do so!?
* For fun?
* ect...?


---

# coding == "programmers" ? true : false ;

### Big hypothesis: Programmers have to code
### Small hypothesis: Some job roles needs to code, not only programmers
Q.E.D?

---

## Various type of Coding related languages

<div class="columns">

<div>

### 💻 Software Engineers
* Java / C# / Rust / Kotlin
* JavaScript / Typescript
* PHP / HTML / CSS

</div>

<div>

### 🔌 DevOps related
* JSON / YMAL
* Python
* JavaScript / Typescript

</div>

<div>

### 📑 Data / AI
* Python
* R
* Excel

</div>

<div>

### 🛡 Security
* Linux operations 
* PHP / JS / Python ...
* More audit tools ...

</div>

</div>

---

## Computer related jobs

<div class="columns">

<div>

### 💻 Software Engineers
* Mobile Apps developers <- Here
* Frontend developers <- Here
* Backend developers

</div>

<div>

### 🔌 DevOps 
* DevOps Engineer
* Cloud Engineer
* Architecture Engineer

</div>

<div>

### 📑 Data / AI
* Deep learning Engineer
* Machine learning Engineer
* Data researchers

</div>

<div>

### 🛡 Security
* Information Security Engineer 
* White hacker
* Risk Manager

</div>

</div>

---

# Frontend / Mobile Apps developers?
https://roadmap.sh/frontend/
https://roadmap.sh/react/
and more...

---

# What we will learn these days?

* Fundamental `HTML`
* Fundamental `CSS`
* Fundamental `Javascript`
* Use of `Github` and `Github Desktop`
* `Vercel` or `Netlify` to deploy

# Outcome
- A Web apps (PWA) that deploy to cloud services / applications in Google Play.

---

# Fundamental `HTML`

> HTML is the standard markup language for Web pages

To learn how to write a website structure with it.

---

# Fundamental `CSS`

> CSS is the language we use to style an HTML document.

To learn how to beauty a website with it.


---

# Fundamental `Javascript`

> JavaScript is the programming language of the Web.

To learn how to programming in HTML documents.

---

# Use of `Github`

> GitHub, Inc is an Internet hosting service for software development and version control using Git.

To learn how to use github for deploy projects.

---

# `Vercel` to deploy

> Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.

To learn how to deploy the website in the internet.

---

# Why not to learn writing an real apps?

* You can learn to write a real app with React Native javascript in the future.   
(https://reactnative.dev/)
* Javascript is multi-use and widely adapts in various fields. 
* Backend with express.js, frontend with Vue / React / Svelte, AI with tensorflow.js ...
* Good to learn the fundamentals, then go to apps development if interested.

---

# Break

---

# Install and setup

- Installing Visual Studio Code (VSC)
- Installing Nodejs

---

# Why Visual Studio Code (VSC)?

* Free
* Huge community
* Easy to use
* Powerfull in assisting JS / HTML / CSS coding
* Relatively light weight and cross platform

---

# VSC download

https://code.visualstudio.com/

---

# How to use VSC?

* Open a File
* Enter the File with `code .` in terminal
(MacOS: https://code.visualstudio.com/docs/setup/mac)
(`Cmd+Shift+P` => type `Shell Command: Install 'code' command in PATH` then enter)
* Create a file
* Create a folder
* Delete a folder / file
* Using VSC terminal with `pwd` / `cd` / `ls`
* Installing extensions

---

## `pwd` / `cd` / `ls` cheatsheet

### `pwd` (print work directory)
1. `pwd` will print where you are at the terminal.

### `cd` (change directory)
1. `cd <filename>` will goto that folder e.g. `cd public`.
2. `cd ..` will back to the previous folder path.

### `ls` (list directory)
1. `ls` will list all the file / folder in the terminal.
1. `ls -a` / `ls -la` will list all details in the terminal.

---

# What is Node.js?

* A javascript base runtime for PC
* For running javascript on PC
* Compile javascript to machine code

---

# Node.js download

https://nodejs.org/en/

---
# Check if Node.js installed

1. Open your (`Windows`: Powershell / CMD ) (`MacOS`: Terminal)
2. Type `node --version` then press enter.
3. If you see this message, means you are successful to install.

```bash
PS C:\Users\reemo> node --version
v18.13.0
```

---

# Break

---

# Lab time

---

# Lab 1: Create a project
By using the vsc, create a folder call `<your_name>-apps-lab1`, then create a `play.js` file inside the folder. Also, create a folder call `public`, then creating two file named `index.html` and `hello.html`

Notes 1: `<your_name>` means you name, if I am peter, name the folder `peter-apps-lab1`

---

# Lab 2: HTML
  Using VSC in `index.html`, copy the following text to the file

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
    <h1>Hi i am peter</h1>
</body>
</html>
```
Then rename the `peter` to your name. Then open the `index.html`.

---

# Lab 3: Hello world!?
In `play.js`, copy the following text to the file.

```js
// play.js
console.log("Hello I am peter")
```

type `node play.js` then see if these messages are printed on the terminal.

```bash
PS D:\apps-workshops\lecture-01\lab> node play.js\
Hello I am peter
```
Then rename the `peter` to your name, then try the `node play.js` again.

---

# End - Enjoy