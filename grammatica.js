/*
    Si consideri un oggetto G che rappresenta una grammatica. 
    Le proprietà di G hanno chiavi il cui nome consiste di una sola lettera
    maiuscola (A-Z); il valore di queste proprietà è una stringa qualunque. Si
    scriva una funzione produci(G,s) che, data una grammatica G e una stringa
    qualunque s, restituisca la stringa ottenuta sostituendo ogni lettera
    maiuscola
    L contenuta in s con la corrispondente stringa associata a L in G, se esiste.
    Tutti i caratteri che non sono chiavi di G vengono lasciati intatti.

Si scriva poi una funzione multip(G,s,k) che ripete il processo di produci k volte (con k intero non negativo), espandendo ripetutamente la stringa prodotta.


*/

function produci(g, str)
{
    let result = "";
    for(i = 0; i < str.length; i++)
    {
        if(str[i] in g)
        {
            result += g[str[i]]
        }
        else
        {
            result += str[i]
        }
    }
    return result
}

function multip(g, str, n)
{   
    while(n > 0)
    {
        str = produci(g, str);
        n--;
    }
    return str; 
} 



let o = {A:"aAB", B:"bb", C:"33"};
console.log(produci(o, "CAz"));
console.log(produci(o, "BAH!"));
console.log(multip(o, "CAz", 3));
