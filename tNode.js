/*
    Si scriva in JavaScript una classe TNode che implementi un nodo di un albero, con le seguenti caratteristiche:

    ogni nodo ha un campo valore, di tipo qualunque, una etichetta (una stringa) e un numero qualunque di figli
    il costruttore ha come argomenti il valore e l'etichetta, che per default è vuota
    ogni nodo ha un metodo add() che prende come argomenti un numero qualunque di altri TNode, 
    che diventano figli del nodo ogni nodo ha un generatore visit() che restituisce, 
    in pre-order (ovvero: visitando prima il padre, poi i figli nell'ordine in cui sono stati aggiunti) 
    tutti i valori dei nodi del sottoalbero radicato nel nodo, uno alla volta


    Si scriva poi una classe BNode che estende TNode in modo che sia possibile aggiungere a un nodo al più due figli 
    (quindi, è un nodo binario). 
    Il tentativo di aggiungere più di due figli deve lanciare una eccezione di tipo BadTreeError 
    (che dovrete definire nel vostro codice). 

    NOTA: Non è detto che i figli di un nodo binario siano a loro volta nodi binari.

*/

class BadTreeError extends Error { ; }

class TNode
{
    constructor(val, label="")
    {
        this.val = val;
        this.label = label;
        this.children = [];
    }

    add(...nodes)
    {
        this.children.push(...nodes);
    }

    *visit()
    {
        // Pre-order
        yield this.val;
        for (let child of this.children)
        {
            for (let i of child.visit())
            {
                yield i;
            }
        }

    }
}

class BNode extends TNode
{
    constructor(val, label = "")
    {
        super(val, label);
        this.children = [];
    }

    add(...nodes)
    {
        if (this.children.length + nodes.length > 2)
        {
            throw new BadTreeError("Not binary");
        }
        else
        {
            this.children.push(...nodes);
        }
    }

}
