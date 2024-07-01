let x;
const person = {
    name: 'john doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main st',
        city: 'Bostan',
        State: 'Newyork',
    },
    hobbies: ['Music', 'Sports'],
}
x = person
console.log(x)
x = person['name']
console.log(x)
x = person['address']['city']
console.log(x)

x = person['name'] = 'Jane Doe'
console.log(x)

delete person.age
person['hasChildrean'] = false;
console.log(person)

person.greet = function(){
    console.log(`Hello, My Name is ${this.name}`)
}

person.greet()