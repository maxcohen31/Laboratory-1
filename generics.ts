/*
    Esempio d'uso dei generics in TypeScript.
    Implementazione di un ABR utilizzando i generics.
*/


class Nodo<T> {
    private val: T
    private bigger: (a: T, b: T) => boolean;
    private sx: Nodo<T> | undefined
    private dx: Nodo<T> | undefined

    constructor(val: T, bigger: (a: T, b: T) => boolean) {
        this.val = val;
        this.bigger = bigger;
        this.sx = undefined;
        this.dx = undefined;
    }

    add(val: T): void {
        // Controlla se il valore passato al metodo 'add' è più grande di val
        // Se non lo è, e il sottoalbero sinistro esiste lo aggiunge. 
        // Altrimenti, crea un nodo al sottoalbero sinistro.
        // Nel ramo else il controllo è eseguito sul sottoalbero destro.
        if (this.bigger(this.val, val)) {
            if (this.sx) {
                this.sx.add(val);
            } 
            else {
                this.sx = new Nodo(val, this.bigger);
            }
        } 
        else { 
            if (this.dx) {
                this.dx.add(val)
            } 
            else {
                this.dx = new Nodo(val, this.bigger);
            }
        }
    }   

    min() {
        if (!this.sx) {
            return this.val;
        }
        return this.sx.min();
    }

    max() {
        if (!this.dx) {
            return this.val;
        }
        return this.dx.max();
    }
}


// =======================================================


class ABR<T> {
    private root: Nodo<T>;

    constructor(val: T, bigger: (a: T, b: T) => boolean) {
        this.root = new Nodo(val, bigger);
    }

    add(val: T): void {
        this.root.add(val);
    }

    min_max(): [T, T] {
        return [ this.root.min(), this.root.max() ];
    }
}


let tree = new ABR<number>(11, (x: number, y: number) => (x > y))
tree.add(3);
tree.add(20);
tree.add(2);
tree.add(42);
console.log(tree.min_max())


