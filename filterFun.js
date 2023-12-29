/*
    Si scriva una funzione filter(f, a) dove f è una funzione che prende come argomento
    un intero e restituisce un booleano, e a è un array di interi. filter(f, a)
    restituisce l'array in cui sono presenti solo i valori per cui f
    restituisce true, nell'ordine in cui compaiono in a.
*/

function filter(f, a)
{
    return a.filter(f).map(x => x);
}

console.log(filter(x => x>0, [10,4,-90,21,-1]))
console.log(filter(x => x<0, [10,4,-90,21,-1]))

