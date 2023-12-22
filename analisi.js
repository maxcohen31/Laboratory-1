/* 
    ESERCIZIO "ANALISI"
    
    Si scriva una funzione Javascript analisi(foo, d, c) 
    che data in input una funzione foo e due insiemi dominio e codominio 
    (implementando gli insiemi come oggetti in cui la chiave rappresenta un elemento ed il valore è true), 
    restituisca un oggetto con le seguenti chiavi:
    - suriettiva, un booleano che indica se foo è suriettiva, ovvero se il codominio di foo coincide con la sua immagine;
    - iniettiva, un booleano che indica se foo è iniettiva, 
    ovvero se per ogni y nel codominio esiste al massimo un x nel dominio tale che f(x) = y;
    - invertibile, un booleano che indica se la funzione è invertibile, 
    ovvero se al funzione è sia suriettiva sia iniettiva.

    Si ricordi che l'immagine di foo corrisponde all'insieme I = { foo(x) | x nel dominio }. 
    Si fornisca una soluzione senza usare alcuna funzione di libreria predefinita.
*/



function subset(A, B)
{
    for(let i in A)
    {
        if(!i in B)
        {
            return false;
        }
    }
    return true;
}

function equalSets(A, B)
{
    return subset(A, B) && subset(B, A);
}

function analisi(foo, dominio, codominio)
{
    let result = {};
    let immagine = {};
    
    // calcolo immagine di foo
    for(let element in dominio)
    {
        immagine[foo(element)] = true;
    } 
    
    // L'immagine è uguale al codominio?
    result.suriettività = equalSets(codominio, immagine);
    
    // Calcolo l'iniettività
    // DEF: per ogni y nel codominio esiste al massimo un x nel dominio tale che foo(x) = y
    for(let i in codominio)
    {
        let count = 0;
        for(let j in dominio)
        {
            if(foo(j) == i)
            {
                count += 1;
            }
        }
        if(count > 1)
        {
            result["iniettività"] = false;
        }
        else
        {
            result["iniettività"] = true;
        }
    }
    
    // Se la funzione è iniettiva e suriettiva allora è inveribile
    result.invertibile = result.suriettività && result.iniettività;

    return result;

}


