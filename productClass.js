/*
    Si definisca la classe Prodotto per rappresentare prodotti di un supermercato. 
    La classe fornisce i campi barcode (stringa) e prezzo (numerico). La classe definisce inoltre

    un costruttore cui passare barcode e prezzo dell'oggetto rappresentato,
    un metodo codice() che restituisce il barcode dell'oggetto,
    un metodo netto() che restituisce il prezzo dell'oggetto, e
    un metodo lordo() che restituisce il prezzo lordo dell'oggetto, calcolato maggiorando il prezzo con IVA del 22%.
    Si definisca poi una classe ProdottoAlimentare che rappresenti prodotti alimentari, 
    ridefinendo il metodo lordo() in modo da maggiorare il prezzo con IVA del 10%.

    Infine, si definisca una funzione conto(a) che, dato un array a di prodotti, 
    restituisce un oggetto contenente tre campi:

    totale: prezzo totale dei prodotti acquistati;
    iva10: somma delle maggiorazioni per IVA al 10% su prodotti alimentari;
    iva22: somma delle maggiorazioni per IVA al 22% su prodotti non alimentari.

*/

class Prodotto {

    barcode = "";
    prezzo = 0;

    constructor(barcode, prezzo) {
        this.barcode = barcode;
        this.prezzo = prezzo;
    }

    codice() {
        return String(this.barcode);
    }

    netto() {
        return this.prezzo;
    }

    lordo() {
        return this.prezzo * 1.22;
    }
}

class ProdottoAlimentare extends Prodotto {
    constructor(barcode, prezzo) {
        super(barcode, prezzo);
    }

    lordo() {
        return this.netto() * 1.1;
    }
}

function conto(a) {
    
    let info = {"totale": 0, "iva10": 0, "iva22": 0};
    
    for (let p of a) {
        info.totale += p.netto();
        if (p instanceof ProdottoAlimentare) {
            info.iva10 += p.lordo() - p.netto();
        } else {
            info.iva22+= p.lordo() - p.netto();
        }
    }
    return info;
}

let banana = new ProdottoAlimentare("b4n4n4",2)
let mela = new ProdottoAlimentare("m3l4",1)
let sapone = new Prodotto("s4p0n3",2)
let c = [banana, mela, sapone];

console.log(banana.codice())
console.log(conto(c))
