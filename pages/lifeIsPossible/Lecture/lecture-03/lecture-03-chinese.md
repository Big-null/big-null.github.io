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

講課 03 - CSS和Bulma入門

---

# 選單

- CSS是什麼和為什麼要用CSS
- CSS的概念
- HTML中的class和id概念
- 基本CSS結構
- 讀取CSS樣式和文件
- Bulma的基本使用

---

# 什麼是CSS和為什麼要用

在您之前的Lab 02 HTML任務中，網站看起來漂亮嗎？

---

# 這些網站是如何呈現的？

演示：
https://81-web.com/
https://1guu.jp/


---

# CSS（層疊樣式表）

### 也稱為：CSS可用於非常基本的文檔文本樣式

---

![bg w:1250](https://www.interviewbit.com/blog/wp-content/uploads/2021/10/HTML-and-CSS.png)


---

# HTML和CSS的不同？

<div class="columns">

<div>

# HTML

所有內容和文本

例如：人體骨骼和肌肉 💀
</div>

<div>

# CSS

所有樣式和UI的外觀

例如：人體皮膚和頭髮 🎅
</div>

</div>

---

# 如何快速展示（內部方法）

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

# 如何快速展示（外部方法）

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


# 快速示範如何（內嵌方法）

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

# 我們偏好哪種 CSS 方法？

<div class="columns-three">

<div>

# 內部 CSS

半推薦 👍
</div>

<div>

# 外部 CSS 

最推薦 👍👍
</div>

<div>

# 行內 CSS

不推薦 🤚
</div>

</div>

---

# 練習課程（5 分鐘）
試著在一個文件夾中創建一個 `index.html` 和 `index.css`，然後將這些內容複製到每個文件夾中。

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

# 短暫休息

---

# 介紹 `id` 和 `class`

像上面的例子，您可能會看到以下代碼：

```html
<h1 class="school">Hello schools.</h1>
<h1 id="apple">I am an apple.</h1>
```

那麼，什麼是 `id` 和 `class`？

---

# `id` 和 `class`

在一般的介紹中，它說：

> `id` 屬性為 HTML 元素指定唯一的 `id`。`id` 屬性的值在 `HTML` 文檔中必須是唯一的。

> `class` 屬性通常用於指向樣式表中的 `class` 名稱。它也可以被 JavaScript 用來訪問和操作具有特定 `class` 名稱的元素。

---

# `id` 和 `class`

即：我們使用 id 和 class 來指向我們想要對其應用某些內容的元素。
（例如：應用一些樣式、事件、控制相關元素等等）

---

# `id` 和 `class` 的不同之處

1. `id` 是唯一的標籤，它只能引用一個元素。
`class` 可以同時應用於許多元素。

正確 ⭕
```html
<h1 id="apple">I am an apple.</h1>
<h3 class="school">Hello schools 3.</h3>
<h2 class="school">Hello schools 2.</h2>
```

錯誤 ❌（不能重複使用相同的 `id`）
```html
<h1 id="apple">I am an apple.</h1>
<h1 id="apple">Hello schools 1.</h1>

<h3 class="school">Hello schools 3.</h3>
<h2 class="school">Hello schools 2.</h2>
```

---

## 更多正確例子

正確 ⭕
```html
<h1 id="apple">I am an apple.</h1>
<h3 id="orange">Hello schools 3.</h3>
<h2 class="school">Hello schools 2.</h2>
```

正確 ⭕
```html
<h1 id="apple" class="school">I am an apple.</h1>
<h3 id="orange">Hello schools 3.</h3>
<h2 class="school boxes">Hello schools 2.</h2>
```

---

2. `class` 可以同時套用到多個元素上，而 `id` 僅能套用到一個元素。

正確  ⭕
```html
<h2 class="school">Hello schools 2.</h2>
<h2 class="boxes">Hello schools 2.</h2>
<h2 class="school boxes">Hello tom</h2>
```
在上面的範例中，"Hello tom" 元素可以使用 `school` 和 `boxes` 兩個 `class` 的樣式。

錯誤 ❌ （`id` 不可以重複使用）
```html
<h1 id="apple orange">I am an apple.</h1>
```

---

# 休息一下

---

# 如何使用 `id` 和 `class`？

---

# `id`

要連結一個 `id`，我們使用 `#` 來表示以下的標籤是一個 `id` 的參考。

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

要連結一個 `class`，我們在 CSS 中使用 `.` 來表示接下來的標籤是一個 `class` 的引用。

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

## CSS 檔案
所有的 CSS 樣式都會被放在一起。

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

# CSS 可以做什麼？

- 📚 顏色樣式
- 🖼 佈局樣式
- ✒ 文字樣式
- 🎠 動畫
- 🧰 大小和高度
- 📅 顯示方式
- 📊 還有更多...

---

# CSS 無法做什麼？

- 邏輯控制
- 處理互動事件
- 控制當某些事情發生時的顯示方式

這些是 `JavaScript` 的功能，我們將在下一課學習 `JavaScript`。

---

# CSS 使用
所有參考在：
https://www.w3schools.com/css/default.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color

---

# 短暫休息

---

# CSS 使用注意事項

1. 有些標籤可能不常用、已廢棄或是相對較新，因此我們無法在短時間內介紹所有標籤。

2. 根據需求，您應該根據自己的需求進行谷歌搜索/查找文檔。即使是高級程序員也無法記住所有的語法和代碼。不要試圖記住所有的語法，而是概念上理解 CSS 可以應用的格式。

---

# CSS 使用
常用文本相關

```css
.some-class {
  color: blue;
  text-align: center;
  font-size: 100px;
  font-weight: 600;
  font-family: 'Courier New', Courier, monospace;
}
```

更多:
https://developer.mozilla.org/en-US/docs/Web/CSS/font
https://developer.mozilla.org/en-US/docs/Web/CSS/text-align

---

# CSS 使用
通用的背景顏色和其他樣式
```css
.some-class {
  background-color: #123F02;
  text-shadow: 2px 2px;
  box-shadow: 10px 10px;
}
```

---

# CSS 使用

### 通用佈局實用程序

- `margin` (外邊框): https://www.w3schools.com/css/css_margin.asp
- `padding` (内邊框): https://www.w3schools.com/css/css_padding.asp
- `Height, Width` (高度、寬度): https://www.w3schools.com/css/css_dimension.asp
- `border` (邊框): https://www.w3schools.com/css/css_border.asp
- `float` (位置): https://www.w3schools.com/css/css_float.asp

---

# CSS 使用

### 通用佈局實用程序(更多)

- `position` (位置) : https://www.w3schools.com/css/css_positioning.asp
- `display` (現出) : https://www.w3schools.com/css/css_display_visibility.asp
- `z-index` (層): https://www.w3schools.com/css/css_z-index.asp

---

# CSS 使用

### 通用佈局實用程序(更多)
`display: flex`
`justify-content: flex-start | flex-end | center | space-between | space-around;`
`align-items: flex-start | flex-end | center | baseline | stretch;`
https://www.casper.tw/css/2017/07/21/css-flex/

---

## `display flex` 演示

https://grid.malven.co/

---

## `display flex` 練習遊戲

https://flexboxfroggy.com/

---

# 休息一下

---

# 介紹 Bulma
Bulma 是一個免費、開源的框架，提供了現成的前端元件，可以輕鬆地組合來建構響應式網頁介面。

https://bulma.io/documentation/overview/start/

---

# 為什麼要用 Bulma

- 提供良好的元件可供使用
- 有好看的介面
- 容易建構響應式網站 (responsive website)
- 寫少量的 CSS

---

## 在 HTML 中安裝 Bulma

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

## Columns (列)

- https://bulma.io/documentation/columns/basics/  


---

## Elements (元素)

- Button (按鈕): https://bulma.io/documentation/elements/button/  
- Box (盒子): https://bulma.io/documentation/elements/box/  
- Title (標題): https://bulma.io/documentation/elements/title/  

更多: https://bulma.io/documentation/elements/  

---

## Components (部件)

- Navbar (導航欄): https://bulma.io/documentation/components/navbar/    
- Card (卡片): https://bulma.io/documentation/components/card/    

更多: https://bulma.io/documentation/components/    

---

# Lab 01 - 裝飾自我介紹頁面
還記得之前在 lecture 02 的 自我介紹 頁面嗎？
現在，讓我們使用更多的 `CSS` 和 `bulma` 來美化它 ！

---

# Lab 01 - 裝飾自我介紹頁面
以下是您的頁面應該添加的一些內容：

- 👩‍🎨 文本顏色 和 背景顏色 (`Text Color` and `background color`)
- 🎴 字體大小，文本對齊 (`Font size`, `text align`)
- 🎛 邊框 (`Border`)
- 📣 至少兩個來自 bulma 的元素 (`bulma`)

以下是您可以添加到您的頁面的一些內容：

- 📦 更多的 bulma 組件和佈局
- 🛒 任何您能想到的更多內容...

---

# 結束