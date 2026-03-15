let myArray = [3,32,21,43,23,44,43,47]

let maxElement = myArray[0]
let secondMax =myArray[1]

if (maxElement < secondMax){
    [maxElement,secondMax] = [secondMax,maxElement]
}

for (i=2; i < myArray.length; i++){
    if(maxElement < myArray[i]){
        secondMax = maxElement;
        maxElement = myArray[i]
    }else if (myArray[i] < maxElement && myArray [i] > secondMax){
        secondMax = myArray[i]
    }
}

console.log(maxElement , secondMax)