// Falsy Values

// - false
// - 0
// - "" or '' (Empty String)
// - null
// - undefined
// - NaN

// Truthy Values:
// - Everything else that is not falsy
// - true
// - '0' (0 is a string)
// - ' ' (space is a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function() {} (empty function)

const x = false

if(x){
    console.log('This is truthy')
}
else{
    console.log('This is falsy')
}

// Truthy and Falsy caveats

const children = 0;

if(children !== undefined && !isNaN(children)){
    console.log(`You have ${children} children`);
}
else{
    console.log('Plese enter number of children');
}

// checking empty Arrays

const posts = []
if(posts.length > 0){
    console.log('List Posts');
}
else{
    console.log('No posts to list');
}

// Checking for empty objects

const user = {
    name: 'Brad'
}

if(Object.keys(user).length > 0){
    console.log('List User')
}
else{
    console.log('No User');
}

// Loose Equality (==)

console.log(false === 0);
console.log('' === 0);
console.log(null === undefined)