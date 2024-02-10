/*
    Si scriva una funzione JS stampaC(T) con T un Albero Binario di Ricerca (ABR).

    L'albero binario di ricerca è rappresentato come visto a lezione, 
    i cui nodi sono oggetti con tre proprietà: val (contenente un valore intero), 
    sx (un riferimento al nodo sinistro) e dx (un riferimento al nodo destro).

    La funzione deve restituire un array contenente in ordine crescente i valori dei nodi di T 
    che abbiano almeno un figlio a valore pari. Non è possibile usare nessuna funzione di ordinamento.


    NOTA: Un ABR è un albero binario in cui il valore di ogni nodo t è più piccolo dei 
    valori di tutti i nodi presenti nel sotto-albero destro di t, 
    ed è più grande dei valori di tutti i nodi presenti nel sotto-albero destro di t.

*/

function stampaC(node, result = []) 
{
    if (node) 
    {
        if (node.val % 2 === 0) 
        {
        result.push(node.val);
        }
        stampaC(node.sx, result)
        stampaC(node.dx, result)
    }
  return result
}


let tree = {val:7,sx:{val: 4, sx: {val: 3}, dx: {val:12, sx: {val: 4, dx:{val:8}, sx:{val: 2}}}}, dx:{val: 11, dx: {val: 18}, sx: {val:3, sx: {val: 2}}}};

let tree2 = {val: 2};

console.log(stampaC(tree2))
console.log(stampaC(tree))
