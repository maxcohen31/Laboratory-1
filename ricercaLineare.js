/*
    Ricerca lineare - funzione che cerca un elemento in un array e restituisce la sua posizione
*/


function linear_search(arr, target)
{
    let position = -1;
    
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] === target)
        {
            position = i;
        }
    }
    return position;

}


let x = [2, 3, 10, 6, 7, 1];
let c = []; 
console.log(linear_search(x, 1));
console.log(linear_search(c, 1));
