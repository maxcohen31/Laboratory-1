/*
    L’azienda Algo4ever è quotata in borsa

    La quotazione in borsa dell’azienda lungo un periodo di tempo lungo n giorni viene modellata 
    attraverso un vettore A[0..n-1], dove A[0] < A[n-1] 

    Dimostrate che esiste almeno una coppia di giorni consecutivi i, i + 1 tale per cui A[i] < A[i + 1] 

    Scrivete in qualsiasi linguaggio di programmazione un algoritmo Algo4() che, dato A, 
    restituisca in tempo O(log n) un indice i in cui questo avviene

*/


function algo4(a: number[]): number {

    let l: number = 0;
    let r: number = a.length - 1;

    while (l < r) {
        
        let mid: number = Math.floor((l + r) / 2);

        if (a[mid] < a[mid+1]) {
            return mid;
        }

        if (a[l] < a[mid]) {
            l = mid + 1
        }
        else {
            r = mid;
        }
    }
    return -1;
}

let x: number[] = [1, 3, 5, 6, 8];
console.log(algo4(x))
