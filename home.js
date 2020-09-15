console.log('hello')
// alert('yo')

// variables
var b =  'Hello world'
console.log(b)





var age = prompt('Enter Age');

// change code on html using javascript

document.getElementById('someText').innerHTML = age;

// Numbers in javascript
var num1 = 5.7;
num1 = num1 + 1;
num1++
console.log(num1)
console.log(5*10)

// funcitons
function fun() {
    console.log('this is a function')
}

fun();

// function that takes in a name and says hello (your name!!!!!!!!!!!!!)
function greeting(yourName) {
    var result = 'Hello ' + yourName
    console.log(result)
}

greeting('Awad')
// add numbers;

function add(a,b) {
    console.log("Sum = ", a+b)
}

add(1,20)
add('Hello ', 'Jimmy')

// let is same as var!!
// let num = 0;
// while (num < 100) {
//     num += 1;
//     console.log('Num', num)
// }

// // for loop
// for (let i = 0; i <= 100; i++) {
//     console.log(i)
// }

// dict
let name = {first: 'Awad', sharif: 'Sharif'}
console.log(name)

let groceries = ['apple','banana','orange']
console.log(groceries)

// strings
let fruit = 'banana,apple,orange';
let morefruits = 'banana\napples'
console.log(fruit.length)

console.log(fruit.indexOf('an'))
console.log(fruit.slice(2, 6))
console.log(fruit.toUpperCase, fruit.toLowerCase)
console.log(fruit.split(''))

// Array
let fruits = ['apple','banana','chicken']
console.log(fruits.join('-'))

// fruits.pop() removes last element, .push('blue') adds element


fruits.shift() //removes first element in list (NOT recommended to use!)

fruits.unshift('key lime pie') //adds first element to list

let allGroceries = fruits.concat(morefruits)
console.log(allGroceries)

// switch statements
// ex: if everyday is weekday
// day 0 -> Sunday
// day 6 -> Saturday
switch (5) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    
    default:
        text = 'weekday'
}

console.log(text)