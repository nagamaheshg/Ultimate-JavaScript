// Filiter

const numbers = [1,2,3,4,5,6,7,8]

const evenNumbers = numbers.filter((number)=> number%2 === 0)
console.log(evenNumbers);

const totalEvenArr = []
const evevnArray = numbers.forEach((number) => {

    if(number%2 === 0){
        totalEvenArr.push(number)
    }
});


console.log(totalEvenArr);

const compaines = [

    { name:'company one', category: 'Finance', start: 1981, end:2004},
    { name:'company two', category: 'Retail', start: 1992, end:2008},
    { name:'company three', category: 'Auto', start: 1999, end:2007},
    { name:'company four', category: 'Retail', start: 1992, end:2010},
    { name:'company five', category: 'Technology', start: 2009, end:2014},
    { name:'company Six', category: 'Finance', start: 1987, end:2010},
    { name:'company seven', category: 'Auto', start: 1986, end:1996},
    { name:'company Eight', category: 'Technology', start: 2011, end:2016},
    { name:'company Nine', category: 'Retail', start: 1981, end:1989},

];

const getByCategory = compaines.filter(company => company.category === 'Retail')
console.log(getByCategory);

// Get companies that started in an after 1980 and ended in or before 2005

const sortedListAfterAndBeforeYear =  compaines.filter((company) => company.start >= 1980 && company.end <= 2005)

console.log(sortedListAfterAndBeforeYear);

// Get Companies that lasted 10 years or more

const longCompanies = compaines.filter(company => (company.end - company.start) >= 10)
console.log(longCompanies)

// Maps

const doubledNumbers = numbers.map((number)=> number * number)
console.log(doubledNumbers)

// create an array of company names

const listOfCompanies = compaines.map(company => company.name)
console.log(listOfCompanies);

// Creare an array just company and category

const companyAndCatgeory = compaines.map((company) => {

    return {
        name: company.name,
        category: company.category,
    }
})
console.log(companyAndCatgeory);

// Create an array of length of each company in years

const companyNameLength = compaines.map(company => {

    return {

        name:company.name,
        length: company.end - company.start,

    }
});

console.log(companyNameLength);

// Chain Map Methods
const squareAndDouble = numbers.map((number) => Math.sqrt(number)).map((sqrt) => sqrt * 2)

console.log(squareAndDouble)
 
const squrtAndDouble2 = numbers.map(function(number){
    return Math.sqrt(number);
}).map(function(sqrt){
    return sqrt * 2;
})

console.log(squrtAndDouble2);

// Chaining different Methods

const evenDouble = numbers.filter((number) => number % 2 === 0).map((number)=> number * 2);
console.log(evenDouble);

// Reduce

const numArr = [1,2,3,4,5,6,7,8,9]


const sumArr = numArr.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
}, 0)

console.log(sumArr)

const sum = numArr.reduce((acc,cur) => acc+cur, 0)
console.log(sum);

const cart = [

    { id:1, name: 'product1', price: 130},
    { id:2, name: 'product2', price: 150},
    { id:3, name: 'product3', price: 175}
];

const total = cart.reduce(function(acc, product){
    return acc+product.price
}, 0);

console.log(total)
