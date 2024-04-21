/*
    Si definisca l'interfaccia Nodo per rappresentare alberi k-ari generici con campi val e figli. 
    Si definisca poi una funzione sbarba che, dati in input la radice di un albero e un predicato s, 
    elimini tutti i sottoalberi radicati in un nodo il cui valore soddisfa s.

    La soluzione deve essere scritta in TypeScript, definendo opportunamente i tipi, e non usando any o unknown.

    Nota: Per predicato si intende una funzione che prende in input un valore e restituisce un booleano.
*/

interface Nodo<T> {
    val: T
    figli: Nodo<T>[]
}

function sbarba<T>(root: Nodo<T>, s: (x: T) => boolean): void {
    for (let i: number = 0; i < root.figli.length||[]; i++) {
        if (s(root.figli[i].val)) {
            root.figli.splice(i--, 1)
        } else {
            sbarba(root.figli[i], s)
        }
    }
}

// Soluzione corretta
function sbarba2<T>(root: Nodo<T>, s: (x: T) => boolean): void {
    let i:number = 0;

    while (root.figli && i < root.figli.length ) {
        if (s(root.figli[i].val)) {
            root.figli.splice(i, 0);
        } else {
            sbarba2(root.figli[i], s);
            i++;
        }
    }
}
