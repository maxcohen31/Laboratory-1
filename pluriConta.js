/*
    Si scriva una classe JavaScript PluriConta che implementa una sorta di contatore protetto 
    (non deve essere accessibile dall'esterno), con le seguenti caratteristiche: 
    (*) il costruttore prende un argomento numerico k e inizializza il contatore a k, 
    (*) un metodo give(n) somma n al contatore, 
    (*) un metodo take(n) sottrae n al contatore, 
    (*) un getter value restituisce il valore corrente del contatore. 
    Inoltre, ogni oggetto PluriConta deve implementare due ulteriori getter: 
    (*) grandtotal restituisce la somma del valore del contatore di tutte le istanze di PluriConta create, 
    (*) numops restituisce una tripla [c,g,t] in cui c è il numero totale di istanze create, 
    g è il numero totale di chiamate al metodo give e t è il numero totale di chiamate al metodo take, 
    sempre contate su tutte le istanze create.
*/


class Pluriconta
{
    #k 
    static totalK = 0;
    static classCounter = 0;
    static takeCounter = 0;
    static giveCounter = 0;

    constructor(k)
    {
        this.#k = k;
        Pluriconta.totalK = k;
        Pluriconta.classCounter++;
    }

    give(n)
    {
        this.#k += n;
        Pluriconta.totalK += n;
        Pluriconta.giveCounter++;
    }

    take(n)
    {
        this.#k -= n;
        Pluriconta.totalK -= n;
        Pluriconta.takeCounter++;
    }

    get value()
    {
        return this.#k;
    }

    get grandtotal()
    {
        return Pluriconta.totalK;
    }

    numops()
    {
        return [Pluriconta.classCounter, Pluriconta.giveCounter, Pluriconta.takeCounter];
    }

}

let p1 = new Pluriconta(100);
p1.give(200);
p1.take(70);
p1.give(100);
p1.give(100);
p1.take(10);
console.log(p1.grandtotal)
console.log(p1.numops())
