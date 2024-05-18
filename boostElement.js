/*
    Sia a[1,..,n] un arr che gode delle seguenti proprietà:
    
    esiste i' 1 <= i' < n tale che per ogni i 1 <= i <= i' a[i+1] = a[i]
    e per ogni j i' <= j <= n, a[j+1] = a[j] + 2.

    L'elemento i è detto boost.
    Si scriva un algoritmo che, dato un arr non vuoto, restituisce il boost.
    Calcolare la complessità.

    Esempio: [1, 2, 3, 5, 7, 9] 
             L'elemento cercato è 3
*/

function findBoost(arr) {
   
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        /*
        if (arr[mid+1] == arr[mid] + 1 && arr[mid+1] == arr[mid] + 2) {
            return mid;
        }
        */
        if (arr[mid+1] < arr[mid] + 2) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }
    return l;

} 

let a = [1, 2, 3, 5, 7];
let b = [0, 1, 2, 3, 4, 6, 8]
let c = [9, 10, 11, 13, 15]
let d = [1, 2, 4]
console.log(findBoost(a))
console.log(findBoost(b))
console.log(findBoost(c))
console.log(findBoost(d))
