/*
    Si consideri una implementazione di lista a collegamento singolo, 
    dove i nodi hanno la struttura {val: v, next: n} in cui v è il valore associato al nodo, 
    e n è il prossimo nodo nella lista (il campo next ha valore null per l'ultimo nodo nella lista).

    Si consideri poi una lista L implementata da un oggetto L={ next: n }, 
    dove n è il primo nodo della lista oppure null se la lista è vuota.

    Si scriva una funzione JavaScript predFilter(L,pred) dove pred è un predicato booleano sui valori v. 
    La funzione deve modificare la lista L, eliminando tutti i nodi il cui valore soddisfa il predicato pred.



    Esempio

    Se L è la lista di nodi con valori 3 → 4 → 11 → 7 → 0 → 4, 
    allora dopo aver eseguito predFilter(L, v=>v%2==0), L deve essere la lista 3 → 11 → 7.

*/


function predFilter(L, pred)
{
    // List has one element that satisfies the predicate
    if(L.next == null && pred(L.n.val))
    {
        return null;
    }

    // List has one element and predicate is not met
    if(L.next == null && !pred(L.n.val))
    {
        return L.val;
    }

    // First node
    let first = L;

    // Traverse the list until a node satisfies the predicate
    // then the pointer moves to the next node
    while(L.next != null)
    {
        if(pred(first.next.val))
        {
            first.next = L.next.next;
        }
        else
        {  
            // Traverse the list until null
            first = first.next;
        }
    }

    return L;
}


// Soluzione Ricorsiva
function predFilterRec(list, pred)
{
    if (list.next)
    {
        if (pred(list.next.val))
        {
            list.next = list.next.next;
        }
        else
        {
            predFilterRec(list.next, pred);
        }
    }
}

let L={next: 
    {val: 3, next:
    {val: 4, next:
    {val: 11, next:
    {val: 7, next:
    {val: 0, next:
    {val: 4, next: null
    }}}}}}}

let l2 = {next: {val: 3}}

console.log(L.val)
console.log(predFilter(l2, x=>x%2 == 0))
