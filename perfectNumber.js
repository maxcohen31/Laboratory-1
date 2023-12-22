/*
    Un numero naturale n 
    si dice perfetto se è uguale alla somma dei propri divisori propri 
    (ovvero, tutti i suoi divisori positivi escluso).
    Si scriva una funzione perfetto(n) 
    che, dato un numero naturale n, restituisca true se n è perfetto, false altrimenti.
*/


function perfetto(n)
{
    let divisors = [1];
    
    let i = 2;
    while(i < n)
    {
        if(n % i === 0)
        {
            divisors.push(i);
        }
        i++;
    }
    
    let sumDiv = divisors.reduce((a, b) => a + b);
    if(sumDiv === n)
    {
        return true;
    }
    return false;
}

console.log(perfetto(6))
console.log(perfetto(10))
console.log(perfetto(28))
