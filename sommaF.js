/*
    Si scriva una funzione 
    che prende come parametro una funzione 
    che preso un intero restituisce un valore numerico. 
    restituisce una funzione che prende come parametro un array di interi, e
    restituisce la somma dei valori restituiti da 
    su ogni elemento dell'array.
*/

function sommaF(f)
{
    return function(arr) 
    {
        let somma = 0;

        for(let i = 0; i < arr.length; i++)
        {
            somma += f(arr[i])
        }
        
        return somma;
    };

}

console.log(sommaF(x => 2*x)([1, 2, 3, 4]))

// sommaF(x=>x*x)([1,2,3,4]) restituisce 30


console.log(sommaF(Math.sqrt)([1,2,3,4])) // restituisce 6.146264369941973
