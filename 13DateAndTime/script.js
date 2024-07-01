let d;
d = new Date();
console.log(d,typeof d)

d = d.toString();
console.log(d,typeof d)

d = new Date(2024, 7, 30)
console.log(d)

d = Date.now();
console.log(d);

// Date Object Methods

let x;
let today = new Date()

x = today.toString()
console.log(x)
x = today.getMonth()+1
console.log(x)
x = today.getFullYear()
console.log(x)
x = today.getDate()
console.log(x)
x = today.getDay()
console.log(x)
x = today.getHours()
console.log(x)
x = today.getMinutes()
console.log(x)
x = today.getSeconds()

month = today.getMonth()+1
const precedingZero = String(month).length < 2 ? '0'+month : month;
console.log(precedingZero)

x = `${today.getFullYear()}-${precedingZero}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
console.log(x)

x=today.toLocaleString('default')
console.log(x)