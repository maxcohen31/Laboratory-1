/*
    Si consideri una lista di punti nel piano cartesiano; 
    la lista è implementata mediante oggetti avente due proprietà, con chiavi val e next, 
    dove val rappresenta un punto nel piano cartesiano e deve essere definito come coppia di numeri, 
    e next il successivo punto nella lista (l'ultimo ha next a null). 
    Ad esempio, la coppia [-2,3] sarà usata per rappresenta il punto la cui coordinata x è -2 e la cui coordinata y è 4.



    Esempio:

    let l = {val: [4,5],

    next: {val: [-3,45],

    next: {val: [-2,-2],

    next: {val: [-3,12],

    next: {val: [3,-5],

    next: null}}}}}



    Si implementi in JavaScript la funzione filter(l,p) definita come segue: 
    Dati in input una lista l e un predicato p, 
    filter restituisce un array contenente tutti i punti in l che soddisfano il predicato p, 
    nello stesso ordine in cui appaiono nella lista originale. 
    L'array DEVE essere calcolato RICORSIVAMENTE affinchè l'esercizio sia valutato positivamente.

    Si implementi, inoltre, una funzione sortedFilter che calcoli lo stesso array di filter, 
    restituendolo però ordinato per coordinate crescenti (ovvero mettendo prima i punti con coordinate x minori e, 
    a parità di x, quelli con coordinate y minori).

*/

function filter(l, p) {

    if(!l) {
        return []
    }

    if (p(l.val)) {
         return [l.val].concat(filter(l.next, p));
    } else {
        return filter(l.next, p);
    }
}

function sortedFilter(l, p) {
    let result = filter(l, p);
    return result.sort((x, y) => {
        if (x[0] <= y[0]) {
            return -1;
        }
        else if (x[0] >= y[0]) {
            return 1;
        }
        else {
            return 0;
        }
    });
}


let l = { val: [4,5], next: {val: [-3,45], next: {val: [-2,-2], next: {val: [-3,12], next: {val: [3,-5], next: null}}}}}

console.log(sortedFilter(l, (x)=>(x[0]*x[1]>=0)))



