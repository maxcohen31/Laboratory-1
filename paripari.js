/*
    Si scriva una funzione JavaScript paripari(A) che, 
    ricevuto un array di interi A, restituisca un nuovo array contenente il
    primo e l'ultimo degli elementi di A in posizione pari che sono pari, 
    nello stesso ordine in cui compaiono in A. Se c'è un
    solo elemento pari in posizione pari in A, esso sarà sia primo che ultimo. 
    Se non ce n'è nessuno, paripari(A) restituisce
    un array vuoto.

*/

function paripari(arr)
{
    let result = [];
    for(let i = 0; i < arr.length; i+=2)
    {
        if(arr[i] % 2 == 0)
        {
            result.push(arr[i])
        }
    }
    return [result[0], ...result.slice(result.length-1, result.length)];
}




let x = [1, 1, 2, 3, 4, 5, 8, 12, 3, 10, 3, 23, 46, 87];
console.log(paripari(x));
