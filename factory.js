/*
    Vogliamo modellare una azienda manifatturiera. 
    L'azienda costruisce tante fabbriche, ciascuna delle quali produce un solo tipo di prodotto 
    (per esempio: un certo modello di automobile); 
    è possibile in fase di produzione di uno specifico prodotto indicare certe caratteristiche desiderate 
    (per esempio: il colore di una particolare automobile, come ordinato dal cliente).

    Si scriva una classe JavaScript Fabbrica con i seguenti metodi:

    un costruttore con un argomento, prodotto, 
    che stabilisce le caratteristiche degli oggetti prodotti dalla fabbrica 
    (tramite il metodo produci() descritto sotto).

    una proprietà nProdotti il cui valore è il numero totale di oggetti prodotti dalla fabbrica, 
    dal momento della sua costruzione
    una proprietà nFabbriche il cui valore è il numero totale di fabbriche costruite
    un metodo produci(opzioni) che produce (e restituisce) un nuovo prodotto; 
    l'argomento opzioni è opzionale. 
    Questo metodo deve restituire al chiamante un nuovo oggetto che è il prodotto richiesto; 
    quest'ultimo sarà un oggetto con tutte le proprietà contenute nell'argomento "prodotto" passato al costruttore, 
    ed eventualmente con aggiunte le proprietà contenute nell'argomento "opzioni" passato a questo metodo. 
    Le opzioni non possono cambiare il tipo di prodotto: 
    se "opzioni" contiene una proprietà che era già presente in "prodotto", 
    con un valore diverso da quello presente in "prodotto", 
    allora il metodo produci() deve lanciare un'eccezione di tipo IllegalOptionsError 
    che dovete definire nel vostro codice.   

*/

class IllegalOptionsError extends Error { ; }

class Fabbrica
{
    static #nFabbriche = 0;
    #nProdotti = 0;
    #prodotto = {}

    constructor(prodotto)
    {
        this.#prodotto = prodotto;
        Fabbrica.#nFabbriche++;
    }

    get nFabbriche() 
    { 
        return Fabbrica.#nFabbriche;
    }

    get nProdotti() 
    { 
        return this.#nProdotti;
    }

    produci(opzioni={})
    {
        let result = {...this.#prodotto, ...opzioni};
        for (let opzione in opzioni)
        {
            if (opzione in this.#prodotto && opzione != this.#prodotto[opzione]) 
            {
                throw new IllegalOptionsError();
            }
        }
        this.#nProdotti++;
        return result;
    }
}


let x = {"c": 2, "a": 1}
let f1 = new Fabbrica({"modello": 18})
console.log(Fabbrica.nFabbriche)
