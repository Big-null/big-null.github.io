# Life is Possible - 生命教育 手機程式工作坊

Lecture ex1 - Advance JS


## Menu

- Object, Array, for loop
- Array Looping (for, while)
- Scope
- Basic Dom control in web js



## In previous lessons

- Data Types (`string`, `number`, `boolean` ...)
- Arithmetic Operators (`+`, `-`, `*` ...)
- Assignment Operators(`x = y`, `x += y` ...)
- Define variables (`let`, `const`)
- Conditional Statements (`==`, `!=`, `===` ...)
- Compare Statements (`if`, `else`, `else if`)



## Array

> The `Array` object, as with arrays in other programming languages, enables storing a collection of `multiple items` under a single variable name, and has members for performing common array operations.

AKA a data type that store a lot of items in the same variables (as a big box).



## Why Array

Assume you have a series of data to store

```md
1,4,67,54,32,75
```

And without array, you would store the values like this:
```js
let numberOne = 1;
let numberTwo = 4;
let numberThree = 67
let numberFour = 54
// Bad method ...
```


1. Instead of create a series of variables, 
we would store those data in a `single boxes` (array)

```js
// Good method to store the series data
let numberArray = [1, 4, 67, 54, 32, 75];
```


2. We can easily sum up those data with array method.

```js
// Bad method to sum
let numberOne = 1;
let numberTwo = 4;
let numberThree = 67;
let numberFour = 54;

let sum = numberOne + numberTwo + numberThree + numberFour;
```

```js
// Good method to sum
let numberArray = [1, 4, 67, 54];

let sum = 0;
for(let val of numberArray){
  sum += val
}
```


3. We can adjust the array in code instead of declare a new variable.

```js
let numberArray = [1, 4, 67, 54];

numberArray.push(100); // Add 100 to the numberArray
console.log(numberArray) // 1, 4, 67, 54, 100
```

```js
let numberArray = [1, 4, 67, 54];

numberArray.pop(); // Remove the last item in numberArray
console.log(numberArray) // 1, 4, 67
```



### Array Rules One

- In general, array can be store various item with same type
```js
const numberArr = [1, 2, 56, 7]
const stringArr = ["tom", "may", "peter"]
const booleanArr = [false, false, true, true, true]
```

- In js, you can mix up those type to store in the array (Not recommended)
```js
const mixedArray = [1, "tom", true, 3249]
```


### Array Rules Two
To access the array, we can do like this:

```js
//                     0      1       2       3        4
const stringArray = ["tom", "may", "peter", "alex", "reemo"]

console.log(stringArray[0]) // "tom"
console.log(stringArray[3]) // "alex"
```

Important: In general programming languages, the `index` of the array start with `0`, means the `stringArray` array, `tom` is in `stringArray[0]`.



### Array Rules Three
To change the array content, we can do like this:

```js
//                     0      1       2       3        4
const stringArray = ["tom", "may", "peter", "alex", "reemo"]

stringArray[0] = "gordon" // change the "tom" to "gordon"
stringArray[3] = "joe" // change the "alex" to "joe"

console.log(stringArray) // ["gordon", "may", "peter", "joe", "reemo"]
```



### Array Rules Four
Array can store another array too. (2D array)
```js              
const arr = [
  [1,2], // 0
  [3,5], // 1
  [32,4], // 2
]

console.log(arr[0][1]) // 2
console.log(arr[1][1]) // 5
console.log(arr[2][0]) // 32
```


## Common Array method


### `length`

Get the array length (Count how many items are in the array)

```js
//                     0      1       2       3        4
const stringArray = ["tom", "may", "peter", "alex", "reemo"]

console.log(stringArray.length) // 5
```



### `push` 
`push()` add the new item to the front of the array


```js
//                     0      1       2       3        4
const stringArray = ["tom", "may", "peter", "alex", "reemo"]

stringArray.push("dennis")
console.log(stringArray) // ["tom", "may", "peter", "alex", "reemo", "dennis"]
```


### `pop`
`pop()` remove one front in the array

```js
//                     0      1       2       3        4
const stringArray = ["tom", "may", "peter", "alex", "reemo"]

stringArray.pop()
console.log(stringArray) // ["tom", "may", "peter", "alex"]
```


## What is Loops?

> Loops can execute a block of code a number of times.

Assume we want to sum up the array

