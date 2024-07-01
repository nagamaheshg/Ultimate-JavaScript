// Function Basics

function sayHello(){
    console.log('Hello World')
}

sayHello();

function add(num1, num2){
    console.log(num1 + num2)
}

add(10, 5)

function sub(num1, num2){
    return num1 - num2
}

const result = sub(10, 5)
console.log(result)

// More on params & Arguments

// Default parameters

function registeredUser(user = 'Bot') {
    return user+ ' is registered'
}

console.log(registeredUser())

// Rest parms
function sum(...numbers){
    let total = 0
    for (const num of numbers){
        total += num
    }
    return total;
}

console.log(sum(1,2,3,4,5,6))
 
// Object has param
function loginUser(user){
    return `The user ${user.name} with the id of ${user.id} is logged in`
}

const user = {
    id: 1,
    name: 'john'
}
console.log(loginUser(user))

console.log(loginUser({id:2, name:'sara'}));


// Arrays as Params
function getRandom(...arr){
    const randomIndex = Math.floor(Math.random()*arr.length)
    const item = arr[randomIndex];
    console.log(item);
}

getRandom([1,2,3,4,5,6,7,8,9,10])

getRandom(1,2,3,4,5,6,7,8,9,10)

