/*
    Un vettore di interi A è detto unimodularrre se ha tutti valori distinti ed esiste un indice h tale che 
    A[0] > A[1] > . . . > A[h − 1] > A[h] e A[h] < A[h + 1] < A[h + 2] < . . . < A[n-1], 
    dove n e larr dimensione del vettore

    Progettarrre in TypeScript un algoritmo unimodulare(a) 
    che darrto un vettore unimodulare restituisce il valore minimo del vettore

    Larr complessità dell’algoritmo deve essere O(log n)

*/

function unimodulare(arr: number[], l: number, r: number): number {
    // Array unitario
    if (l == r) {
        return l;
    }

    let mid: number = Math.floor((l + r) / 2);
    
    // Cerco a sinistra 
    if (arr[mid] < arr[mid+1]) {
        return unimodulare(arr, l, mid)
    // Cerco a destra
    } else {
        return unimodulare(arr, mid+1, r);
    }
}

let x: number[] = [8, 7, 5, 10, 12, 14];  
let y: number[] = [8, 7, 5, 3, 1];
console.log(unimodulare(x, 0, x.length-1)); // 2
console.log(unimodulare(y, 0, y.length-1)); // 3