```js
let numberArray = [1, 2, 8, 9, 67];

let sum = numberArray[0] + numberArray[1] + numberArray[2] + numberArray[3] + numberArray[4]
```

That's a bad pratice if the array have a lot of items. Let say 1000. Would you code those item 1000 times?


Instead of repeting, we would use loops to go through the array like this:

```js
let numberArray = [1, 2, 8, 9, 67];

let sum = 0;
for(let i = 0; i < numberArray.length; i ++){
    sum += numberArray[i]
}

console.log(sum) // 87 
```

The for loop will `loops through` the numberArray, and get each items in the array.



### These two code are the same

<div class="columns">

<div>

```js
let numberArray = [1, 2, 8, 9, 67];
let sum = 0;

for(let i = 0; i < numberArray.length; i ++){
    sum += numberArray[i]
}

console.log(sum) // 87 
```
</div>

<div>

```js
let numberArray = [1, 2, 8, 9, 67];
let sum = 0;

sum += numberArray[0]
sum += numberArray[1]
sum += numberArray[2]
sum += numberArray[3]
sum += numberArray[4]

console.log(sum) // 87 
```

</div>

</div>


## Different Kinds of Loops
JavaScript supports different kinds of loops:

- `for` - loops through a block of code a number of times
- `for/of` - loops through the values of an iterable object
- `for/in` - loops through the properties of an object
- `while` - loops through a block of code while a specified condition is true
- `do/while` - also loops through a block of code while a specified condition is true

<p style="font-size: 20px; text-align: right; color: gray">References: https://www.w3schools.com/js/js_loop_for.asp</p>



### For Loop

The `for` statement creates a loop with 3 optional expressions:

```js
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
```

`Expression 1` is executed (one time) before the execution of the code block.
`Expression 2` defines the condition for executing the code block.
`Expression 3` is executed (every time) after the code block has been executed.



### For loop with index

```js
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```

`Expression 1` : `let i = 0` (Initial values) Init a variable call `i`
`Expression 2` : `i < 5` (Conditions) The loops will continus if this conditions is true
`Expression 3` : `i++` (After a loop occur)



### For loop with index

```js
for (let i = 0; i < 5; i++) {
  console.log(i)
}

// 0
// 1
// 2
// 3
// 4
```



### For loop with index (array)

```js
let arr = [1,2,3,4,5,6,7]

for (let i = 0; i < arr.length; i++) {
  console.log("Hello: " + arr[i]);
}
```

`Expression 1` : `let i = 0` (Initial values)
`Expression 2` : `i < arr.length` (Conditions)
`Expression 3` : `i++` (After a loop occur)



### For loop with index (array)

```js
let arr = [1, 2, 66, 4, 5, 77]

for (let i = 0; i < arr.length; i++) {
  console.log("Hello: " + arr[i]);
}

// "Hello: 1"  => arr[0] = 1
// "Hello: 2"  => arr[1] = 2
// "Hello: 66" => arr[2] = 66
// "Hello: 4"  => arr[3] = 4
// "Hello: 5"  => arr[4] = 5
// "Hello: 77" => arr[5] = 77
```



### Javascript `for/of`
In javascript, instead of using `index`, we can use `for of loop` to loop through elements directly.

```js
let arr = [1, 2, 66, 4]

for (let val of arr) {
  console.log(val);
}

// 1
// 2
// 66
// 4
```



### Javascript `for/of`
`of loop` can loop the array without the `index`

```js
let nameArr = ["hello", "yolo", "tom"]

for (let v of nameArr) {
  console.log(v);
}

// "hello"
// "yolo"
// "tom"
```



### Javascript `for/in`
`in loop` will have you to loop the array with the `index`, but do not need to init the index variables

```js
let nameArr = ["hello", "yolo", "tom"]

for (let ind in nameArr) {
  console.log(ind);
}

// 0
// 1
// 2
```



### Javascript `for/in`
`in loop` can get the array element with `arr[i]` also, but we do **NOT recommended** to use `for in` to loop the array in general situations.

```js
let nameArr = ["hello", "yolo", "tom"]
for (let ind in nameArr) {
  console.log(nameArr[ind]);
}

// "hello"
// "yolo"
// "tom"
```

The `in loop` are powerful in looping the `object` that we will cover in pages later.



