/*
    Scrivere una funzione trovaOccorenze(a, x), 
    con a un array di numeri e x un numero, 
    che restituisce le posizioni di tutte le occorrenze di x in a.
*/

function trovaOccorrenze(a, x)
{
    let result = [];
    for(let i = 0; i < a.length; i++)
    {
        if(x == a[i])
        {
            result.push(i);
        }
    }
    if(result.length == 0)
    {
        return -1;
    }
    return result;
}

let arr = [1, 2, 5, 6, 6, 5];
console.log(trovaOccorrenze(arr, 6));
