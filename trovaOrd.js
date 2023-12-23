/*
    Scrivere una funzione trovaOrd(a) con a un array ordinato di numeri e x un numero, 
    che restituisce la posizione della prima occorrenza di x in a. 
    Se x non occorre in 
    la funzione restituisce -1.

    Esempi:

    trova([1,2,2,2, 3], 2) restituisce 1

    trova([1,2,3,3], 4) restituisce -1
*/

function trovaOrd(arr, x)
{
    return arr.indexOf(x); 
}

let x = [1, 2, 2, 2, 3];
let y = [1, 2, 3, 3];

console.log(trovaOrd(x, 2));
console.log(trovaOrd(y, 4));
