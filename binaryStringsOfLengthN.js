/*
    Algoritmo per generare sequenze binarie
    
    Input
     - array: array di dimensione n
     - n : dimensione array. 
     - i : i-esimo indice

    Complessità : O(2^n)

*/

function generaBin(array, n, i) { 

    if (i == n) {
        return console.log(array)
    }
    
    array[i] = 0;
    generaBin(array, n, i + 1);
    array[i] = 1;
    generaBin(array, n, i + 1);

}

let a = new Array(2).fill(0);
console.log(generaBin(a, 2, 0));
