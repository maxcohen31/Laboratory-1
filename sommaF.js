/*
    Si scriva una funzione sommaF(f) che prende come parametro una funzione f
    che preso un intero restituisce un valore numerico.
    SommaF(f) restituisce una funzione che prende come parametro un array di interi, 
    e restituisce la somma dei valori restituiti da f
    su ogni elemento dell'array.

    Esempi:

    sommaF(x=>x*x)([1,2,3,4]) restituisce 30

    sommaF(x=>2*x)([1,2,3,4]) restituisce 20

    sommaF(Math.sqrt)([1,2,3,4]) restituisce 6.146264369941973

*/

function sommaF(f) 
{
    return function(arr) 
    {
        return  arr.reduce((accum, curr) => (accum + f(curr)), 0) 
    }   
}

console.log(sommaF(x=>x*x)([1, 2, 3, 4])) 
console.log(sommaF(x=>2*x)([1, 2, 3, 4])) 
console.log(sommaF(Math.sqrt)([1, 2, 3, 4])) 
