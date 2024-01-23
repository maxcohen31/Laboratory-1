/*
    Scrivere una funzione deframmenta(a), con a array di numeri. 
    La funzione restituisce una copia dell'array 
    da cui sono state eliminate le occorrenze dei numeri quando queste non sono 
    ripetute in sequenza (ovvero in posizioni contigue dell'array) almeno una volta. 

    Ad esempio dato l'array a = [1,1,2,3,3,3,2,2,4] la chiamata deframmenta(a)
    restituisce [1,1,3,3,3,2,2], dove gli elementi in posizione 2 e 4 sono stati eliminati 
    in quanto non ripetuti in sequenza. 



    Esempi:

    deframmenta([1,1,2,3,3,3,2,2,4]) -> [1,1,3,3,3,2,2] 

    deframmenta([0,0,0,0,0,1,0,1,1]) -> [0,0,0,0,0,1,1]

    deframmenta([1,0]) -> []
*/

function deframmenta(a)
{
    let result = [];
    for(let i = 0; i < a.length; i++)
    {
        if((a[i] == a[i-1]) || (a[i] == a[i+1]))
        {
            result.push(a[i]);
        }
    }
    return result;
    
}

console.log(deframmenta([1,1,2,3,3,3,2,2,4]))
console.log(deframmenta([1, 0]))
console.log(deframmenta([0,0,0,0,0,1,0,1,1]))
