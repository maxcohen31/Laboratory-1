// ESERCIZIO 4 
// Scrivere una classe Grid che permette di rappresentare una griglia con n righe e m colonne, dove n e m sono forniti nel costruttore. La classe deve inoltre fornire i seguenti metodi:
// - isEmpty(i,j): restituisce true se la cella in posizione i,j è libera, false altrimenti; 
// - set(i,j,x): setta il valore della cella in posizione i,j a x
// - get(i,j): restituisce il valore della cella in posizione i,j, se c’è, altrimenti restuisce undefined.
// - clear(): azzera il valore memorizzato in ogni cella della griglia, mettendolo ad undefined.
// Specializzare la classe Grid in una classe SquareGrid, per griglie con n righe e n colonne, dove n è fornito nel costruttore.
    


class Grid
{
    constructor(n, m)
    {
        this.righe = n;
        this.colonne = m;

        // Inizializza una matrice n * m
        let grid = new Array(this.righe);
        for(let i = 0; i < this.righe; i++)
        {
            grid[i] = new Array(this.colonne);
        }
    }

    isEmpty(i, j)
    {
        if(this.righe <= i || this.colonne <= j)
        {
            return undefined;
        }
        return this.grid[i][j] === undefined;
    }

    set(i,j, x)
    {
        if(!this.isEmpty(i, j))
        {
            this.grid[i][j] = x;
        }
    }

    get(i, j)
    {
        if(!this.isEmpty(i, j))
        {
            return this.grid[i][j];
        }
    }

    clear()
    {
        for(let i = 0; i < this.righe; i++)
        {
            this.grid[i] = new Array;
            for(let j = 0; j < this.colonne; j++)
            {
                this.grid[i][j] = undefined;
            }
        }
    }
}

class SquareGrid extends Grid
{
    constructor(n)
    {
        super(n, n);
    }
}


let g = new Grid(3, 4)
console.log(g)
