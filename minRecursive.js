/*
    Algoritmo ler la ricerca del minimo in un array con ricorsione.
*/


function minRecursive(arr, l, r) {

    // Caso base: array unitario
    if (l === r) {
        return arr[l];
    }

    let mid = Math.floor((l + r) / 2);
    let minLeft = minRecursive(arr, l, mid);
    let minRight = minRecursive(arr, mid + 1, r);

    if (minLeft < minRight) {
        return minLeft;
    }
    return minRight;

    
}

let a = [1, 3, 2, 9, 5, 0, 6];
let start = 0;
let end = a.length - 1;

console.log(minRecursive(a, start, end))
