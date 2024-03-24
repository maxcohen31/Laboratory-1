class ErroreVeicolo extends Error {;}

class Veicolo
{
    targa = "";
    modello = "";
    constructor(targa, modello)
    {
        this.targa = targa;
        this.modello = modello;
    }

    toString()
    {
        return this.targa + this.modello;
    }

    controllaVeicolo()
    {
        if (this.targa.length != 4 && this.targa.length != 7) 
        {
            throw new ErroreVeicolo();
        }
    }
}

class Automobile extends Veicolo
{
    numero_massimo_passeggeri = 0;

    constructor(targa, modello, numero_massimo_passeggeri)
    {
        super(targa, modello)
        this.numero_massimo_passeggeri = numero_massimo_passeggeri;
    }

    toString()
    {
        return toString() + this.numero_massimo_passeggeri;
    }

    controllaVeicolo()
    {
        if (this.targa.length != 7) { throw new ErroreVeicolo(); }
    }
}

class Motociclo extends Veicolo
{
    cilindrata = 0;
    constructor(targa, modello, cilindrata)
    {
        super(targa,modello)
        this.cilindrata = cilindrata;
    }

    toString()
    {
        return toString() + this.cilindrata;
    }
}

class Ciclomotore extends Motociclo
{
    constructor(targa, modello, cilindrata)
    {
        super(targa,modello, cilindrata)
    }

    controllaVeicolo()
    {
        if (this.cilindrata >= 125) { throw new ErroreVeicolo(); }
    }
}


function controllaVeicoli(veicoli)
{
    if (veicoli.length === 0) { return false; }
    
    for (let v of veicoli) 
    {
        try
        {
            v.controllaVeicoli();  
        }
        catch(error)
        {
            if (error instanceof ErroreVeicolo) { return false; }
        }
    }
    return true;

}


let tir = new Veicolo("mercedes", "0000000");
let ferrari = new Automobile("ferrari", "0000000", 2);
let ducati = new Motociclo("ducati", "0000",250);
let lambo = new Automobile("lamborghini", "0000000", 2);
let ciao = new Ciclomotore("ciao", "0000", 50);


let v0 = [tir, ferrari, ducati, lambo, ciao];
console.log(controllaVeicoli(v0))
