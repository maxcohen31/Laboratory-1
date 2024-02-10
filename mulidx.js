/*
    Si scriva una funzione mulidx(a) che, 
    dato un array a con elementi qualunque, restituisca un nuovo array b, 
    contenente (nello stesso ordine) soltanto gli elementi numerici di a 
    che sono un multiplo del proprio indice, 
    e gli elementi stringa di a la cui lunghezza è un multiplo del proprio indice.
*/

function mulidx(a)
{
    let result = [];
    for(let i = 0; i < a.length; i++)
    {
        if(typeof a[i] == 'string')
        {
            let len = a[i].length;
            if(len%i === 0 || len === 0)
            {
                result.push(a[i])
            }
        }
        if(typeof a[i] == 'number')
        {
            if(a[i] % i === 0)
            {
                result.push(a[i])
            }
        }
    }
    return result;
}


console.log(mulidx(["",4,[true],"Grande Giove",7,10]));
