/*
    Si vuole realizzare una raccolta differenziata di valori TypeScript. 
    Si scriva una classe Discarica con le seguenti proprietà:

    una proprietà privata cestini, il cui valore è una mappa fra nomi di tipi 
    (espressi come stringa, come restituito dall'operatore typeof) e una sequenza di valori di quel tipo;
    un metodo pubblico butta(v) che, dato un qualunque valore v, 
    lo aggiunge in coda al cestino corrispondente al suo tipo;
    un metodo pubblico svuota(t) che, ricevuta una stringa t, 
    restituisce un array con tutti i valori di tipo t precedentemente buttati (in ordine cronologico), 
    e svuota il cestino del tipo t. Se t non è un nome di tipo valido, 
    il metodo deve lanciare un'eccezione di tipo WrongTypeError (che dovrete definire);
    un metodo pubblico quanti(t) che, ricevuta una string t, 
    restituisce il numero totale di valori di tipo t buttati (sia già svuotati che ancora nel cestino). 
    Se t non è un nome di tipo valido, 
    il metodo deve lanciare un'eccezione di tipo WrongTypeError (che dovrete definire);
    un metodo pubblico classi() che restituisce un Set contenente tutte le classi dei valori di tipo "object" 
    attualmente presenti nel cestino relativo.

    Si curi di annotare più precisamente possibile tutti i tipi.
*/

class WrongTypeError extends Error { ; }

class Discarica {
    private cestini: Map<string, Array<any>> = new Map();
    private quantità: Map<string, number> = new Map();

    butta<T>(v: T): void {
       if (!(this.cestini.has(typeof v))) {
           this.quantità.set(typeof v, 0);
           this.cestini.set(typeof v, []);
       } 

       this.cestini.get(typeof v)?.push(v);
       this.quantità.set(typeof v, this.quantità.get(typeof v)! + 1);
    }

    svuota<T>(t: string): T[] {
        if (!(this.cestini.has(t))) {
            throw new WrongTypeError("");
        }
        
        let vecchioCestino = this.cestini.get(t)!;
        this.cestini.set(typeof t, []);
        return vecchioCestino;

    }

    quanti(t: string): number {
        if (!this.cestini.has(t)) {
            throw new WrongTypeError("");
        }
        return this.quantità.get(t)!;
    }

    classi(): Set<any> {
        let result = new Set();
        for (let [type, values] of this.cestini.entries()) {
            if (typeof type === "object") {
                for (let i of values) {
                    if (typeof i === "object") {
                        result.add(i.constructor);
                    }

                }
            }
        }
        return result;
    }
            
}
