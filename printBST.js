/*
    Si scriva una funzione JS stampaC(T) con T un Albero Binario di Ricerca (ABR).



    L'albero binario di ricerca è rappresentato come visto a lezione, 
    i cui nodi sono oggetti con tre proprietà: val (contenente un valore intero), 
    sx (un riferimento al nodo sinistro) e dx (un riferimento al nodo destro).



    La funzione deve restituire un array contenente in ordine crescente i valori dei nodi di T 
    che abbiano almeno un figlio a valore pari. Non è possibile usare nessuna funzione di ordinamento.
*/


function stampaC(T)
{
    let result = [];
    
    if(T == null) { return []; }

    if(T.sx && T.sx.val % 2 === 0 || T.dx && T.dx.val) 
    {
        result.push(T.val);
    }
    
    return [...result, ...stampaC(T.sx), ...stampaC(T.dx)]
    
    
}


let albe = {val: 1, sx: {val: 2, sx: {val: 4}, dx: {val: 5}}, dx: {val: 3, dx: {val: 6}}};
console.log(stampaC(albe))
