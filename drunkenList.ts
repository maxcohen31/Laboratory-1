class Nodo<T> {
    value: T;
    next: Nodo<T> | undefined;
    prec: Nodo<T> | undefined;

    constructor(value: T){
        this.value = value;
        this.next = undefined;
        this.prec = undefined;
    }
}

class DrunkenList<T> {
    length: number;
    head: Nodo<T>|undefined;
    tail: Nodo<T>|undefined;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    insertHead(obj: T): void {
        let nuovoNodo = new Nodo(obj);
        // Lista vuota
        if (!this.head) {
            this.head = nuovoNodo;
            this.tail = nuovoNodo;
        } else {
            // Il puntatore di head punta al nuovo nodo
            this.head.prec = nuovoNodo;
        }
        // La nuova head diventa il nuovo nodo
        this.head = nuovoNodo;
        this.length++;
    }

    removeHead(): T {
        if (!this.head) {
            throw new ReferenceError();
        }

        this.head = this.head.next;

        if (this.head) {
            this.head.prec = undefined;
        }
        this.length--;
        return this.head?.value;
    }

    insertTail(obj: T): void {
        let nuovoNodo = new Nodo(obj);
        if (!this.head) {
            this.head = nuovoNodo;
            this.tail = nuovoNodo;
        } else {
            let current = this.head;
            // Scooriamo la lista fino all'ultimo nodo
            while (current.next) {
                // Currnt diventa l'ultimo nodo
                current = current.next;
            }
            // Il puntatore precedente di current punta al vecchio nodo
            nuovoNodo.prec = current;
            current.next = nuovoNodo;
        }
        this.tail = nuovoNodo;
        this.length++;
    }

    removeTail(): T {
        if (!this.head) {
            throw new ReferenceError();
        }

        if (this.head == undefined) {
            this.head = undefined;
            this.tail = undefined;
        } else {
            let current = this.head;
            // Scorre la lista fino all'ultimo nodo
            while (current.next) {
                current = current.next;
            }
            // Rimuove il puntatore all'ultimo nodo
            current.prec.next = undefined;
        }
        this.length--;
        return this.head.value;
    }

    push(n: T): void {
        this.insertHead(n);
        if (this.length % 2 == 1) {
            this.insertTail(n);
        }
    }

    pop(): T {
        if (this.length % 2 == 0) {
            return this.removeTail();
        } else {
            return this.removeHead();
        }
    }

    as_array(): T[] {
        let result: T[] = [];
        let nodo = this.head;
        while (nodo != undefined) {
            result.push(nodo?.value);
            nodo = nodo.next;
        }
        return result;
    }
    
}


let l1: DrunkenList<number> = new DrunkenList();
l1.insertHead(1)
l1.insertTail(2)
l1.insertTail(3)
l1.insertTail(5)
console.log(l1.pop())
//console.log(l1.as_array());
