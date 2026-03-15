// // let numbers = [2, 4, 6, 8];

// // let result = numbers.map(item => {
// //    return item*item
// // })

// // console.log(result)

// let users = [
//   { id: 1, name: "Rahul", age: 22 },
//   { id: 2, name: "Amit", age: 25 },
//   { id: 3, name: "Neha", age: 24 }
// ];

// let namearr = users.map(item => item.name)
// console.log(namearr)

let users = [
  { id: 1, name: "Rahul", age: 22 },
  { id: 2, name: "Amit", age: 25 },
  { id: 3, name: "Neha", age: 24 }
];

let userDetails = users.map( user => {
    return {id:user.id ,naem: user.name}
}  )

console.log(userDetails)