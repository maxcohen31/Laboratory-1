/*
    Si scriva una funzione tagliaAlberi(T), che prende come parametro un albero binario T 
    (i cui nodi sono implementati come visto a lezione come oggetti con chiavi val, sx e dx). 
    La funzione taglia i sottoalberi 'secchi'. Un sottoalbero è secco se il valore nella radice del sottoalbero è < 0. 
    Il taglio avviene eliminando il contenuto del nodo secco 
    (viene eliminato il contenuto, non il nodo: quindi resta un { }) 
    - le proprietà val, sx e dx (si veda l'esempio).

    La funzione non deve restituire nulla (no return).



    Esempio:

    t={val:20, sx:{val:19, sx:{val:8}, dx:{val:7, sx:{val:9} } }, dx:{val:-3, sx:{val:-8},dx:{val:7}}}

    Dopo la chiamata a tagliaAlberi(t), t contiene {val:20, sx:{val:19, sx:{val:8}, dx:{val:7, sx:{val:9} } }, dx:{}}  
*/


function tagliaAlberi(T)
{
    if(!T)
    {
        return;
    }
    // Base case: leaf 
    if (T.val < 0) 
    {
        // Taglia il sottoalbero secco eliminando il contenuto del nodo
        delete T.val;
        delete T.sx;
        delete T.dx
    }

    // Recursion
    tagliaAlberi(T.sx);
    tagliaAlberi(T.dx) 

}

t={val:20, sx:{val:19, sx:{val:8}, dx:{val:7, sx:{val:9} } }, dx:{val:-3, sx:{val:-8},dx:{val:7}}}

console.log(tagliaAlberi(t));
console.log(t)
