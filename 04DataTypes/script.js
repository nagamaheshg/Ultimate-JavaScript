/*
    Primitive Data Types

        String: Sequence of characters. Must be in quotes or brackticks

        Number: Integers as well as floating-point numbers

        Boolean: Logical entity / true or false

        Null: intentional absense of any object value

        Undefined: A variable that has not yet been defined /assigned

        Symbol: Built-in object whose constructor return a unique symbol

        BigInt: Numbers that are greater than the "Number" type can handle

    Reference Data Types:

        Reference Types or Objects are a non-primitive value and when assigned to a variable,
        the variable is given a reference to that value.

        Object literals arrays and functions all are reference types.

*/

/* Static Typing vs Dyanmic Types:

    Javascript is a dyanmically-typed language. This means, we don't explicitly define the types for our variables.
    Many other languages are Static-Typed such as C, C++, Java
    
    TypeScript is a superset of javascript, which allows static typing. This can make you code more verbose and less prone errors. Typescript may be something you want to look into later on

*/

//String
const firstName = 'Mahesh'

// Number
const age = 31
const temp = 98.9

// Boolean
const hasKids = false

//null
const aptNumber = null;

// undefined
let score

// Symbol
const id = Symbol('id')

// Bigint
const n = 90529321677888n;
 
// Reference Types
const numbers = [1, 2, 3, 4]

const person = {
    name: "naga mahesh",

}

function sayHello(){
    console.log('Hello')
}

const output = sayHello;
console.log(output, typeof output)

/*

    Primitive Types: Stored directly in "stack", where it is accessed from

    String | Number | Boolean | Null | Undefined | Symbol | Bigint

    Reference Types: Stored in the heap and accessed by reference

    Arrays | Functions | Objects

    let name = 'John'

    let age = 30

    let person = {
        name: 'Brad',
        age: 40

    }

    let newName = name;

    newName = 'jonathan';

    let newperon = person

    newperson.name = 'Bradley';

    console.log(person.name) // Bradley
*/