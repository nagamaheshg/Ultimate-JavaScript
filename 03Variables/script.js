//ways to declare variables
// var, let, const

let firstName = "Naga Mahesh"
let lastName = 'Gatta'

console.log(firstName, lastName)

let age = 31
console.log(age)

// Naming Convenstions
// - only letters, numbers, underscore, and dollor signs
// - can't start with a number

// Multi-word Formating
// firstName => Camel Case
// first_name => underscore
// FirstName => PascalCase
// firstname => lowercase

// Re-assign variables

let score;
score = 1
console.log(score);

if(true){
    score = score + 1
}
console.log(score);

const x = 100;

// const we can't directly re-assign

const arr = [1, 2, 3, 4, 5]
arr.push(6)
console.log(arr)


const person = {
    name: 'mahesh'
}

person.name = 'Naga Mahesh'
person.email = 'nagamaheshgatta@gmail.com'

console.log(person)

// Declare Multiple values at once

let a, b, c;

const d = 30, e = 20, f = 10