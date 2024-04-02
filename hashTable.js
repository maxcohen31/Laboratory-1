/*
    Si scriva in JS una classe tabellaHash che implementa una tabella hash per memorizzare elementi numerici.

    La tabella hash è realizzata mediante un array di liste (chaining), 
    dove le singole liste sono realizzate mediante array.

    Si devono implementare:



    -costruttore, che prende due argomenti, che rappresentano la dimensione della tabella (il primo, numero > 0) e

    la funzione hash utilizzata per inserire gli elementi nella tabella (il secondo). 
    La funzione f è una funzione che prende come argomento un numero

    e restituisce un numero, e rappresenta la funzione hash utilizzata dalla tabella stessa.

    -metodo add(), che preso un numero n come argomento, 
    lo inserisce nella tabella in posizione f(n), gestendo gli eventuali conflitti mediante le liste.

    Il metodo restituisce il numero di elementi totali memorizzati in tabella dopo l'inserimento.

    -metodo remove(), che preso un numero come argomento, lo elimina dalla tabella, se esiste.

    Il metodo restituisce il numero di elementi totali memorizzati in tabella dopo la rimozione.

    -metodo search(), che preso un numero come argomento, cerca il numero in tabella. 
    In particolare, se l'elemento esiste in tabella, restituisce il primo indice a cui

    occorre l'elemento nella sua lista di appartenenza; altrimenti, -1.

    -metodo getTab() che non prende argomenti, e restituisce l'array di liste che rappresenta la tabella.

    -metodo addAll(), che preso un array di numeri come argomento, 
    li inserisce tutti nella tabella, uno per volta in ordine, nelle rispettive posizioni f(.),

    gestendo gli eventuali conflitti mediante le liste. 
    Il metodo restituisce il numero di elementi totali memorizzati in tabella dopo l'inserimento.



    ESEMPIO:



    let th = new tabellaHash(11, (n) => n%11);

    th.add(0) restituisce 1 e la tabella contiene: [ [ 0 ], [], [], [], [], [], [], [], [], [], [] ]

    th.add(11) restituisce 2 e la tabella contiene [ [ 0, 11 ], [], [], [], [], [], [], [], [], [], [] ]

    th.search(11) restituisce 1

    th.remove(111) restituisce 2

    th.remove(0) restituisce 1 e la tabella contiene [ [ 11 ], [], [], [], [], [], [], [], [], [], [] ]

    th.search(11) restituisce 0

*/

class tabellaHash
{
    dim;
    hashFunction

    constructor(dim, hashFunction)
    {
        this.dim = dim;
        this.hashFunction = hashFunction;
        this.countElements = 0;
        this.table = [];
        
        for (let i = 0; i < dim; i++)
        {
            this.table[i] = []; 
        }
    }

    add(n)
    {
        let position = this.hashFunction(n) % this.dim;
        this.table[position].push(n); 
        this.countElements++;
        return this.countElements;
    }

    remove(n)
    {
        
        let position = this.hashFunction(n) % this.dim;
        for (let i = 0; i < this.table.length; i++)
        {
            if (this.table[position][i] === n)
            {
                this.table[position].splice(i, 1)
                this.countElements--;
            }
        }

        return this.countElements;
    }

    search(n)
    {
        let index = this.hashFunction(n) % this.dim; 
        let list = this.table[index];
        return list.indexOf(n); 
    }

    getTab()
    {
        return this.table;
    }

    addAll(array)
    {
        for (let number of array)
        {
            this.add(number)
        }
        return this.countElements;
    }
    

}

let ht = new tabellaHash(11, (x) => (x%11))
let a = [5, 22, 85]
//console.log(ht)
console.log(ht.add(0))
console.log(ht.add(13))
console.log(ht)
console.log(ht.search(14))
console.log(ht.remove(13))
console.log(ht)
console.log(ht.add(25))
console.log(ht)
console.log(ht.remove(25))
console.log(ht.getTab())
console.log(ht.addAll(a))
console.log(ht.getTab())
