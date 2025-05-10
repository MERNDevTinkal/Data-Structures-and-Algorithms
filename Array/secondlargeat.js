let arr = [12, 45, 7, 33, 89, 21,98,89,99,991212,999999,999999 ,89, 55];

let max = -Infinity;
let secondMax = -Infinity;

for(let i = 1 ; i<arr.length ; i++){

    if(max < arr[i]){
                secondMax = max
        max=arr[i];
    }

    if(max>arr[i] && arr[i]>secondMax){
        secondMax=arr[i]
    }
}

console.log(secondMax);
console.log(max)