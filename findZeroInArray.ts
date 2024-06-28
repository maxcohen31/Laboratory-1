/*
    Sia V un vettore di n interi

    -Si dice che V è continuo se per ogni i = 0,.., n−2, |V [i + 1] − V [i]| ≤ 1

    -Si dice zero del vettore un indice k tale che V [k] = 0

    Dato un vettore V di n ≥ 2 interi continuo tale che V [0] < 0 e V [n-1] > 0, provare che V ha almeno uno zero

    Progettare in L (senza tipi) un algoritmo che, 
    dato un vettore V di n ≥ 2 interi continuo e tale che V [0] < 0 e V [n-1] > 0, trovi uno zero in O(log n) 
*/


// Ricerca binaria
function trovaZero(a: number[]): number {

    let l: number = 0;
    let r: number = a.length - 1;

    while (l < r) {
        let mid: number = Math.floor((l + r) / 2)

        if (a[mid] == 0) {
            return mid;
        }

        if (a[mid] < 0) {
            l++;
        }   

        if (a[mid] > 0) {
            r--;
        }
    }
    return -1
}

console.log(trovaZero([-1, 0, 1, 2, 3]))
console.log(trovaZero([1, 2, 3, 4]))
