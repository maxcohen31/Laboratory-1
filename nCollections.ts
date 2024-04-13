/*
    Si realizzi l’interfaccia NCollection per collezioni di numeri che offrano un campo numbers 
    (dove memorizzano i numeri) ed i metodi put (per l’inserimento di un numero), 
    pick (per l’estrazione di un numero) e size (che restituisce la dimensione della collezione)
    Si implementi l’interfaccia NCollection mediante due classi NStack e NQueue, 
    che realizzano rispettivamente una pila LIFO e una coda FIFO.

*/

interface NCollection {
    numbers: number[],
    put(n: number): void,
    pick(): number,
    size(): number
}

class CollectionError extends Error { ; }


class NStack implements NCollection {
    numbers: number[]
    constructor() {
        this.numbers = [];
    }

    put(n: number): void {
        this.numbers.push(n);
    }

    pick(): number {
        if (this.numbers.length > 0) {
            return this.numbers.pop()!; // Va bene mettere ! perchè sappiamo cosa stiamo facendo
        }
        throw new CollectionError("Stack is empty!")
    }

    size(): number {
        return this.numbers.length;
    }
}

// ==============================================================

class NQueue implements NCollection {
    numbers: number[];
    constructor() {
        this.numbers = [];
    }

    put(n: number): void {
        this.numbers.push(n);                                                         
    }

    pick(): number {
        if (this.numbers.length > 0) {
            return this.numbers.shift()!;   
        }
        throw new CollectionError("Queue is empty!");
    }
    
    size(): number {
        return this.numbers.length;
    }

}
