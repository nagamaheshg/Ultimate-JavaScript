const post = [
    {
        id: 1,
        title: 'Post one',
        body: 'This the body',
    },
    {
        id: 2,
        title: 'Post Two',
        body: 'This the body',
    },
]  

// Convert to JSON to strig

const str = JSON.stringify(post)
console.log(str);

// parse JSON

const obj = JSON.parse(str);
console.log(
    obj
);
console.log(obj[1]['title'])