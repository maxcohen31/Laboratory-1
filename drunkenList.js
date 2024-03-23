/*
    Si scriva in JS una struttura dati generica DrunkenList che implementi una linked list (lista collegata) 
    su degli oggetti generici di tipo Nodo.

    La classe DrunkenList prevede un costruttore senza argomenti per inizializzare una lista vuota, 
    una proprietà length contenente il numero di elementi della lista, ed espone le seguenti operazioni:

    push che prende come argomento un oggetto e lo inserisce in testa se la lista contiene un numero pari di elementi, 
    sia in testa che in coda se contiene un numero dispari di elementi.

    pop che rimuove e ritorna l'elemento in testa alla lista se questa ha un numero dispari di elementi, 
    l'elemento in coda se invece la lunghezza è pari. 
    Nel caso la lista sia vuota, la funzione lancia un’eccezione con tipo ReferenceError (non la dovete ridefinire voi).

    as_array che restituisce il contenuto della lista sotto forma di array.


    Nota: la lista deve essere implementata in modo collegato (linked).

    Per l'implementazione della classe Nodo, si faccia riferimento al seguente snippet (da copiare nel vostro codice):

    class Nodo {
        value;
        next;
        prec;

        constructor(value){
            this.value = value;
            this.next = undefined;
            this.prec = undefined;
        }
    }
    
*/

class Nodo {
    value;
    next;
    prec;

    constructor(value){
        this.value = value;
        this.next = undefined;
        this.prec = undefined;
    }
}

class DrunkenList
{
    length;
    head;
    tail;

    constructor()
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertHead(val)
    {
        // Lista vuota
        if (this.head == null)
        {
            // Ho un solo elemento
            this.head = new Node(val);
            this.tail = this.head;
        }
        else
        {
            // Inserisco in testa
            this.head.prec = new Node(val);
            this.head.prec.next = this.head;
            this.head = this.head.prec;
        }
        this.length++;
    }
    
    insertTail(val)
    {
        if (this.tail == null)
        {
            this.head = new Node(val);
            this.tail = this.head;
        }
        else
        {
            // Inserisco in coda
            this.tail.next = new Node(val);
            this.tail.prec.next = this.tail;
            this.tail = this.tail.next;
        }
        this.tail++;
    }

    removeHead()
    {
        if (this.head == null) 
        {
            throw new ReferenceError();
        }
            
        // Valore ultimo elemento
        let val = this.head.value;
        
        // Ho un solo elemento
        if (this.head.next == null) 
        {
            this.head = null;
            this.tail = null;
        }
        else
        {
            this.head.next.prec = null;
            this.head = this.head.next;
        }

        this.length -= 1;

        return val;

    }

    removeTail()
    {
        if (this.tail == null) 
        {
            throw new ReferenceError();
        }
            
        // Valore ultimo elemento
        let val = this.tail.value;
        
        // Ho un solo elemento
        if (this.tail.prec == null) 
        {
            this.head = null;
            this.tail = null;
        }
        else
        {
            this.tail.prec.next = null;
            this.tail = this.tail.next;
        }

        this.length -= 1;

        return val;
    }

    push()
    {
        if (this.length % 2 == 0)
        {
            this.insertHead(val);
        }
        else
        {
            this.insertHead(val);
            this.insertTail(val);
        }
    }

    pop()
    {
        if (this.length % 2 == 0)
        {
            return this.removeTail();
        }
        else
        {
            return this.removeHead();
        }
    }

    as_array()
    {
        let head = this.head;
        let result = [];
        
        while (head != null)
        {
            result.push(head.value);
            head = head.next;
        }
        return result;
    }
}

