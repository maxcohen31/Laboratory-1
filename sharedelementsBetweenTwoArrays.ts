/*
    Si progetti un algoritmo che dati due array ordinati a1 e a2 rispettivamente di 
    n e m elementi interi, conti il numero di elementi condivisi dai due array.
*/


function sharedElements(a1: number[], a2: number[]): number {
    
    let c: number = 0;
    let i: number = 0;
    let j: number = 0;

    while (i < a1.length && j < a2.length) {
        if (a1[i] == a2[j]) {
            c++;
            i++;
            j++;
        } else if (a1[i] < a2[j]) {
            i++
        } else {
            j++;
        }
    }
    return c;
}

let x: number[] = [1, 4, 5, 10];
let y: number[] = [1, 3, 5, 7, 9, 11];
console.log(sharedElements(x, y));
