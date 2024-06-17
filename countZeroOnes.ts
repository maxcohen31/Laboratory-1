/*
    Scrivere in L (senza tipi) un algoritmo efficiente di tipo divide et impera per determinare 
    se un array non ordinato di n interi, contenente solo 0 e 1, contiene più 0 di 1. 
    Analizzare la complessità dell’algoritmo trovato, 
    dimostrarne la correttezza (non la correttezza semantica), e determinare se la soluzione proposta e' ottima.
*/


function count(a: number[], l: number, r: number): number {
    if (l === r) {
        return a[l] === 0 ? 1 : -1;
    }

    let mid = Math.floor((l + r) / 2);

    let c0: number = count(a, l, mid);
    let c1: number = count(a, mid+1, r);

    let sum: number = c0 + c1;
    
    return sum > 0 ? 1 : 0;
}



let a1: number[] = [0, 1, 1, 0, 0, 1, 1, 1];
console.log(count(a1, 0, a1.length));
