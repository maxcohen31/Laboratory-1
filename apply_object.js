/*
    Si scriva una funzione che, dato un oggetto 
    e una funzione restituisca un oggetto con le stesse chiavi di 
    e in cui il valore di ogni chiave sia dato dall’applicazione di al valore della chiave in o 

*/


function applyObj(obj, f)
{   
    let result = {}
    for(let k in obj)
    {
        result[k] = f(obj[k]) 
    }
    return result
}

d = {"pere": 3, "mele": 1}
d2 = {io: "Vincenzo", tu:"Alina"}
d3 = {}
d4 = {io: 7, tu: 9}
console.log(applyObj(d, x=> 2*x));
console.log(applyObj(d2, x=> x.length));
console.log(applyObj(d3, x=> x.length));
console.log(applyObj(d4, x=> x));

