/*
    Definire una funzione filter_replace(f,g), che prende in input una funzione f ed un predicato g, 
    ovvero una funzione g che restituisce un valore booleano quando viene invocata. 
    filter_replace(f,g) deve restituire una funzione che, preso in input un array A, 
    prima filtra A creando un nuovo array B che contiene tutti i valori di A per cui g è vero, 
    poi applica la funzione f su ogni elemento di B, memorizza il risultato in un nuovo array C e restituisce C.



    ATTENZIONE: L'array A non dev'essere modificato; l'array C deve preservare l'ordine degli elementi in A; 
    non si possono usare le funzioni map e filter di libreria.



    Esempio:
    filter_replace(x=>x+1, x=>x%2==0)([1, 2, 3]) = [3]
*/

function filter_replace(f, g)
{
    let result = [];
    return function(arrA)
    {
        let arrB = [];
        for(let elem of arrA)
        {
            if(g(elem))
            {
                arrB.push(elem);
            }
        }
        for(let elem2 of arrB)
        {
            result.push(f(elem2));
        }
        return result;
    }
}

console.log(filter_replace(x=>x+1, x=>x%2==0)([1, 2, 3]))
