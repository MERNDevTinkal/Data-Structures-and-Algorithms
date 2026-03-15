// removeDuplicates([1, 2, 2, 3, 4, 4, 5])
// Output: [1, 2, 3, 4, 5]

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

const newnum = [3,3,4,4,22,44,6,6,89]

const newarray = [...new Set(newnum)];
console.log(newarray)