/*
    Si realizzi un sistema per la gestione dei dati relativi ad una collezione di veicoli.

    Il sistema si compone delle seguenti classi:

    Classe Veicolo per registrare un generico veicolo, possiede gli attributi: modello (stringa) e targa (stringa);

    Classe Automobile per rappresentare un'automobile, possiede gli attributi: modello (stringa), targa (stringa);

    Classe Motoveicolo per rappresentare un generico veicolo a due ruote, 
    possiede gli attributi: modello (stringa), targa (stringa), e cilindrata (intero);

    Classe Motociclo per rappresentare un motoveicolo ad alta cilindrata, 
    possiede gli attributi: modello (stringa), targa (stringa), e cilindrata (intero);

    Classe Ciclomotore per rappresentare un motoveicolo a bassa cilindrata, 
    possiede gli attributi: modello (stringa), targa (stringa), e cilindrata (intero);


    Ogni classe deve presentare un costruttore e controllare le seguenti proprietà:



    L'attributo targa deve avere essattamente 7 caratteri per gli oggetti 
    Automobile ed esattamente 4 caratteri per gli oggetti Motoveicolo, Motociclo e Ciclomotore;
    L'attributo cilindrata deve essere maggiore di zero e minore o uguale di 50 per gli oggetti 
    Ciclomotore e deve essere maggiore di 50 per gli oggetti Motociclo;


    nel caso le condizioni non siano rispettate, 
    il costruttore lancia rispettivamente una eccezione ErroreTarga o ErroreCilindrata.



    Infine si scriva una funzione ricorsiva massimoCilindrata(veicoli) 
    che dato un array di oggetti di tipo Veicolo calcoli la cilindrata massima dei motoveicoli 
    a due ruote nell'array veicoli, nel caso in cui non siano presenti la funzione restituisce undefined.



    Nota: Si organizzino le classi/eccezioni in modo da sfruttare l'ereditarietà.



Esempio:

let c = new Ciclomotore("ciao", "r2d2", 40)
let m = new Motociclo("Desmosedici", "c3po", 1000)
let f = new Automobile("Ferrari Testarossa", "AA123BB")

massimoCilindrata([m, f, c]) -> 1000

*/

class ErroreVeicolo extends Error { ; }
class ErroreTarga extends ErroreVeicolo { ; }
class ErroreCilindrata extends ErroreVeicolo { ; }


class Veicolo
{
    modello;
    targa;
    constructor(modello, targa)
    {
        this.modello = modello;
        this.targa = targa;
    }
}

class Automobile extends Veicolo
{
    constructor(modello, targa)
    {
        super(modello, targa)
        if (this.targa.length != 7)
        {
            throw new ErroreTarga("Targa necessita 7 caratteri")
        }
    }
}

class Motoveicolo extends Veicolo
{
    constructor(modello, targa, cilindrata)
    {
        super(modello, targa)
        this.cilindrata = cilindrata;
        if (this.targa.length != 4)
        {
            throw new ErroreTarga("Targa deve essere di 4 caratteri!")
        }
    }
}

class Motociclo extends Motoveicolo
{
    constructor(modello, targa, cilindrata)
    {
        super(modello, targa, cilindrata);
        if (this.cilindrata < 50)
        {
            throw new ErroreCilindrata("Cilindrata troppo bassa!");
        }
    }
}

class Ciclomotore extends Motoveicolo
{ 
    constructor(modello, targa, cilindrata)
    {
        super(modello, targa, cilindrata);
        if (this.cilindrata > 50 || this.cilindrata < 0)
        {
            throw new ErroreCilindrata("Cilindrata assente o troppo alta!");
        }
    }
}

function massimoCilindrata(veicoli)
{
    if (veicoli.length == 0)
    {
        return undefined;
    }

    let [h, ...tail] = veicoli;
    let tailMax = massimoCilindrata(tail);
    if (h instanceof Motoveicolo)
    {
        if (tailMax == undefined)
        {
            return h.cilindrata;
        }
        else
        {
            if(tailMax > h.cilindrata)
            {
                return tailMax;
            }
            else
            {
                return h.cilindrata;
            }
        }
    }
    return tailMax;


}

let c = new Ciclomotore("ciao", "r2d2", 40)
let m = new Motociclo("Desmosedici", "c3po", 1000)
let f = new Automobile("Ferrari Testarossa", "AA123BB")

console.log(massimoCilindrata([m, f, c]));


