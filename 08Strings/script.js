let x;

const name = 'John';
const age = 30;

x = 'Hello, myName is ' +name+' and I am '+ age + 'Years old.';

// Template literals

x = `Hello, my name is ${name} and I am ${age} years old`;

console.log(x);

// String Properties and Methods

const s = "Hello World"

x = typeof s;
x = s.length;
console.log(x)

// Access value by keys

console.log(s[1])

x = s.__proto__;
console.log(x)

x = s.toUpperCase()
console.log(x)

x = s.toLowerCase()
console.log(x)

x = s.charAt(0);
console.log(x)

x = s.indexOf('e')
console.log(x)

x = s.substring(0, 5)
console.log(x)

x = s.substring(6)
console.log(x)

x = s.slice(0,5)
console.log(x)

x = s.slice(-11, -6)
console.log(x)

mystring = '   Hello World    '
x = mystring.length
console.log(x)

x = mystring.trim()
x = x.length
console.log(x)

x = mystring.replace('World', 'Mahesh')
console.log(x)

x = mystring.includes('Hello')
console.log(x)

x = mystring.valueOf()
console.log(x)

x = mystring.split(' ')
console.log(x)

myNewString = x.join()
console.log(myNewString.replace(',',' '))