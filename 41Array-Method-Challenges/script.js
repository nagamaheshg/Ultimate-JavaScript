// Array Method Challenges

const people = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    phone: "111-111-111",
    age: 30,
  },
  {
    firstName: "Jane",
    lastName: "poe",
    email: "jane@gmail.com",
    phone: "222-222-222",
    age: 25,
  },
  {
    firstName: "Bob",
    lastName: "Foe",
    email: "B0b@gmail.com",
    phone: "333-333-333",
    age: 45,
  },
  {
    firstName: "Sara",
    lastName: "soe",
    email: "sara@gmail.com",
    phone: "444-444-444",
    age: 19,
  },
  {
    firstName: "Jose",
    lastName: "Koe",
    email: "jose@gmail.com",
    phone: "555-555-555",
    age: 23,
  },
];

const youngPeople = people
  .filter((ypeople) => ypeople.age <= 25)
  .map((ypeople) => {
    return {
      firstName: `${ypeople.firstName + " " + ypeople.lastName}`,
      email: ypeople.email,
    };
  });

console.log(youngPeople);

const numbers = [2, -30, 50, 20, -12, -9, 7];

const sumOfPositives = numbers
  .filter((number) => number >= 0)
  .reduce((acc, curr) => acc + curr, 0);
console.log(sumOfPositives);

const words = ['coder', 'programmer', 'developer']

const captalizeWords = words.map(word => word.charAt(0).toUpperCase()+word.slice(1))
console.log(captalizeWords)