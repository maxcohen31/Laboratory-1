/*
    Getters and setters

    I metodi di accesso consentono di “simulare” la presenza di una proprietà in un oggetto; 
    però le letture o le scritture di quella proprietà causano l’esecuzione di un metodo, 
    anziché una lettura o scrittura nel dizionario dell’oggetto.
    Le parole chiave get e set, davanti al nome della proprietà, 
    creano i metodi di accesso. Dall’esterno, la proprietà appare come una normale chiave con valore.

        var o = { get x() {return 1}, set x(v) {;} }

            o.x → 1		o.x=5 → 5		o.x → 1

    Ogni lettura di proprietà causa l’invocazione del getter. 
    Ogni scrittura di proprietà causa l’invocazione del setter 
    (passando come argomento il valore assegnato).
    
*/

class Distanza
{
    static #MIGLIO = 1.60943; // Fattore di conversione
    #distance = 0; // In km

    get km() { return this.#distance; }
    set km(v) { this.#distance = v; }
    get miglia() { return this.#distance / Distanza.#MIGLIO; }
    set miglia(v) { this.#distance = v * Distanza.#MIGLIO; }

}

let dist = new Distanza();

console.log(dist.km);

dist.km = 15;
console.log(dist.km);
console.log(dist.miglia)

dist.miglia = 3;
console.log(dist.km)

dist.set(5); 
