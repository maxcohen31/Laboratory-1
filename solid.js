/*
    Si definisca una classe Solido che rappresenti un generico solido. 
    A partire da Solido, si costruisca una gerarchia di classi che contenga le classi Parallelepipedo, 
    Cubo e Sfera, in modo da consentire la rappresentazione dei solidi corrispondenti.

    La classi Parallelepipedo, Cubo e Sfera dovranno fornire:
    un costruttore, che presi i dati necessari alla rappresentazione del solido, 
    generi un’istanza della classe che rappresenti il solido;

    un metodo superficie, che restituisca la superficie totale del solido rappresentato;
    un metodo volume, che restituisca il volume totale del solido rappresentato.

*/

class Solido
{
    constructor() { ; };
    
    superficie() { return undefined; }

    volume() { return undefined; }

}

class Parallelepipedo extends Solido
{
    constructor(base, altezza, profondità)
    {
        super();
        this.base = base;
        this.altezza = altezza;
        this.profondità = profondità;
    }

    superficie()
    {
        return 2 * (this.base + this.profondità) * (this.altezza + (2 * (this.base * this.profondità)));
    }

    volume()
    {
        return this.base * this.altezza * this.profondità;
    }
}

class Cubo extends Parallelepipedo
{
    constructor(lato)
    {
        super(lato, lato, lato) 
    } 
}

class Sfera extends Solido
{
    constructor(raggio)
    {
        super();
        this.raggio = raggio;
    }

    superficie()
    {
        return 12.56 * this.raggio**2;
    }

    volume()
    {
        return (4/3) * this.raggio * Math.PI**3; 
    }
}

function sommaSuperficiParallelepipedi(arr)
{
    let result = 0;
    for (let shape of arr)
    {
        if (shape instanceof Parallelepipedo)
        {
            result += shape.superficie();
        }
    }
    return result;
}

let cub = new Cubo(3)
let par = new Parallelepipedo(3,4,5)
let sfe = new Sfera(4)

let shapes = [cub, par, sfe];

console.log(sommaSuperficiParallelepipedi(shapes))