### Javascript `while`
`while` loop is a loop logics which mainly use on looping thats **We do not know how many times will the looping occur**. Means in most of the time, we will use `for/of` / `for/in` or `index for` to loop a array.

```js
while(<conditions>){
  // do stuff
}

while(true){
  console.log("Hello")
}
```


### `while` loop a array
```js
let nameArr = ["hello", "yolo", "tom"]

let i = 0;
while(i < nameArr.length){
  console.log(nameArr[i])
  i++;
}
```



### Javascript `do while`
It is same as the `while` logics, but it will runs the inside code ONCE no matter the while loops is true or false at first.

```js
do{
  // do something
} while(<conditions>)

do{
  // do something
} while(true)
```



### Javascript `do while`

<div class="columns">

<div>

`while Samples`

```js
while(false){
  console.log("Hello")
}

//
```

Hello will NOT printed

</div>

<div>

`do while Samples`

```js
do{
  console.log("Hello")
} while(false)

// Hello
```

Hello will print once even the `while(false)`

</div>

</div>



### `continue` and `break`

In both `for` and `while` loop, if we want to skip a certain conditions or break the loop, we may use `continue` and `break` to achieve the situations.

```js
while(true){
  break;
}

while(true){
  continue;
}

for(let i = 0; i < 6; i ++){
  continue;
}
```



### `continue`
when a `continue` occur, it will skip the current loop block.

```js
for(let i = 0; i < 6; i ++){
  if(i % 2 === 0){
    continue; // skip the current loop
  }

  console.log(i)
}

// 1
// 3
// 5
```



### `break`
when a `break` occur, it will skip WHOLE loop block.

```js
for(let i = 0; i < 6; i ++){
  if(i === 3){
    break; // escape the current loop
  }

  console.log(i)
}

// 0
// 1
// 2
```


## Object

> The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. 

AKA we want to pack some variables together as a objects.


Assume we have a person data

```js
let names = "tom"
let ages = 34
let gender = "F"
let hobby = ["coding", "running"]
```

Instead of split up those variables, we tend to create a object for this.

```js
let people = {
  names : "tom",
  ages : 34,
  gender : "F",
  hobby : ["coding", "running"]
}
```

We can access the object like this:

```js
let people = {
  names : "tom",
  ages : 34,
  gender : "F",
  hobby : ["coding", "running"]
}

// Access the people
console.log(people.name) // tom
console.log(people.hobby) // ["coding", "running"]

// Alternative method to access
console.log(people["name"]) // tom
console.log(people["hobby"]) // ["coding", "running"]
```

We tend to use object for a series of variables for `functions` reuse.

<div class="columns">

<div>

```js
let peopleOne = {
  names : "tom",
  ages : 34,
  gender : "F",
  hobby : ["coding", "running"]
}

let peopleTwo = {
  names : "jason",
  ages : 21,
  gender : "M",
  hobby : ["swimming", "jumping"]
}
```

</div>

<div>

`function.js`
```js
function printPeople(ppl){
  console.log("Hello this is " + ppl.names);
  console.log("I am age of " + ppl.ages);
}

printPeople(peopleOne)
// "Hello this is tom"
// "I am age of 34"

printPeople(peopleTwo)
// "Hello this is jason"
// "I am age of 21"

```

</div>

</div>



## Object array
We can fit the object into array too

```js
let objectArray = [
  { names: "tom", ages: 32, gender: "M" },
  { names: "may", ages: 23, gender: "F" },
  { names: "peter", ages: 65, gender: "M" },
]

console.log(objectArray[1].name) // may
```



### Object array loop

Loop the whole object
```js
let objectArray = [
  { names: "tom", ages: 32, gender: "M" },
  { names: "may", ages: 23, gender: "F" },
  { names: "peter", ages: 65, gender: "M" },
]

for(let val of objectArray){
  console.log(val)
}

// { names: "tom", ages: 32, gender: "M" }
// { names: "may", ages: 23, gender: "F" }
// { names: "peter", ages: 65, gender: "M" }
```



### Object array loop

Loop the whole object, print the name only
```js
let objectArray = [
  { names: "tom", ages: 32, gender: "M" },
  { names: "may", ages: 23, gender: "F" },
  { names: "peter", ages: 65, gender: "M" },
]

for(let val of objectArray){
  console.log(val.name)
}

// "tom"
// "may"
// "peter"
```



### Object array loop

