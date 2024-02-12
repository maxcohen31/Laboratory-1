/*
    Si definisca una funzione prodotto_scalare(x,y)
    che dati due array ne ritorni il prodotto scalare. 
    Se gli array non hanno lo stesso numero di componenti, 
    la funzione ritorna undefined.
*/

function prodotto_scalare(x, y)
{
    if(x.length != y.length)
    {
        return undefined;
    }
    
    let s = 0;
    for(let i = 0; i < x.length; i++)
    {
        s += x[i] * y[i]
    }
    return s;

}
