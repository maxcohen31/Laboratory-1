/*
    Sia dato un vettore ordinato A[0..n-1] contenente n elementi interi distinti appartenenti all’intervallo 0..n
    Si scriva in L (senza tipi) una funzione mancante(), 
    basata sulla ricerca binaria per individuare in tempo O(log n) 
    l’unico intero dell’intervallo 0..n che non compare in A    

*/

function missing(a: number[]): number {
    
    let l: number = 0;
    let r: number = a.length - 1;

    while (l < r) {
        let mid: number = Math.floor((l + r) / 2);
        
        if (a[mid] == mid) {
            l = mid + 1;
        } else {
            r = mid
        }
    }
    return l;
}
    

let x: number[] = [0, 1, 2, 3, 4, 5, 7];
console.log(missing(x));
