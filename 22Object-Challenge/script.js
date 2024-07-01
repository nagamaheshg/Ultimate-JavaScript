library = [
    {title:'Watchmen', author:'Alan Moore', status:{own: true, reading:true, read:false}},
    {title:' The Dark Knight Returns', author:'Frank Miller',status:{own: true, reading:true, read:false}},
    {title:'The Sandman', author:'Neil Gaiman',status:{own: true, reading:true, read:false}},
]

library[0].status['read'] = true;
library[1].status['read'] = true;
library[2].status['read'] = true;

console.log(library)

// Destructure the title from the firstbook and rename the variable to firstbook
const {title: firstBook} = library[0];
console.log(firstBook);

console.log(library)


// turn library object to json string

library_str = JSON.stringify(library)
console.log(library_str)