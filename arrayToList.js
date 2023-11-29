/*
    Dato un array di interi ritorna una lista fatta come segue
    
    let list = {
        value: 1,
        rest: {
            value: 2,
            rest: {
                value: 3,
                rest: null
                }
            }
        }

*/


function arrayToList(arr)
{

    let result = null; 

    // for loop sull'array e assegnamo a result il risultato
    for(let i = 0; i < arr.length; i++)
    {
        result = {value: arr[i], rest: result};
    }
    return result;
}






let a = [1, 2, 3];
console.log(arrayToList(a));    
