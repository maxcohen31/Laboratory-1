/*
    Quicksort

    Complessità: 

    - Caso ottimo: O(nlogn);
    - Caso medio: O(nlogn);
    - Caso pesismo: O(n^2);

*/


function partition(array: number[], p: number, r: number): number {
    
    let i: number = p;
    let j: number = r;
    let pivot: number = array[p] // Pivot - primo elemento dell'array 

    while (i < j) {

        while (array[j] > pivot) {
            j--;
        }

        while (array[i] < pivot) {
            i++;
        }

        if (i < j) {
            let temp: number = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    return j;
}

function quicksort(array: number[], p: number, r: number) {
    if (p < r) {
        let q: number = partition(array, p, r);
        quicksort(array, p, q);
        quicksort(array, q+1, r);
    }
}

let a: number[] = [10, 8, 3, 15, 7, 9, 13, 4, 11, 6];
quicksort(a, 0, a.length-1);
console.log(a)
