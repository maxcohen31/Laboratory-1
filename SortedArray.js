/*
    Scrivere una funzione che restituisca true se l'array passato come parametro
    è ordinato in senso strettamente crescente, e false altrimenti.
*/

function isSorted(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i+1] <= arr[i])
        {
            return false
        }
    }
    return true;
}
