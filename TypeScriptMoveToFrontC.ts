/*
    Scrivere una classe TypeScript MoveToFrontC, che gestisce valori di qualsiasi tipo. 
    In particolare, la classe ha come proprietà:

    -un array a che rappresenta una lista di valori di un dato tipo;

    -una funzione f che confronta due valori di quel tipo e restituisce un valore booleano.



    La classe ha un costruttore che inizializza le due proprietà con i valori passati come argomento, 
    nell'ordine l'array e la funzione. 
    Inoltre, la classe implementa un metodo move(k), dove k è un valore dello stesso tipo dei valori in a.

    move cerca la prima occorrenza di k nella lista che soddisfa f. 
    Se k si trova nella lista, restituisce la sua posizione nella lista (contando da 0) 
    e porta l’elemento di a che contiene k in testa alla lista, altrimenti restituisce -1.



    Nota: Si assuma che la testa della lista sia l'elemento 0 di a, mentre la coda l'ultimo. 
    Come sempre, si curi di definire i tipi nella maniera più precisa possibile.   

*/

class MoveToFrontC<T>
{
    public a: T[];
    public f: (a: T, b: T) => boolean;

    constructor(a: T[], f: (a: T, b: T) => boolean)
    {
        this.a = a;
        this.f = f;
    }

    move(k: T): number
    {
        let result: number = -1; 

        for (let i = 0; i < this.a.length; i++)
        {
            if (this.f(k, this.a[i]))
            {
                result = this.a.indexOf(this.a[i]);
                let element = this.a.splice(i, 1)[0];
                this.a.unshift(element)
                return result;
            }
        }
        return result;
    }
}
