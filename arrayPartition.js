/*
    Si implementi una funzione partition_until(arr, depth), 
    con arr un array di numeri interi (non vuoto) e depth un intero 0. 
    La funzione, ricorsivamente, applica il paradigma “divide-et-impera” come segue:

    se depth=0 o l’array arr contiene un solo elemento, restituisce un array contenente arr;
    altrimenti, calcola ricorsivamente le partizioni di profondità depth-1 delle due metà di arr 
    (calcolate rispetto all'elemento centrale, ovvero in indice arr.length/2 
    approssimato all'intero superiore se la lunghezza è dispari).

*/

function partition_until(arr, depth)
{
    // Base case
    if((arr.length == 1) || (depth == 0))
    {
        return [arr];
    }
       
    // Two subarrays is being created: left and right
    let left = arr.slice(0, Math.ceil(arr.length/2));
    let right = arr.slice(Math.ceil(arr.length/2), arr.length);

    // Divide et impera: return an array of partitions using destructuring assignment   
    return [...partition_until(left, depth - 1), ...partition_until(right, depth - 1)];

}

let a = [1, 2, 3, 4, -1, -2, -3, 8, 16];
console.log(partition_until(a, 2))




