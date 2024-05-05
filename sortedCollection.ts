/*
    Si definisca una classe CollezioneOrdinata<T> che implementa una collezione di elementi ordinati. 
    La classe deve offrire i seguenti metodi:
    costruttore, che accetta una funzione comparatore che, dati due elementi di tipo T, 
    restituisce true se il primo elemento è maggiore del secondo (e false altrimenti). 
    Il comparatore è opzionale, e se non viene passato viene adottato l’operatore standard di comparazione (>)
    
    add(element) che inserisce un elemento nella collezione
    
    find(element) che restituisce la posizione di un dato elemento se esiste, altrimenti solleva un’eccezione
    
    get(index) che restituisce l’elemento in posizione index
    
    size() che restituisce il numero di elementi della collezione.
    
    Per find e add, 
    usare un metodo privato binarySearch(element) che ritorna la posizione dell’elemento 
    (se presente) o quella in cui dovrebbe essere inserito.

*/

class ElementNotFoundError  extends Error { ; }

class CollezioneOrdinata<T> {
    private comparatore: (a: T, b: T) => boolean
    private elements: T[]

    constructor(comparatore?: (a: T, b: T) => boolean) {
        if (comparatore == undefined) {
           this.comparatore = (a: T, b: T) => (a > b); 
        } else {
           this.comparatore = comparatore;
        }
        this.elements = [];
    }

    private binarySearch(arr: T[], l: number, r: number, element: T): number {
        if (l <= r) {
            let mid: number = Math.floor((l + r) / 2);
            
            if (arr[mid] === element) {
                return mid;
            }

            if (this.comparatore(arr[mid], element)) {
                return this.binarySearch(arr, l, mid - 1, element);
            }

            else {
                return this.binarySearch(arr, mid + 1, r, element);
            }
        }
        return -1

    }

    add (element: T): void {
        if (this.size() === 0) {
            this.elements.push(element);
        } else {
            let idx = this.binarySearch(this.elements, 0, this.size(), element);
            this.elements.splice(idx, 0, element);
        }

    }

    find(element: T) {
        let idx = this.binarySearch(this.elements, 0, this.size(), element);
        if (this.elements[idx] != element) {
            throw new ElementNotFoundError()
        }
        return idx;
    }

    size () {
        return this.elements.length;
    }

    get (index: number) {
        if (index < 0 || index > this.size()) {
            throw new ElementNotFoundError();
        }
        return this.elements[index];
    } 
}



let sc: CollezioneOrdinata<number> = new CollezioneOrdinata<number>((x, y) => (x < y))//((x: string, y: string) => (x.length > y.length));
//sc.add("matemagica");
//sc.add("prova");
//sc.add("algebra");
sc.add(5);
sc.add(10);
sc.add(2);
console.log(sc)

