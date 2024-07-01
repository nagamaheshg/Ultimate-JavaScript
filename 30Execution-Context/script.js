/* When you run any javascript, a special environment is created to handle the transformation & execution of code. 
This is called the execution context. it contains the currenly running code and everything that aids in its execution.

There is a global execution context as well as a function execution context for every function invoked.

    Memory                       
    ---------------------------------
    name: 'John'
    x = 100
    y = 200
    fn: {...}

    This is the variable
    environment that stores all
    of your variables and functions
    as key: value pairs in memory

     Execution(Code)
     ----------------------------------
     This is the Thread of execution.
     Each line of code is executed line 
     by line

     Execution Context Phase:

     Memory Creation Phase:

        1. Create a global object (browser = window, Node.js = global)
        2. Create the 'this' Object and bind it to the global object
        3. Setup memory heap for storing variables and function references
        4. Store functions and variables in global execution context and set to "undefined"

    Execution Phase:

        1. Execute code line by line.
        2. create a new execution context for each function call.
*/

// Execution Context in Action 

const x = 100
const y = 200

function getSum(n1, n2){
    const sum = n1 + n2
    return sum
}
 
const sum1 = getSum(x, y)
const sum2 = getSum(10, 5)

console.log(sum1, sum2)

// The call Stack

/*
Stack of functions  to be executed
Manage execution context
Stacks are LIFO last in first order

    third()
    second()
    first()
    Global EC

Call Stack
*/

// function first(){
//     console.log("first...");
// }

// function second(){
//     console.log("second...");
// }

// function third(){
//     console.log("third...");
// }



function first(){
    console.log("first...");
    second()
}

function second(){
    console.log("second...");
    third()
}

function third(){
    console.log("third...");
}

first();
second();
third();