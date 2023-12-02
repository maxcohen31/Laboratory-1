/*
    Si scriva un algoritmo che dato un array composto da 0 e 1 ordina gli elementi
    in tempo lineare sia al caso pessimo che al caso ottimo. Non creare array di appoggio.
*/




function linearSort(arr)
{
    let i = 0;
    let len = arr.length - 1;
    
    while(i < len)
    {
        // incrementa l'indice sinistro se trovo 0    
        while(arr[i] == 0) 
        { 
            i++; 
        }
        
        // incrementa l'indice destro se trovo 1
        while(arr[len] == 1)
        { 
            len--; 
        }
    
        // se l'indice sinistro è minore dell'indice destro scambia gli elementi
        // e incrementa i e decrementa len
        if(i < len) 
        { 
            arr[i] = 0;
            arr[len] = 1;
            i++;
            len--;
        }
    }
    return arr;

}



let x = [1, 0, 0, 1, 1, 1, 0, 0, 1, 1];
console.log(linearSort(x));
