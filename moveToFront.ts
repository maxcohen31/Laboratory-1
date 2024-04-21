/*
    Scrivere una funzione TypeScript moveToFront1(a, k, f), 
    dove a è un array che rappresenta una lista di valori di un dato tipo, 
    k è un valore di quel tipo, 
    e f è una funzione che confronta due valori di quel tipo e restituisce un valore booleano.

    moveToFront1 cerca la prima occorrenza di k nella lista che soddisfa f. 
    Se k si trova nella lista, restituisce la sua posizione nella lista (contando da 0) 
    e porta l’elemento di a che contiene k in testa alla lista, altrimenti restituisce -1.



    Nota: Si assuma che la testa della lista sia l'elemento 0 di a, 
    mentre la coda l'ultimo. Come sempre, si curi di definire i tipi nella maniera più precisa possibile.

*/

function moveTofront1<T>(a: T[], k: T, f: (x: T, y: T) => boolean) {
    let result: number = -1;

    for (let i: number = 0; i < a.length; i++) {
        if (f(a[i], k)) {
            result = a.indexOf(k);
            }
        }

        if (result != -1) {
            a.unshift(k);
            a.splice(result+1, 1)
        }

    return result;
}


let l: number[] = [1, 2, 3, 4]
console.log(moveTofront1(l, 2, (a, b) => (a==b)));
