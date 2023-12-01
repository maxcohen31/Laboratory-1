/*
    Dato un array ritorna l'array flatted
*/

function flatten(arr)
{
    let result = [];

    if(arr.length === 0) { return []; }
   
    // Looping over array and searching for objects
    for(let i = 0; i < arr.length; i++)
    {
        // If arr[i] is an array concat it to result
        if(Array.isArray(arr[i]))
        {
            result = result.concat((flatten(arr[i])));
        }
        else
        {   
            // arr[i] is a number
            result.push(arr[i])
        }
    }
    return result; 
}

let x = [1, 2, [3, 4, [5, 6]]];
console.log(flatten(x));
