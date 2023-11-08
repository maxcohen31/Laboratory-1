/*
    Dato un array arr 
    di elementi, ed una finestra di dimensione window_size,
    l'operatore di somma convoluzionale restituisce un array di 
    elementi il cui 
    i-esimo elemento assume valore
*/



function convoluzione(arr, window_size)
{
    let result = [];

    for(let i = 0; i < arr.length; i++)
    {
        let sum = 0;
        for(j = Math.max(0, i - window_size); j <= Math.min(arr.length - 1, i + window_size); j++)
        {
            sum += arr[j];
        }
        result.push(sum);
    }
    return result;
}

console.log(convoluzione([1, 2, 3, 4], 1));
