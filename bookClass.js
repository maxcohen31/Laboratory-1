/*
    Si consideri un sistema di gestione degli scritti, 
    dove un generico scritto è rappresentabile mediante la classe Scritto, 
    i cui campi sono titolo (stringa), autore (stringa) e numPagine (numero). 
    Il sistema prevede la possibilità di definire tre tipi specifici di Scritto, ovvero Libro, Romanzo e Poema:

    La classe Libro rappresenta uno scritto avente un editore, indicato nel costruttore;
    La classe Romanzo rappresenta un libro con un dato protagonista, indicato nel costruttore;
    La classe Poema che rappresenta uno scritto, 
    offrendo un getter-setter poeta che corrisponde all'autore dello scritto in questione.


    Si implementino le classi JS Scritto, Libro, Romanzo e Poema, 
    organizzandole in modo da sfruttare al meglio l'ereditarietà. 
    Si implementi inoltre una funzione mattone che, dato 
    un array scritti contenente oggetti della classe Scritto, 
    restituisce il titolo del libro più lungo in termini di pagine. Si noti che:

    A parità di lunghezza, mattone restituisce il primo libro incontrato.
    Se non ci sono libri nell'array scritti, restituisce undefined.


    NB: Per semplicità, si assuma che un dato Scritto abbia un solo autore.
*/

class Scritto
{
    titolo = "";
    autore = "";
    numPagine = 0;

    constructor(titolo, autore, numPagine)
    {
        this.titolo = titolo;
        this.autore = autore;
        this.numPagine = numPagine;
    }
}

class Libro extends Scritto
{
    constructor(titolo, autore, numPagine, editore)
    {
        super(titolo, autore, numPagine)
        this.editore = editore;
    }

}

class Romanzo extends Libro
{
    constructor(titolo, autore, numPagine, protagonista)
    {
        super(titolo, autore, numPagine)
        this.protagonista = protagonista;
    }
}

class Poema extends Scritto
{
    constructor(titolo, autore, numPagine, editore)
    {
        super(titolo, autore, numPagine, editore)
    }

    get poeta()
    {
        return this.autore;
    }

    set poeta(p)
    {
        this.autore = p;
    }
}

function mattone(scritti)
{
    let books = scritti.filter((a) => (a instanceof Libro));

    if (books.length == 0) { return undefined; }
    
    [result, ...scrittiRimanenti] = books;
    
    for (let i = 0; i < scrittiRimanenti.length; i++)
    {
        if (result.numPagine < scrittiRimanenti[i].numPagine)
        {
            result = scrittiRimanenti[i];
        }
        else
        {
            return result.titolo;
        }
    }
    return result.numPagine >= 0 ? result.titolo : undefined

}
