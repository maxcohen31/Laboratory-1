/*
    Piccoli esperimento con classi ed ereditarietà in JS
*/

// Classe madre
class Persona
{
    constructor(nome, età)
    {
        this.nome = nome;
        this.età = età;
    }

    compleanno()
    {
        this.età++;
    }
}

// Classe figlia
class Studente extends Persona
{
    laurea()
    {
        return "Evviva!";
    }
}

class StMagistrale extends Studente
{   
    constructor(nome, età, triennale)
    {
        super(nome, età);
        this.triennale = triennale;
    }

    laurea()
    {
        return super.laurea() + "Stra-evviva galattico!";
    }
}

let pippo = new Persona("Pippo", 22);
let asia = new Studente("Asia", 23);
let gosto = new StMagistrale("Gosto Shepard", 27, "Informatica");
let mario = new StMagistrale("Mario", 27, "Lettere");
console.log(pippo);
console.log(mario);
