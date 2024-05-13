/*
    Insertion Sort;
    
    Complessità: - O(n) al caso ottimo
                 - O(n^2) al caso pessimo
*/


function insertionSort(arr) {
    for (let j = 1; j < arr.length; j++) {
        
        let temp = arr[j];
        // elemento precedente a temp
        let i = j - 1;

        while (i >= 0 && arr[i] > temp) {
            // Sposta l'elemento a destra
            arr[i+1] = arr[i];
            // l'indice di confronto diminuisce di 1
            i--;
        }
        // Inserisce l'elemento esaminato in posizione
        arr[i+1] = temp;

    }
}


let a = [3, 1, 6, 7, 2, 10, 4];
insertionSort(a);
console.log(a)
