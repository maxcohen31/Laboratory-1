/*
    Si scrivano due funzioni generiche enqueue e dequeue per la gestione di code con priorità. In particolare:
    
    - enqueue(e, queue) inserisce un elemento e (di tipo generico T) 
    in un array queue (di tipo T[]) ordinato per priorità decrescente, 
    dove la priorità è indicata in un campo priority presente in ogni elemento dell'array.
    
    - dequeue(queue) restituisce (e rimuove) l'elemento in testa all'array, 
    ovvero quello con priorità maggiore, oppure undefined (se non ci sono elementi).

    La soluzione deve essere scritta in TypeScript, definendo opportunamente i tipi, e non usando any o unknown
*/

interface WithPriority {
    priority: number 
}

function enqueue<T extends WithPriority>(e: T, queue: T[]): void {
    let i: number = 0;
    // L'indice si ferma all'elemento precedente ad e e viene incrementato
    while (i < queue.length && queue[i].priority > e.priority) {
        i++;
    }
    queue.splice(i, 0, e);
}

function dequeue<T>(queue: T[]): T|undefined {
    return queue.shift();
}

type t = {name: string, priority: number}

let a1: t = {name :"ema", priority: 11};
let a2: t = {name: "ret", priority: 2};
let a3: t = {name: "asd", priority: 32};
let result: t[] = []

enqueue(a1, result);
enqueue(a2, result);
enqueue(a3, result);
enqueue({name: "xxx", priority: 100}, result);
console.log(result)




