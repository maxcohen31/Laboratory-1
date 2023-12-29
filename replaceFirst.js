/*
    Si definisca una funzione replace_first(arr, target, replacement, max_rep)
    che dato un array arr
    ritorni un array in cui le prime max_rep
    occorrenze di target sono sostituite dall'elemento replacement.
    Se max_rep = -1 la funzione sostituisce tutte le occorrenze.

    La funzione deve ritornare un nuovo array e non modificare quello passato come argomento.
*/



function replace_first(arr, target, replacement, max_rep)
{
    let result = [];
    let i = 0;

    if(max_rep == -1)
    {
        for(let j = 0; j < arr.length; j++)
        {
            if(arr[j] == target)
            {
                result.push(replacement)
            }
            else
            {
                result.push(arr[j])
            }
        }
    }



    for(let j = 0; j < arr.length; j++)
    {
        if(arr[j] == target)
        {
            if(i < max_rep)
            {
                result.push(replacement);
                i++;
            }
            else
            {
                result.push(arr[j])
            }
        }
        else
        {
            result.push(arr[j])
        }
    } 
    return result
}

console.log(replace_first([1, 2, 1, 4], 1, 2, 1));
console.log(replace_first([9, 2, 3, 4, 7, 7, 1], 7, 2, -1));
console.log(replace_first([9, 2, 3, 4], 2, 1, 1));
