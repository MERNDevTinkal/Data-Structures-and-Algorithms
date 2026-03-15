let numbers = [10, 20, 30, 40];

let sumofALL = numbers.reduce((acc,curr) => {

return acc+curr;

},0);

console.log(sumofALL)

let cart = [
  { product: "Laptop", price: 50000 },
  { product: "Mouse", price: 500 },
  { product: "Keyboard", price: 1500 }
];

let cartTotal = cart.reduce((acc,curr) => {

    return acc+curr.price

},0);

console.log(cartTotal)

let array = [2,3,4,5,6,6,5,4,3,2,2,3,3,4,5,5,5,6,6,4,5,3,2,,45,6,]

let result = array.reduce((arr,ele)=>{

     arr[ele] = (arr[ele] || 0) +1;
     return arr

},{})

console.log(result)

const fruits = ["apple","mango",34,32,"apple","mango",34,32,"apple","mango",34,32,"apple","mango",34,32,"apple","mango",34,32,"apple","mango",34,32,"apple","mango",34,32,"apple","mango",34,32,"apple","mango",34,32,"apple","mango",34,32,"apple","mango",34,32,"apple","mango",34,32,
]

const result = fruits.reduce((acc,cele)=>{
    acc[cele] = (acc[cele] || 0) + 1;
    return acc;
},{})

console.log(result)

