/*
    Si scriva una funzione similitudine(a, b), 
    con e a e b stringhe. 
    La funzione restituisce un oggetto che contiene come chiavi i caratteri 
    che compaiono nelle due stringhe alla stessa posizione, 
    e come valore la posizione corrispondente.



    Se lo stesso carattere appare più volte in entrambe le stringhe nella stessa posizione, 
    per esempio “pippo” e “pappa”, va bene restituire una qualunque delle posizioni in cui appare.

    Esempi:

    similitudine("The Holy Grail", "Life of Brian") restituisce {o: 5, a: 11}

    similitudine("pippo", "pappa") restituisce {p: 0} oppure {p: 2} oppure {p: 3}
*/

function similitudine(a, b)
{
    let result = {};
    
    
    if(a.length >= b.length)
    {
        for(let i = 0; i < a.length; i++)
        {
            if(a[i]== b[i])
            {
                result[a[i]] = i;
            }
        }
    }
    return result;
}


console.log(similitudine("The Holy Grail", "Tife of Brian"))
console.log(similitudine("pippo", "pappa"))
