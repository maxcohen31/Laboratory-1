/*

    Si scriva un programma che legge un intero n e valuta se è primo,
    ovvero che non esista un numero d tra 2 e n-1 tale che n sia divisibile per d. 
    Si stampi 1 se il numero è primo, 0 altrimenti. Si stampi inoltre il tempo di esecuzione del programma        

*/

const prompt = require("prompt-sync")();
n = Number(prompt("Insert number: "));

let primo = 1;

start = Date.now()

for(let i = 2; i < n; ++i)
{
    if(n % i == 0)
    {
        primo = 0;
    }
}
console.log(primo);

let time = (Date.now() - start) / 1000;
console.log("Time in seconds", time) / 1000;


/* Stampa 10 volte se un numero è primo o no */



for(let i = 0; i < 10; ++i)
{
    n = Number(prompt("Insert number: "));
    let primoFor = 1;
    for(let i = 2; i < n; ++i)
    {
        if(n % i == 0)
        {
            primoFor = 0;
        }
    }
    console.log(primoFor);
}
