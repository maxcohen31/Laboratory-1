const prompt = require("prompt-sync")();

function factorial(n)
{
    let sum = 1;

    if(n === 0 || n === 1)
    {
        return 1
    }

    for(let i = 2; i<= n; i++)
    {
        sum *= i;
    }
    return sum;
}

function factoarialPlusPlus()
{
    do
    {
        n = Number(prompt("Inserire un numero maggiore di 0: "))
    }
    while(n < 0);
     
    let sum = 1;    
    if(n === 0 || n === 1)
    {
        return 1
    }

    for(let i = 2; i<= n; i++)
    {
        sum *= i;
    }
    return sum;
}

console.log(factoarialPlusPlus());

