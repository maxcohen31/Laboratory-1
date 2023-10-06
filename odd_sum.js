/* Program to sum first n odd numbers */

const prompt = require("prompt-sync")()

n = Number(prompt("Inser n > "));
let sum = 0;

for(let i=0; i<=n; ++i)
{
    if(i % 2 == 1)
    {
        console.log(i);
        sum += i;
    }
}

console.log("Sum is: ", sum)

