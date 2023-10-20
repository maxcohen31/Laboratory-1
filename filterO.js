/*
    Scrivere una funzione filter_o che, dato in input un oggetto o e un predicato p,
    restituisce un (nuovo) oggetto contenente tutti le coppie chiave:valore tali che p(chiave) restituisce true
*/

function filter_o(obj, p)
{
    let result = {}
    
    for(let k in obj)
    {
        if(p(k))
        {
            result[k] = obj[k]
        }
    }
    return result
}

let o = { x:-5, xy:10, xyz:10}
let o2 = { xx:-5, xy:10}
console.log(filter_o(o, (x) => (x.length%2 == 0)))
console.log(filter_o(o2, (x) => (x.length%2 == 0)))
