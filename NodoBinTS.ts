/*
    Si scriva in TypeScript una classe NodoBinT che implementi un nodo di un albero binario, 
    con le seguenti caratteristiche:

    ogni nodo ha un campo valore di nome val, di tipo qualunque (generics), 
    un campo label (una etichetta di tipo stringa), e due figli memorizzati in un array children
    il costruttore ha come argomenti il valore e l'etichetta, che per default è la stringa vuota
    ogni nodo ha un metodo add() che prende come argomento un numero qualunque di altri NodoBinT, 
    i cui elementi diventano figli del nodo, in ordine da sx a dx. 
    Il tentativo di aggiungere più di due figli deve lanciare una eccezione di tipo AlberoInvalido 
    (che dovrete definire nel vostro codice)
    ogni nodo ha un generatore visit() che restituisce, in pre-order 
    (ovvero anticipata: visitando prima il padre, poi i figli nell'ordine in cui sono stati aggiunti) 
    tutti i valori dei nodi del sottoalbero radicato nel nodo, uno alla volta. 
    NOTA: Il tipo di ritorno del generatore è IterableIterator (da istanziare con il tipo giusto).


    La soluzione deve essere scritta in TypeScript, definendo opportunamente i tipi, e non usando any o unknown.   


*/

class AlberoInvalido extends Error { ; }

class NodoBinT<T>
{
    val: T;
    label: string;
    children: NodoBinT<T>[];

    constructor(val: T, label: string = "")
    {
        this.val = val;
        this.label = label;
        this.children = [];
    }

    add(...nodes: NodoBinT<T>[]): void
    {
        if (nodes.length + this.children.length > 2)
        {
            throw new AlberoInvalido();
        } 
        this.children.push(...nodes);
    }

    *visit(): IterableIterator<T>
    {
        yield this.val;
        for (let child of this.children)
        {
            yield* child.visit(); 
        }
    }
}


