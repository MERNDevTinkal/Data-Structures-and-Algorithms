// // // // // // // let arr = ["apple","banana","grape","orange"];

// // // // // // // arr = arr.slice(0,2);

// // // // // // // console.log(arr);

// // // // // // // let arr = ["apple","banana","grape","orange"];

// // // // // // // arr.unshift("mango",["kiwi","melon"]);

// // // // // // // console.log(arr);

// // // // // // let arr = ["apple","banana","grape","orange"];

// // // // // // arr = arr.slice(0,2);

// // // // // // console.log(arr);

// // // // // // 1. Print all elements of an array

// // // // // let numarray = [3,3,4,3,2,]
// // // // // numarray.forEach(function(item => item*2){
// // // // //     console.log(item)
// // // // // })

// // // // var myarr = [3,4,2,4,5,6,4]
// // // // let result =[]

// // // // myarr.forEach(function(ele){
// // // //     result.push(ele*ele)
// // // // });

// // // // console.log(result)

// // // let users = [
// // //   { id: 1, name: "Rahul", age: 22 },
// // //   { id: 2, name: "Amit", age: 25 },
// // //   { id: 3, name: "Neha", age: 24 }
// // // ];

// // // let username = [];

// // // users.forEach(function(user,index,arr){
// // //     username.push(user.name)
// // // })
// // // console.log(username)

// // let users = [
// //   { id: 1, name: "Rahul", age: 22 },
// //   { id: 2, name: "Amit", age: 25 },
// //   { id: 3, name: "Neha", age: 24 },
// //   { id: 4, name: "Riya", age: 21 }
// // ];

// // let newarr=[]

// // users.forEach(function(user,index,arr){
// //     if(user.age > 23){
// //             newarr.push(user)
// //     }
// // })
// // console.log(newarr)

// let orders = [
//   { id: 1, status: "completed" },
//   { id: 2, status: "pending" },
//   { id: 3, status: "completed" },
//   { id: 4, status: "cancelled" },
//   { id: 5, status: "completed" }
// ];

// let count = 0;

// orders.forEach(function(ele,ind,arr){
//     if(ele.status === "completed" ){
//         count = count +1
//     }
// })

// console.log(count)


let cart = [
  { product: "Laptop", price: 50000 },
  { product: "Mouse", price: 500 },
  { product: "Keyboard", price: 1500 }
];

let totalPrice = 0;

cart.forEach(function(item,ind){
    totalPrice = totalPrice + item.price
})

console.log(totalPrice)