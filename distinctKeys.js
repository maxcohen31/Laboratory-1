/*
    Si consideri un array S di n chiavi distinte.
    Si dia il codice di un algoritmo che con un'unica scansione lineare
    di S conti il numero di r chiavi distinte in S. Usare un dizionario D inizialmente vuoto.
*/


function distinctKeys(arr)
{
    let dict = new Set;
    for (let i = 0; i < arr.length; i++)
    {
        if(!dict.has(arr[i]))
        {
            dict.add(arr[i]);
        }
    }
    return dict;
}

let a = [66, 22, 2, 4, 5, 76, 33, 22, 11, 11, 4, 24]
console.log(distinctKeys(a))
