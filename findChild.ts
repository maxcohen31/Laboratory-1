/*
    Si consideri la seguente interfaccia TS:

    interface Nodo<T> {

    val: T,

    children: Nodo<T>[]

    }

    per la rappresentazione di alberi generici k-ari.

    Si definisca una funzione trova che prende in input tre parametri:
    La radice root di un albero k-ario rappresentato come indicato sopra (e contenente almeno un valore).
    Una funzione controlla che, dato un valore del tipo contenuto nell'albero, restituisce un booleano.
    Una funzione confronta che, dati due valori del tipo contenuto nell'albero, 
    restituisce un numero (minore di zero se il primo valore è da considerarsi più piccolo del secondo, 
    uguale a zero se sono uguali, e maggiore di zero se il primo valore è da considerarsi più grande del secondo).
    La funzione trova restituisce un array contenente i valori contenuti 
    nell'albero radicato in root e che soddisfano il predicato controlla. 
    L'array restituito è ordinato secondo la funzione confronta.

    NB: Si possono usare funzioni di ordinamento per calcolare il risultato, 
    ma saranno considerate migliori le soluzioni che - durante la loro esecuzione - 
    invochino una sola volta una funzione di ordinamento.
*/

interface Nodo<T> {
    val: T;
    children: Nodo<T>[];
}

function trova<T>(root: Nodo<T>, controlla: (a: T) => boolean, confronta: (a: T, b: T) => number): T[] {
    let result: T[] = [];

    if (controlla(root.val)) {
        result.push(root.val)
    }

    for (let i: number = 0; i < root.children.length; i++) {
        if (controlla(root.children[i].val)) {
            result.push(root.children[i].val);
        }
    }
    return result.sort(confronta);
}

// Soluzione corretta

function trova2<T>(root:Nodo<T>,controlla:(x:T)=>boolean,confronta:(x:T,y:T)=>number):T[] {
  let valori:T[] = _trova(root,controlla)
  valori.sort(confronta)
  return valori
}

function _trova<T>(root:Nodo<T>,controlla:(x:T)=>boolean):T[] {
  let valori:T[] = []
  if(controlla(root.val))
    valori.push(root.val)
  for (let c of root.children) {
    let altriValori:T[] = _trova(c,controlla)
    valori.push(...altriValori)
  }
  return valori
}


let tree: Nodo<number> = {
  val: 4,
  children: [{
    val: 6, children: []
  },{
    val: 1, children: []
  },{
    val: 2, children: []
  },{
    val: 11, children: []
  }]
}

let pari = (x:number) => (x%2==0) 
let minore = (x:number,y:number) => (x - y)
console.log(trova(tree, pari, minore));
