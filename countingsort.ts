/*
    Counting Sort 

    Complessità: O(n + k). Se k € O(n) allora si può ordinare in O(n).
    
    Vincolo: dobbiamo conoscere il range di valori da ordinare
*/

function countingSort(arr: number[]): number[] {

    let trackArr: number[] = [];
    let result: number[] = [];

    // Trova il massimo nell'array
    let m: number = arr[0];
    for (let i: number = 1; i < arr.length; i++) {
        m = Math.max(m, arr[i]);
    }

    for (let i: number = 0; i < m + 1; i++) {
        trackArr[i] = 0;
    }

    // Contiamo le occorrenze di ogni valore in arr
    for (let j: number = 0; j < arr.length; j++) {
        trackArr[arr[j]]++;
    }

    // Somme parziali
    for (let k: number = 1; k < trackArr.length; k++) {
        trackArr[k] += trackArr[k-1]
    }


    for (let i: number = arr.length - 1; i >= 0; i--) {
        result[trackArr[arr[i]] - 1] = arr[i];
        trackArr[arr[i]]--;
    }

    return result;
}


console.log(countingSort([9, 1, 2, 4, 6, 5, 3]));





