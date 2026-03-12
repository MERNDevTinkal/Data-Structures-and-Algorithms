let array = [
  34, 3, 54, 87, 9, 9, 3, 87099, 98, 89, 899, 8, 67, 8, 76, 65, 877, 5767, 9908,
  56756, 56567,
];

let largestElement = [0];
let secondLargest = [1];

if (largestElement < secondLargest) {
  [largestElement, secondLargest] = [secondLargest, largestElement];
}

for (let i = 2; i < array.length; i++) {
  if (largestElement < array[i]) {
    secondLargest = largestElement;
    largestElement = array[i];
  }else if (largestElement > array[i] && secondLargest < array[i])
    secondLargest = array[i]
}
console.log(`largest element of array is ${largestElement} and second ${secondLargest}` );
