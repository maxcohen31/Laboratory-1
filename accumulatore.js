/* 
    Si scriva un programma che legge numeri fino a che la loro somma non supera 101.
    Il programma deve poi stampare la somma ottenuta
*/

const prompt = require("prompt-sync")();

let sum = 0;

while(sum <= 101)
{
    input = Number(prompt("Insert number: "));
    sum += input;
    console.log(sum);
}

