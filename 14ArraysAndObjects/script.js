// Arrays are special type of 'Object' and a datastructure in javascript that store multiple values.
let x;

const arr = [374, 755, 398, 118, 289]
const mixed = [12, 'Hello', true, null]

// Array Constructor
const fruits = new Array('apple', 'grape', 'orange')
console.log(fruits)

x = `My faviorate fruit is an ${fruits[2]}`
console.log(x)

console.log(mixed.length)

fruits[fruits.length] = 'straberry'
console.log(fruits)