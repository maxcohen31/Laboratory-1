/*
    Heapsort
    
    Complessità: O(nlogn)
*/


function maxHeapify(array: number[], n: number, i: number) {

    let largest: number = i; // Radice come elemento più grande
    let leftChild: number = (2 * i) + 1; // Figlio sinistro
    let rightChild: number = (2 * i) + 2; // Figlio destro

    // Controlla chi è più grande tra la radice ed i figli
    if (leftChild < n && array[leftChild] > array[rightChild]) {
        largest = leftChild;
    }

    if (rightChild < n && array[largest] < array[rightChild]) {
        largest = rightChild;
    }

    // Se la radice non è l'elemento più grande chiama la funzione
    if (largest != i) {
        let temp: number = array[i];
        array[i] = array[largest];
        array[largest] = temp;
        maxHeapify(array, n, largest);
    }

}

function heapsort(array: number[]) {

    let len: number = array.length;

    // Costruisce max heap
    for (let i: number = Math.floor(len / 2); i > 0; i--) {
        maxHeapify(array, len, i);
    }

    // Scambia radice con l'ultimo elemento mantenedo la proprietà del max heap
    for (let j: number = len - 1; j > 0; j--) {
        let temp: number = array[0];
        array[0] = array[j];
        array[j] = temp;

        maxHeapify(array, j, 0);
    }

}

let a: number[] = [10, 3, 5, 1, 7, 2];
heapsort(a);
console.log(a);
