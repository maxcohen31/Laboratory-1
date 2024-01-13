/*
    Si consideri un array i cui elementi possono essere o stringhe, 
    oppure altri array dello stesso tipo (ovvero, aventi per elementi o stringhe, 
    oppure altri array dello stesso tipo, e così via). 
    Si scriva una funzione lineare(a) che, dato un array a
    come descritto sopra, restituisca un array contenente le sole stringhe, 
    nello stesso ordine in cui comparivano nell’array 
    
    Esempi
        
    lineare(["pippo", ["va", "a"], "scuola"]) → ["pippo", "va", "a", "scuola"]

    lineare([["che"], "bello", ["questo", "esercizio"], "qui", []]) → ["che", "bello", "questo", "esercizio", "qui"]

*/

function lineare(a)
{
    let result = [];
    
    for(let i = 0; i < a.length; i++)
    {
        if(Array.isArray(a[i]))
        {
            result = result.concat(lineare(a[i]));
        } 
        if(typeof a[i] == 'string')
        {
            result.push(a[i])
        }
    }
    return result;
}

console.log(lineare(["pippo", ["va", "a"], "scuola"]));
