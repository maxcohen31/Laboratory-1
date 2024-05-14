/*
    Selection Sort 
    
    Complessità: O(n^2)
*/

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;

        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
}

let a = [10, 3, 1, 4, 7, 6];
selectionSort(a);
console.log(a);
