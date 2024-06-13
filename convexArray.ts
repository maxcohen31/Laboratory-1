/*
    Un vettore V [0, n − 1] è detto convesso semplice se esiste un indice j tale che 
    V [0] = V[1] = V[2] = ··· = V[j] e, per ciascun i > j, vale V[i] < V[i+1].

    Per esempio, il vettore V = {3,3,3,5,8,14,15} è convesso semplice, 
    mentre V′ = {3,3,3,5,8,8,14,15} e V ′′ = {5, 8, 14, 5} non lo sono.

    1. Scrivere in L (senza tipi) un algoritmo che, 
    preso in input un vettore convesso semplice V, trova l’indice j in tempo O(n);

    2. Scrivere in L (senza tipi) un algoritmo che, preso in input un vettore convesso semplice V, 
    trova l’indice j in tempo O(log n).

    Per ogni soluzione proposta, fornire dimostrazione della complessità in tempo.
*/

function convex1(a: number[]): number {

    // O(n)

    let j: number = 0
    let k: number = a.length - 1;
    
    while (j < k && a[j] === a[j+1]) {
        j++;
    }
    
    for (let i: number = j; i < a.length; i++) {
        if (a[i] > a[i+1]) {
            return -1;
        }
    }
    return j 
}

function convex2(a: number[], l: number, r: number): number {
    // Usiamo la ricerca binaria
    // O(logn)
    if (l <= r) {
        
        let mid: number = Math.floor((l + r) / 2);

        if (a[mid] === a[l]) {
            return convex2(a, mid+1, r);
        }

        if (a[mid] < a[mid+1]) {
            return mid
        }
        else {
            return convex2(a, l, mid+1)
        }
    }
    return -1
}

let v: number[] = [3,3,3,5,8,14,15] 
console.log(convex1(v))
console.log(convex2(v, 0, v.length-1))
