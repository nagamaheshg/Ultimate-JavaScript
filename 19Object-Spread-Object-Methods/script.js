let x;

const todo = {}

todo.id = 1
x = todo
console.log(x)

// Object Constructor
const listTodo = new Object()

x = listTodo
console.log(x)

listTodo.id = 1
listTodo.name = 'Naga Mahesh Gatta'
listTodo.address = {
    city: 'Hyderabad',
    state: 'Telangana',
    location: 'Miyapur Allwyn',
}
console.log(listTodo)

const person = {
    address : {
        coords: {
            lat: 42.9384,
            lng: -71.3232,
        }
    }
}

let latitude = person['address']['coords']['lat']
let langtitude = person['address']['coords']['lng']

console.log(latitude,langtitude);

const obj1 = {
    a: 1,
    b: 2,
}
const obj2 = {
    c: 3, d:4,
}

const obj3 = {...obj1, ...obj2}
x = obj3
console.log(x)

// or

const obj4 = Object.assign({}, obj1, obj2)
console.log(x)

const todos = [
    {id: 1, name:"Buy Milk"},
    {id: 2, name:'Take out trash'},
    {id: 3, name:'Go to office'},
]

x = todos[0].name
console.log(x)

x = Object.keys(todo).length
console.log(x)

x = Object.values(todo)
console.log(x)
