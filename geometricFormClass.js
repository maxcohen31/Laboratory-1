// ESERCIZIO 1
// Scrivere una classe FormaGeometrica che offra i metodi area e perimetro, entrambi fatti in modo da restituire undefined quando invocati. Specializzare la classe FormaGeometrica, estendendola in modo da rappresentare:
// 1) Triangolo, in termini di base e altezza
// 2) Rettangolo, in termini di base e altezza
// 3) Quadrato, in termini di lato
// 4) Cerchio, in termini di raggio
// Per i punti 1-4, ridefinire opportunamente i metodi area e perimetro.
    


// Aggiornare la classe FormaGeometrica aggiungendo i metodi statici:
// - media(F): dato un array F di forme geometriche, restituisce un oggetto contenente due campi, uno per la media dei perimetri e uno per la media delle aree
// - ordina(F): ordina un array F di forme geometriche dalla più grande alla più piccola



class FormaGeometrica
{
    constructor() { ; }


    static medie(forme)
    {   
        let somma_perimetri = 0;
        let somma_aree = 0;

        for(let f of forme)
        {
            somma_aree += f.area();
            somma_perimetri += f.perimetro(); 
        }
        
        return [(somma_aree / forme.length), (somma_perimetri / forme.length)];
        
    }

    static ordina(forme)
    {
        return forme.sort((a, b) => (b.area() - a.area())); 
    }

    // Perimetro
    perimetro()
    {
        return undefined;
    }
    // Area
    area()
    {
        return undefined;
    }
}

class Triangolo extends FormaGeometrica
{
    constructor(base, altezza)
    {
        super();
        this.base = base;
        this.altezza = altezza;
    }

    perimetro()
    {
        return 1; 
    }

    area()
    {
        return (this.base * this.altezza) / 2;
    }

}

class Rettangolo extends FormaGeometrica
{
    constructor(base, altezza)
    {
        super();
        this.base = base;
        this.altezza = altezza;

    }

    perimetro()
    {
        return (2 * this.base) + (2 * this.altezza);
    }

    area()
    {
        return this.base * this.altezza;
    }
}

class Quadrato extends Rettangolo
{
    constructor(lato)
    {
        super(lato, lato);
    }
}

class Cerchio extends FormaGeometrica
{
    constructor(raggio)
    {
        super();
        this.raggio = raggio;
    }

    perimetro()
    {
        return 2 * Math.PI * this.raggio;
    }

    area()
    {
        return Math.PI * (this.raggio)**2;
    }
}


let q = new Quadrato(5);
let r1 = new Rettangolo(5, 3);
let r2 = new Rettangolo(6, 3);
let c = new Cerchio(5);
let t = new Triangolo(4, 2);

let mie_forme = [q, r1, r2, c, t];

console.log(FormaGeometrica.medie(mie_forme))
console.log(FormaGeometrica.ordina(mie_forme))
