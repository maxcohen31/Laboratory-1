/* Program to convert user input gave in seconds to hours:minutes:seconds format */

const prompt = require("prompt-sync")();

console.log("** TIME CONVERTER **\n");
let userInput = Number(prompt("Insert seconds > "));

// Check if useriInput is a number type
if (typeof userInput === 'number' && !isNaN(userInput)){

    let seconds = userInput % 60;
    let minutes = Math.floor((userInput / 60) % 60);
    let hours = Math.floor(userInput / 3600);

    console.log(`Time is: ${hours}:${minutes}:${seconds}`); 

}else{
    console.log("0:0:0");
}


