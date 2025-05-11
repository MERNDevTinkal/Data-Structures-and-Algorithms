let arr = [1,11,2,22,3,33,4,44,5,55,6,66,777];

let i = [0];
let j = arr.length-1;

while(i != j){
    let temp = arr[i]
    arr[i] =arr[j]
    arr[j]=temp;
    i++;
    j--;
}
console.log(arr);
console.log("hii");
