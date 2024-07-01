const getCelsius = fahrenheit => (fahrenheit - 32) * 5/9

console.log(`The temperature is ${getCelsius(32)} \xB0C`)

const minMax = (arr) =>{ 

    return {min: Math.min(...arr), max: Math.max(...arr)};
}

minMax([1,2,3,4,5]);

((length, width)=>{
    console.log(`The area of a rectangle  with length of ${length} and a width of ${width} is ${length*width}`);
})(10, 5);