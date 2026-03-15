let users = [
  { id: 2, name: "Rahul" },
  { id: 2, name: "Amit" },
  { id: 2, name: "Neha" }
];

let result = users.find(ele => {

    return ele.id === 2;
})

console.log(result)