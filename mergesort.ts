/*
    Algoritmo Mergesort
    
    Complessità temporale: O(n*logn)
    Complessità spaziale: O(n)

*/


function mergesort(array: number[], p: number, q: number) {
    if (p < q) {

        let middle: number = Math.floor(p + (q - p) / 2);
        
        mergesort(array, p, middle);
        mergesort(array, middle+1, q);
        merge(array, p, middle, q);
    }
}

function merge(array: number[], p: number, m: number, q: number) {
    // Array di supporto
    let dimA: number = m - p + 1; 
    let dimB: number = q - m;
    let arrayA: number[] = new Array(dimA);
    let arrayB: number[] = new Array(dimB);

    // Copiamo in arrayA i primi (m-p+1) elementi di array
    // e i restanti in arrayB
    for (let i: number = 0; i < dimA; i++) {
        arrayA[i] = array[p + i];
    }
    for (let j: number = 0; j < dimB; j++) {
        arrayB[j] = array[m + 1 + j];
    }

    let i: number = 0;
    let j: number = 0;
    let k: number = p;

    while (i < dimA && j < dimB) {
        if (arrayA[i] <= arrayB[j]) {
            array[k] = arrayA[i];
            i++;
            k++;
        } 
        else {
            array[k] = arrayB[j];
            j++;
            k++;
        }
    }

    // Se l'array A è stato scansionato tutto, copiamo gli elementi restanti in array
    while (j < dimB) {
        array[k] = arrayB[j];
        j++;
        k++;
    }
    
    // L'array B è stato scansionato per intero
    while (i < dimA) {
        array[k] = arrayA[i];
        i++;
        k++;
    }
}   

let a = [10, 2, 1, 5, 4, 3];
mergesort(a, 0, a.length-1);
console.log(a)
