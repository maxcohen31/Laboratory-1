/*
    Si definisca una funzione clip(arr, threshold, replacement) che dato un array arr
    ed una soglia threshold ritorni un array dove ogni elemento superiore alla soglia 
    è sotituito dal valore replacement. Se l'argomento replacement è settato a undefined
    il valore è sostituito dalla soglia stessa.
*/


function clip(arr, threshold, replacement)
{
    let result = [];
    
    // Making a copy of arr
    for(let i of arr)
    {
        result.push(i);
    }

    for(let i = 0; i < result.length; i++)
    {
        if(replacement != undefined && result[i] > threshold)
        {
            result[i] = replacement
        }
        if(replacement == undefined && result[i] > threshold)
        {
            result[i] = threshold;
        }
    }
    return result;
}

let x = [-1, 0, 0.4, 33];
console.log(clip(x, 10, 5));
