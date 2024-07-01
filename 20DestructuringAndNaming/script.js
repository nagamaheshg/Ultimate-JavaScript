const firstName = 'John'
const lastName = 'Doe'
const age = 30

const person =  {
    firstName,
    lastName,
    age,
}
console.log(person.age)

// Destructuring

const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'John'
    }
};

const {id, title, user: {name}} = todo
console.log(id, title, name); 

const numbers = [23,67,33,49]

const [first, second, ...rest] = numbers

console.log(first, second, rest)