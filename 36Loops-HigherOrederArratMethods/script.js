// Loops & High order Array Methods

for(let i=0; i <= 10; i++){


    if(i === 7){
        console.log("7 is my lucky number")
    }
    else{
        console.log('Number '+i);
    }
}

//Nest Loop

for(let i = 1; i<=10; i++){
    for(let j = 1; j<=10;j++){
        console.log(`${i} * ${j} = ${i * j}`)
    }
    console.log('\n')
}

// Loop Through an array

const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for(let i=0; i < names.length; i++){

    if(names[i] === 'Sara'){
        console.log(names[i]+' is the best')
    }
}

// Break Statement

for(let i=0; i <= 20; i++){


    if(i === 15){
        break;
    }
    else{
        console.log('Number '+i);
    }
}

// Continue Statement

for(let i=0; i <= 20; i++){


    if(i === 13){
        continue;
    }
    else{
        console.log('Number '+i);
    }
}

// While and do-While loops

let i = 0;
// while(i < 20){
//     console.log('Number '+i);
//     i++;
// }

while(i < names.length){
    console.log("Name "+names[i])
    i++;
}
i = 1;
while (i <= 5){
    let j = 1
    while(j <= 10){
        console.log(`${i} * ${j} = ${i * j}`)
        j++;
    }
    console.log('\n');
    i++;
}

// do while

i = 21

do{
    console.log('Number: '+i);
    i++;
}while(i < 21);