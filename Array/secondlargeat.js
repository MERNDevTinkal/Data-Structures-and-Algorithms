let arr = [8,10,14,15,15,88,88,88,87,88,];

let max = arr[0];
let secondMax = arr[1];

if(max < secondMax){

    [max,secondMax] = [secondMax,max]
}

for(let i = 2 ; i<arr.length ; i++){

    if(max < arr[i]){
                secondMax = max
        max=arr[i];
    }else if(arr[i] < max && arr[i] > secondMax)
        secondMax = arr[i]
}

console.log(secondMax);
console.log(max)