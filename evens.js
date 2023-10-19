/*
    Scrivere una funzione evens che, dato in input un array a (contenente numeri) e una funzione f, 
    conta quanti numeri pari ci sono prima dell’elemento per cui f restituisce un valore interpretabile come false
*/

function evens(arr, f)
{
    let counter = 0
    let i = 0

    while(i < arr.length && f(arr[i]))
    {
        if(arr[i] % 2 == 0)
        {
            counter += 1
        }
        i += 1
    }
    return counter
}




let a = [13,2,6,45,12,3,56,7]
console.log(evens(a, x => x%6))
console.log(evens(a, x => x%13))
console.log(evens(a, x => x%100))


