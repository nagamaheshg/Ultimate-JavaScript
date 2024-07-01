const arr = [1, 2, 3, 4, 5]

arr.push(6)
arr.unshift(0)
const reverseArr = arr.reverse()
console.log(reverseArr)

const arr1 = [1,2,3,4,5]
const arr2 = [5,6,7,8,9,10,5]
let x = arr2.splice(0,2)

const arr3 = [...arr1, ...arr2]
console.log(arr3)