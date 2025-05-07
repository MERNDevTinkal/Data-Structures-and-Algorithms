let userInput = Number(prompt("Please enter number for sum"));

if(isNaN(userInput) || userInput <= 0){
  console.log("This is an invalid input",userInput);
} else{ 

  let sum = 0;

  for(i=1; i <= userInput; i++){

    sum = i+ sum;
    console.log( `This is i ${i} and this is sum ${sum}`)
  }

  console.log(`The sum of ${userInput} is ${sum}`)
};