Loop the whole object with index
```js
let objectArray = [
  { names: "tom", ages: 32, gender: "M" },
  { names: "may", ages: 23, gender: "F" },
  { names: "peter", ages: 65, gender: "M" },
]

for(let i = 0; i < objectArray.lengthl i ++){
  console.log(objectArray[i])
}

// { names: "tom", ages: 32, gender: "M" }
// { names: "may", ages: 23, gender: "F" }
// { names: "peter", ages: 65, gender: "M" }
```



### Object loop
As we mentions before, we cna loop the object too by `for/in`

```js
let peopleOne = {
  names : "tom",
  ages : 34,
  gender : "F",
  hobby : ["coding", "running"]
}

for(let key in peopleOne){
  //key, values
  console.log(key, peopleOne[key])
}

// names "tom",
// ages 34,
// gender "F",
// hobby ["coding", "running"]
```


## Scope
> Scope determines the accessibility (visibility) of variables.

JavaScript has 3 types of scope:

- Block scope
- Function scope
- Global scope



### Block / Local Scope

```js
{
  let myNumber = 2;
  console.log(myNumber); // 2
}

// myNumber can NOT be used here
console.log(myNumber) // Uncaught ReferenceError: myNumber is not defined
```

```js
let myNumber = 999;
{
  let myNumber = 100;
  console.log(myNumber); // 100
}

console.log(myNumber); // 999
```



### Block / Local Scope

`loopSamples.js`
```js
for(let i = 0; i < 10; i ++){
  // some code
}

console.log(i) // Uncaught ReferenceError: i is not defined
```



### Global scope

If the variable is in global, all the blobk, function and section can be access the variable.
```js
let myNum = 123;

function printNum(){
  console.log(myNum); // 123
}

console.log(myNum); // 123

{
  console.log(myNum); // 123
}
```



## Basic Dom control in web js
> Document Object Model (DOM)

Last, we will learn how to add interactions in web


### Basic Dom control in web js

Let's assume we have the html like this

`index.html`
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
    <h3 id="msg">Hello mate</h3>
    <h3 class="yolo">yolo hi</h3>
</body>
</html>
```



### Get the DOM elements

In general, we have these function to get the regarding elements. Both function are build in for web.
```js
// getElementBy
const msgBox = document.getElementById('msg');
const yoloBox = document.getElementsByClassName("yolo"); // Is a array
```

```js
// querySelector
const msgBoxQu = document.querySelector('##msg');
const yoloBoxQu = document.querySelector(".yolo"); // Not a array

// Since msg is a id, so we need to add ##
// Since yolo is a class, so we need to add .
```
Those function can help us to get the regarding elements.



### Add interactions to boxes
In general, we can add event to the DOM elements:

```js
const msgBox = document.getElementById('msg');

// When the msgBox box clicked, a message box will be pop up 
msgBox.addEventListener("click", function() {
    alert("Hello mate")
});
```



`index.html`
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
    <h3 id="msg">Hello mate</h3>
    <h3 class="yolo">yolo hi</h3>

    <script>
        const msgBox = document.getElementById('msg');

        // When the msgBox box clicked, a message box will be pop up 
        msgBox.addEventListener("click", function() {
            alert("Hello mate")
        });
    </script>
</body>
</html>
```


## Advance control
You can control the messgae of the elements by `innerHTML` too.



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
    <h3 id="msg">Hello mate</h3>
    <h3 class="yolo">yolo hi</h3>

    <script>
        const msgBox = document.getElementById('msg');
        const yoloBox = document.getElementsByClassName("yolo");

        // When the msgBox box clicked, a message box will be pop up 
        msgBox.addEventListener("click", function() {
            yoloBox[0].innerHTML = "hello ar"
        });
    </script>
</body>
</html>
```


`counter.html`
```html
<body>
    <h3 id="counter">0</h3>
    <button id="addCount">add num</button>

    <script>
        const counterNumber = document.getElementById('counter');
        const addCount = document.getElementById('addCount');

        addCount.addEventListener("click", function() {
            let originalNUmber = parseInt(counterNumber.innerHTML)
            originalNUmber ++;

            counterNumber.innerHTML = originalNUmber
        });
    </script>
</body>
```

## Lab 01 - Play around those stuff
Try to play around with 
- `array`
- `loop`
- `document.getElementById()`
- `addEventListener`