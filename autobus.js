/*
    Si implementi una classe Autobus che estende la classe Veicolo.

    La classe Veicolo è composta da 3 attributi privati: 
    targa (stringa alfanumerica di 7 caratteri), colore (stringa) e n_ruote (intero > 0).

    Implementare l'eccezione VeicoloError che viene sollevata se i parametri passati al costruttore 
    non sono conformi con gli attributi richiesti.

    Fornire, per ogni attributo, i metodi di accesso in lettura e scrittura 
    (questi ultimi devono, di nuovo, gestire le necessarie eccezioni). 

    Infine, riscrivere il metodo toString() 
    per la classe Veicolo che restituisce la stringa che elenca (in ordine) 
    le caratteristiche del veicolo: targa, n_ruote, colore.

    La classe Autobus estende Veicolo con l'aggiunta dell'attributo privato n_porte (intero > 0) 
    e fissando l'attributo n_ruote=4.

    Fornire il metodo di accesso in lettura e scrittura per l'attributo privato  
    e gestire l'inserimento di un valore non conforme con l'attributo sollevando l'eccezione VeicoloError. 
    Sovrascrivere il metodo toString() di Veicolo aggiungendo l'informazione sul numero delle ruote.

*/

class VeicoloError extends Error { ; }


class Veicolo
{
    #targa = "";
    #colore = "";
    #n_ruote = 0;

    constructor(targa, colore, n_ruote)
    {
        if (this.#targa.length != 7 || typeof this.#targa != "string")
        {
            throw new VeicoloError("Wrong input for attribute targa");
        }
        
        this.#targa = targa;
            
        if (typeof this.#colore != "string")
        {
            throw new VeicoloError("Wrong input for colore");
        }

        this.#colore = colore;

        if (this.#n_ruote <= 0 || typeof this.#n_ruote != "number")
        {
            throw new VeicoloError("Wrong input for n_ruote");
        }

        this.#n_ruote = n_ruote;
    }
    
    get licensePlate()
    {
        return this.#targa;
    }

    get wheels()
    {
        return this.#n_ruote;
    }

    get color()
    {
        return this.#colore;
    }

    set targa(str)
    {
        if (typeof str != "string" || str.length != 7)
        {
            throw new VeicoloError("Wrong input");
        }
        this.#targa = str;
    }

    set n_ruote(n)
    {
        if (typeof n != "number" || n <= 0)
        {
            throw new VeicoloError("Wrong input");
        }
        this.#n_ruote = n;
    }

    set colore(c)
    {
        if (typeof c != "string")
        {
            throw new VeicoloError("Wrong input");
        }
        this.#colore = c;
    }

    toString()
    {
        return `${this.#n_ruote} ${this.#n_ruote} ${this.#colore}`; 
    }
}

class Autobus extends Veicolo
{
    #n_porte = 0;
    constructor(targa, colore, n_porte)
    {
        super(targa, colore, 4);
        if (this.#n_porte < 0  || typeof this.#n_porte != "number")
        {
            throw new VeicoloError("Wrong input for n_porte");
        }

        this.#n_porte = n_porte;
        
    }

    get n_porte()
    {
        return this.#n_porte;
    }

    set n_porte(n)
    {
        if (n <= 0 || typeof n != "number")
        {
            throw new VeicoloError("Wrong input for doors");
        }
        this.#n_porte = n;
    }

    toString()
    {
        return super.toString() + `${this.#n_porte}`; 
    }
}
