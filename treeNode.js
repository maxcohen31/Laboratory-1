/*
    Si scriva in JavaScript una classe BNodePost che implementi un nodo di un albero binario, 
    con le seguenti caratteristiche:

    -ogni nodo ha un campo valore di nome val, di tipo qualunque, 
    un campo label (una etichetta di tipo stringa), e due figli memorizzati in un array children

    -il costruttore ha come argomenti il valore e l'etichetta, che per default è vuota

    -ogni nodo ha un metodo add() che prende come argomento un numero qualunque di altri BNode, 
    i cui elementi diventano figli del nodo, in ordine da sx a dx. 
    Il tentativo di aggiungere più di due figli deve lanciare una eccezione di tipo BadTreeError 
    (che dovrete definire nel vostro codice), senza aggiungere alcuno dei figli passati

    -ogni nodo ha un generatore visit() che restituisce, in post-order 
    (ovvero posticipata: visitando prima i figli nell'ordine in cui sono stati aggiunti e poi il genitore) 
    tutti i valori dei nodi del sottoalbero radicato nel nodo, uno alla volta

*/


class BadTreeError extends Error { ; }

class BNodePost
{
    constructor(val, label="")
    {
        this.val = val;
        this.label = label;
        this.children = [];
    }

    add(...nodes)
    {
        if (nodes.length + this.children.length > 2)
        {
            throw new BadTreeError("Cannot add more than two children!");
        }
        this.children.push(...nodes);
    }

    *visit ()
    {
        for (let n of this.children)
        {
            yield n.visit();
        }
        yield this.val;
    }


}
