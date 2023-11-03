/*

    Si definisca una funzione replace(arr, target, replacement)
    che dato un array arr ritorni un array dove tutte le instanze di 
    sono sostituite dall'elemento. 
    La funzione deve ritornare un nuovo array e
    non modificare quello passato come argomento
*/


function replace(arr, target, replacement)
{   
    if(arr.length === 0) { return []; }

    let newArr = [];

    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] === target)
        {
            arr[i] = replacement;
        }
    }
    return newArr;
}

