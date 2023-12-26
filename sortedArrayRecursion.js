/*
    Scrivere una funzione isSorted2(a), con a un array di numeri. 
    La funzione restituisce true se l'array è ordinato in senso strettamente crescente, e false altrimenti. 
    Nello svolgimento dell’esercizio, non potete usare cicli (comandi for, while, do/while)
*/


function isSorted2(arr)
{
    // Base case
    if(arr.length === 0 || arr.length === 1)
    {
        return true;
    }
    
    // Check if the i+1 element is smaller than the previous one
    if(arr[0] >= arr[1])
    {
        return false;
    }
    return isSorted2(arr.slice(1));

}
console.log(isSorted2([-21,-2,0,4,6,210]));
console.log(isSorted2([2,6,8,8,9,21]));
console.log(isSorted2([2,6,8,9,10,-42]));
