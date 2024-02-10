/*
    Dato un albero k-ario T, definire una funzione ricorsiva taglia_nodi_interni che, 
    preso in input un intero positivo m, modifica T in-place, 
    rimuovendo tutti i nodi interni (e i rispettivi sottalberi) che hanno meno di m figli.

    Notazione

    Si codifichi l'albero k-ario T come visto a lezione, 
    perciò un albero è rappresentato da un oggetto così formato {val: , figli:[...]}

    Si noti inoltre che l'albero vuoto è codificato con il valore null.

*/

function taglia_nodi_interni(t)
{
    if(!t) 
    {
        return null;
    }

    if(t.figli.length === 0)
    {
        return null;
    }

    for(let i = 0; i < t.figli.length; i++)
    {
        if(t.figli[i].length < m)
        {
            t.figli.splice(i, 1);
        }
        else
        {
            taglia_nodi_interni(t.figli[i], m)
        }
    }
}
