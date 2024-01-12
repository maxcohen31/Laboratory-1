/*
    Si scriva una funzione fattori(n) che, dato come argomento un intero positivo n, 
    restituisca un array contenente tutte le coppie di divisori di n, 
    incluse le coppie (1,n) e (n,1), in ordine di primo elemento crescente. 
    Ciascuna coppia è a sua volta rappresentata come un array.

    Esempi

    fattori(359) → [ [1,359], [359, 1] ]

    fattori(10) → [ [1,10], [2,5], [5,2], [10,1] ]

    fattori(12) → [ [1, 12], [2, 6], [3, 4], [4, 3], [6, 2], [12,1] ]
*/


function fattori(n)
{
    let result = [[1, n], [n, 1]];
    let i = 2;

    while(i < n)
    {
        if(n % i == 0)
        {
            result.push([i, n/i]);
        }
        i++;
    }
    return result;

}

console.log(fattori(34));
