class SizeError extends Error { ; }

class Matrix<T> {
    public row: number;
    public col: number;
    private prodF: (a: T, b: T) => T
    private mat: T[][]

    constructor(row: number, col: number, prodF: (a: T, b: T) => T) {
        this.row = row;
        this.col = col;
        this.prodF = prodF;
        this.mat = [];
    }

    init(e: T): void { 
        for (let i = 0; i < this.row; i++) {
            this.mat.push([]);
            for (let j = 0; j < this.col; j++) {
                this.mat[i].push(e);
            }
        }
    }

    get_el(i: number, j: number): T {
        if (i > this.row || j > this.col) {
            throw new SizeError();
        } 
        return this.mat[i][j];
    }

    set_el(i: number, j: number, v: T): void {
        if (i > this.row || j > this.col) {
            throw new SizeError();
        } 
        this.mat[i][j] = v;
    }

    hadam_product(B: Matrix<T>): Matrix<T> {
        if (this.col != B.row) {
            throw new SizeError();
        }
        
        // Crea nuova matrice
        let newMatrix: Matrix<T> = new Matrix(this.row, this.col, this.prodF);
        // Inizializza la nuova matrice con gli elementi di this.mat
        newMatrix.init(this.mat[0][0]);
        
        // Cicliamo la nuova matrice ed eseguiamo il prodotto
        for (let i: number = 0; i < this.row; i++) {
            for (let j: number = 0; j < this.col; j++) {
                newMatrix.set_el(i, j, this.prodF(this.mat[i][j], B.get_el(i, j)))
            }
        }
        return newMatrix;
    }

}


let m1 = new Matrix<number>(2, 2, (a,b) => (a-b));
let m2 = new Matrix<number>(2, 2, (a,b) => (b-a));
m1.init(1);
m2.init(2);
console.log(m1)
console.log(m1.hadam_product(m2));
console.log(m2.hadam_product(m1));
