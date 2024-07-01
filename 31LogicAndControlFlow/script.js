// Logic & Control FLow statements

const x = 10;
const y = 1;

if(true){
    console.log('This is True')
}

if(false)
{
    console.log('This is not true')
}

if( x < y){
    console.log(`${x} is greater than ${y}`)
}

if(x === y){
    console.log(`${x} is equal to ${y}`)
}else{
    console.log(`${x} is not Equal to ${y}`)
}

if(x!==y){
    const z = 20;
    console.log(`${z} is 20`)
}

// shorthand if
if(x >= y) console.log(`${x} is greater than ${y}`), 
            console.log('This is true'); 
else console.log('This is false')

// else-if-nesting

const d = new Date();
const hour = d.getHours()
const month = d.getMonth()+1;

if(hour < 12){
    console.log('Good Morning')
}
else if(hour < 18){
    console.log('Good Afternoon');
}

else{
    console.log('Good Night');
}

// Nested if


if(hour < 12){
    console.log('Good Morning')
    if (hour === 6){
        console.log('Wake Up!')
    }
}
else if(hour < 18){
    console.log('Good Afternoon');
}

else{
    console.log('Good Night');
}

if(hour >= 20){
    console.log('zzzzz');
}

if (hour >= 7 && hour < 15){
    console.log("it's work time")
}

if (hour === 6 || hour === 20){
    console.log('Brush your teeth')
}

// Switch is Another way to Avalutating Conditions

switch(month){

    case 1:
        console.log("It is January");
        break;

    case 2:
        console.log("It is February");
        break;
    
    case 3:
        console.log("It is March");
        break;
    
    case 4:
    console.log("It is April");
    break;

    case 5:
        console.log("It is May");
        break;

    case 6:
        console.log("It is June")
        break;

    case 7:
        console.log("It is July")
        break;
    
    case 8:
        console.log("It is Augest")
        break;

    case 9:
        console.log("It is September")
        break;
    
    case 10:
        console.log('It is October')
        break;
    case 11:
        console.log('It is November')
        break;

    case 12:
        console.log('It is December')
        break;
    
    default:
        clg("Check the Month Once")
    
}