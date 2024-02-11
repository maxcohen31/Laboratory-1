/*
    Definire una funzione JS replace_filter_f(f,g), che prende in input una funzione f ed un predicato g, 
    ovvero una funzione g che restituisce un valore booleano quando viene invocata. 
    replace_filter_f(f,g) deve restituire una nuova funzione che, preso in input un array A, 
    prima applica la funzione f su ogni elemento di A e memorizza il risultato in un nuovo array B, 
    poi filtra B creando un nuovo array C che contiene tutti i valori di B per cui g è falso, 
    infine la funzione deve restituire C.



    ATTENZIONE: L'array A non dev'essere modificato; 
    l'array C deve preservare l'ordine degli elementi in A; 
    non si possono usare le funzioni map e filter di libreria.

    Esempio:

    replace_filter_f(x=>x+1, x=>x%2==0)([1, 2, 3]) = [3]

*/

function replace_filter_f(f,g)
{
    let arrB = [];
    let arrC = [];

    return function apply(arr)
    {
        for(let i = 0; i < arr.length; i++)
        {
            arrB.push(f(arr[i]));
        }
        for(let j = 0; j < arrB.length; j++)
        {   
            if(!g(arrB[j]))
                arrC.push((arrB[j]));
        }
        return arrC;
    }
}

console.log(replace_filter_f(x=>x+1, x=>x%2==0)([1, 2, 3])) // [3]
