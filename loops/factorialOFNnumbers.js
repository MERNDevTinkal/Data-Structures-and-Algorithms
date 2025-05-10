let userInput = Number(prompt("Please enter number my dear"));

if(isNaN(userInput)|| userInput  <= 0){
    console.log("my dear input a valid number only no string",userInput);
}else{

    let fact = 1;
    for(i=1; i<=userInput ; i++){
        fact = i * fact;
        console.log(`Step ${i}: factorial so far is ${fact}`);

    }
    console.log("final factorial is ",fact)
}