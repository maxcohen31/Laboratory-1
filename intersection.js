/*
    Scrivere una funzione intersezione(a, b) che restituisce l'insieme risultato 
    dell'intersezione fra l'insieme a e l'insieme b.
*/

function contain(S, value)
{
    return value in S;
}

function intersezione(A, B)
{
    let result = {};
    
    for(let element in A)
    {
        if((contain(B, element)))
        {
            result[element] = true;
        }
    }
    return result;
}

let X = {"pippo": true, "pollo": true, "pepe": true};
let Y = {"pollo": true};
let Z = {};

console.log(intersezione(X, Y));
console.log(intersezione(X, Z));
