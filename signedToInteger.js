/*
    Si scriva una funzione signed_to_integer(arr) 
    che dato un array arr contenente un intero codificato tramite complemento a 2 
    restituisca il corrispondente valore intero in base 10.



    La funzione ritorna undefined se l'array contiene un numero di bit inferiore a due.
*/


function signed_to_integer(arr)
{
    if(arr.length < 2)
    {
        return undefined;
    }

    let result = 0;
    let pow = 0;

    for(let i = arr.length - 1; i > 0; i--)
    {
        result += (arr[i] * 2**pow);
        pow += 1 
    }
    
    if(arr[0] === 0)
    {
        return result;
    }
    result += (-1 * 2**pow);
    return result;
    

}


let x = [0, 0, 1, 0, 1, 0]; // 10
let y = [1, 0, 1, 0, 1, 0]; // -22

console.log(signed_to_integer(x))
console.log(signed_to_integer(y))
