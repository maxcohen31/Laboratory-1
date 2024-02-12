/*
    Scrivere una funzione removeBits(a, b), 
    con a e b due numeri interi. La funzione deve rimuovere da a 
    i bit settati a 1 in b, e restituisce il numero ottenuto.
*/

function removeBits(a, b)
{
    let toRemove = a & b;
    let toKeep = ~toRemove;
    a = a & toKeep;
    return a; 
    // a ^ b;
}

console.log(removeBits(15, 4))
console.log(15^4)
