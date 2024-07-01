let amount = '100'

// Convert String to number

//amount = parseInt(amount)
//amount = +amount
amount = Number(amount)

// Convert number to string
//amount = amount.toString();
amount = String(amount)

// Convert String to decimal

amount = parseFloat(amount)

// Convert number to boolean
num = 1

num = Boolean(num);
console.log(num, typeof num)

console.log(amount, typeof amount)

// NaN

let myAmount = 'hello'
myAmount = parseInt(myAmount)

console.log(myAmount, typeof myAmount)

console.log(Math.sqrt(-1))
console.log(1 + NaN)
console.log(undefined + undefined)
console.log('foo'/3)