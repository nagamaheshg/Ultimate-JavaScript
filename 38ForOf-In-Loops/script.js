// For Loop - Loop through arrays

const items = ['book', 'table', 'chair', 'kite']

const users = [{name:'brad'}, {name:'nick'}, {name:'james'}]

for(const item of items){
    console.log(item)
}

for(const user of users){
    console.log(user.name);
}

// Loop over strings

const str = 'Hello World';

for(const ch of str){
    console.log(ch);
}

// Loop over maps

const map = new Map();
map.set('name', 'John');
map.set('age', 30);


for(const [key, value] of map){
    console.log(key, value);
}

// For in Loop

const colorObj = {

    color1: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green'
};

for(const key in colorObj){
    console.log(key, colorObj[key]);

}

for (const key in items){
    console.log(items[key]);
}