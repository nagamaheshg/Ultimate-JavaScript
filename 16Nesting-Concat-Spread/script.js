let x;

const fruits = ['apple','pear','Orange']
const berries = ['strawberry', 'blueberry', 'rasberry']



// fruits.push(berries)
console.log(fruits)

// x = fruits[3][1]
console.log(x)

const allFruits = [fruits, berries]
x = allFruits[0][2]
console.log(x)

// concat

x = fruits.concat(berries)
console.log(x)

// spread operator(...)

x = [...fruits, ...berries]
console.log(x)  

// Flattern Arrays

const arr = [1, 2,[3, 4], 5, [6,7],8]
x = arr.flat()
console.log(x)

// Static Methods an Array Object
x = Array.isArray()
x = Array.from('Mahesh')
console.log(x)

const a = 1
const b = 2
const c = 3

x = Array.of(a,b,c)
console.log(x)