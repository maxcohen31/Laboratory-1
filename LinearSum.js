/*
    Scrivere un algoritmo che dati un array di interi e un valore k, verifichi che 
    esistono due elementi nell'array tali che la loro somma sia uguale a k
*/

function linearSumK(a, k) {
    let i = 0;
    let j = a.length - 1;

    while (i < j) {
        if (a[i] + a[j] == k) { 
            return true; 
        }
        else if (a[i] + a[j] < k) {
            i++;
        }
        else {
            j--;
        } 
    }
    return false;
}

let a = [1, 2, 5, 6, 7];
console.log(linearSumK(a, 20))
