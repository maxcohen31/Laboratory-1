/* Program to convert Celsius degrees to Fahrenheit */

const prompt = require("prompt-sync")();

let celsiusDegree = Number(prompt("Insert a value > "));

if (typeof celsiusDegree  === 'number' && !isNaN(celsiusDegree)){
    console.log(`Celsius: ${celsiusDegree}° - Fahrenheit: ${celsiusDegree * 1.8 + 32}°`);
}else{
    console.log("Insert valid value");
}
