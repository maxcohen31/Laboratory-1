/*
    Si scriva una funzione minima_stringa(a) che, dato in input un array a di stringhe, restituisce la stringa più corta fino alla prima occorrenza di una stringa palindroma, inclusa quest'ultima.

    In caso di parità di lunghezza, la funzione deve ritornare la prima stringa in ordine di occorrenza.

    Una stringa palindroma è una stringa che rimane identica con i caratteri invertiti: "anna", "oro", "abccba".  

    Esempio:

    minima_stringa(["ciao", "casa", "ora", "anna", "pc"]) restituisce "ora"
*/


function is_palidrome(str)
{
    // ciclo su metà stringa
    for(let i = 0; i < str.length / 2; i++)
    {
        // se l'i-esimo carattere è diverso dall'ultimo ritorna false
        if(str[i] != str[str.length - i - 1])
        {
            return false;
        }
    }
    return true;
}


function minima_stringa(arr)
{
    let result = arr[0];
    
    // cicla gli elementi dell'array
    for(let i = 0; i < arr.length; i++)
    {   
        // se la lunghezza della stringa i-esima è minore di result
        // result diventa l'elemento i-esimo 
        if(arr[i].length < result.length)
        {
            result = arr[i]; 
        }
        // se l'i-esimo elemento dell'array è un astringa palindroma
        // allora ritorna il result
        if(is_palidrome(arr[i]))
        {
            return result;
        }
    }
    return result;
}

let words = ["ciao", "casa", "ora", "anna", "pc"]; // "ora"
console.log(minima_stringa(words));
