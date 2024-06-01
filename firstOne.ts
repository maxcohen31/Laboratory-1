/*
    Dato un array composto da 0 e 1 ordinato, scrivere un algoritmo che restituisca la prima occorrenza di 1
*/


function firstOne(a: number[], l: number, r: number) : number {
    if (l <= r) {
        let q: number = Math.floor((l + r) / 2);

        if (a[q] === 1) {
            return q;
        }

        if (a[q] < 1) {
            return firstOne(a, q+1, r);
        }

        else {
            return firstOne(a, l, q+1);
        }
    } 
    return -1;
}


let x: number[] = [0, 0, 0, 0, 0, 0, 1]; // 6
console.log(firstOne(x, 0, x.length-1));
