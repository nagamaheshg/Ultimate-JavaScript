// Logical Operators
console.log(10<20 && 30 > 15 && 40 > 30);
console.log(10 > 20 || 30 < 15);

// && - will return first falsy value or the last value

let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;

console.log(a);

const posts = [] 

posts.length > 0 && console.log(posts[0]);

// || - will return first truthy value or the last value

let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined

console.log(b);

// Logical Assignment

/* 
    ||= assign the right side value only if the left is a falsy value.

    &&= assign the right side value only if the left is a truthy value.

    ??= assign the right side value only if the left is null or undefined


*/

let ac = false;

if(!ac){
    ac = 10
}

ac = ac || 10