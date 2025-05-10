let numbers = [45, 88, 546, 456, 0, 1, 546, 546, 87, 9999, 1456, 2, 7, 6, 2, 7];

let maxElement = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (maxElement < numbers[i]) {
    console.log("Checking max element", maxElement, i);
    maxElement = numbers[i];
    console.log("The new max is", maxElement);
  }
}

console.log("The final largest element in this array:", maxElement);
