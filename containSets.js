/*  ESERCIZIO 2 

    Scrivere una funzione confronta che, dati due insiemi A e B, 
    restituisce un oggetto con le seguenti chiavi:
    - sottoinsieme, un booleano che vale true se A ⊆ B (e false altrimenti)
    - superinsieme, un booleano che vale true se A ⊇ B (e false altrimenti)
    - uguale, un booleano che vale true se A = B (e false altrimenti)

*/



function subset(A, B)
{
    for(let k in A)
    {
        if(!(k in B))
        {
            return false;
        }
    }
    return true;
}

function superset(A, B)
{
    return subset(B, A);
}

function equal(A, B)
{
    return subset(A, B) && subset(B, A);
}

function confronta(A, B)
{
    let result = {}
    result.subset = subset(A, B),
    result.superset = superset(B, A),
    result.equal = equal(A, B)

    return result;
    
}

let vuoto = {}
let S1 = {
    "pippo": true,
    "paperino": true
}
let S2 = {
  "pippo": true,
  "paperino": true,
  "minnie": true
}

console.log(confronta(S1, S2));
console.log(confronta(S2, S1));
console.log(confronta(S2, S2));

