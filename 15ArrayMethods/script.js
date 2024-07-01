const arr = [34, 55, 95, 20, 15]

arr.push(200);
arr.pop();
arr.unshift(99)
arr.shift()
arr.reverse()

console.log(arr)

x = arr.includes(20)
console.log(x)

x = arr.indexOf(340)
console.log(x)

x = arr.slice(1)
console.log(x)

x = arr.splice(1, 4)
console.log(x, arr)