let arr = ["mango", "aam", "guava", "lichi"];

let i = 0;
let j = arr.length - 1;

while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}

console.log(`Reversed array is ${arr}`);
console.log("hii");
