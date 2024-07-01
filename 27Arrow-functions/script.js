// function add(a, b){
//     return a+b;
// }

const add = (a,b) => {
    return a+b;
}

// implicit return
const subtract = (a, b) => a - b;


// can leave of () with a single param
const product = a => a*2;

// Returning Object
const createObj = () => ({
    name:'Mahesh'
})

console.log(add(1,2));
console.log(subtract(2, 1));
console.log(product(5))

console.log(createObj())

const arr = [1,2,3,4,5,6]

// Arrow functions in a callback
arr.forEach(n => {console.log(n);})