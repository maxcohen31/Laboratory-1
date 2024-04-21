/*
    Si scriva in TS una funzione PotaAlberiT(T), 
    che prende come parametro un albero binario T 
    (i cui nodi sono implementati come visto a lezione come oggetti con chiavi val di tipo number, 
    sx che contiene il nodo sinistro, e dx che contiene il nodo destro). 
    La funzione taglia i sottoalberi 'secchi'. 
    Un sottoalbero è secco se il valore nella radice del sottoalbero è < 0. 
    Il taglio avviene eliminando il nodo secco (si veda l'esempio).

    La funzione non deve restituire nulla.



    La soluzione deve essere scritta in TypeScript, definendo opportunamente i tipi, e non usando any o unknown.



    Esempio:

    t={val:20, sx:{val:19, sx:{val:8}, dx:{val:7, sx:{val:9} } }, dx:{val:-3, sx:{val:-8},dx:{val:7}}}

    Dopo la chiamata a PotaAlberiT(t), 
    t contiene {val:20, sx:{val:19, sx:{val:8}, dx:{val:7, sx:{val:9} } }}, dove il nodo con valore -3 è stato rimosso.

*/

interface Nodo {
    val?: number;
    sx?: Nodo;
    dx?: Nodo;
}

function PotaAlberi(tree: Nodo|undefined): void {
    if (!tree) {
        return; 
    }

    if (tree.val! < 0) {
        delete tree.val;
        delete tree.dx;
        delete tree.sx;
    } else {
        if (tree.sx && tree.sx.val! < 0) {
            delete tree.sx;
        } else {
            PotaAlberi(tree.sx);
        }
        if (tree.dx && tree.dx.val! < 0) {
            delete tree.dx;
        } else {
            PotaAlberi(tree.dx);
        }
    } 
}

let t = {val:20, sx:{val:19, sx:{val:8}, dx:{val:7, sx:{val:9} } }, dx:{val:-3, sx:{val:-8},dx:{val:7}}}
PotaAlberi(t);
console.log(t)
