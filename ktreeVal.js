/*
    1. Determinare l'insieme (dei valori) delle foglie di un albero.
    2. Determinare l'insieme (dei valori) dei nodi interni ad un albero
*/


// Funzione per pushare un elemento nell'insieme 
function insert(A, value)
{
    A[value] = true;
}

// Unione insiemi
function union(A, B)
{
    let setUnion = {};
    for(let i in A) { insert(setUnion, i); }
    for(let j in B) { insert(setUnion, j); }
    return setUnion;
}


// Punto 1
function leavesSet(ktree)
{
    let leaves = {};

    // Caso base: foglia
    if(!ktree.figli || ktree.figli.length === 0)
    {
        let result = {};
        insert(result, ktree.val);
        return result;
    }

    // Ricorsione
    for(let l of ktree.figli)
    {
        leaves = union(leaves, leavesSet(l));
    }

    return leaves;


} 

// Punto 2 
function valSet(ktree)
{
    let result = {};
    
    if(ktree == {})
    {
        return undefined;
    }

    // Caso base: foglia
    if(ktree.figli.length === 0 || !ktree.figli)
    {
        insert(result, ktree.val);
    }
    
    // Ricorsione
    for(let value of ktree.figli)
    {
        insert(result, value.val);
    }
   
    return result;
}



let ktree = {
  val: 5,
  figli: [
    { val: 10, figli: [] },
    {
      val: 15, figli: [
        { val: 34, figli: [] },
        { val: 2, figli: [] },
        { val: 33, figli: [] },
      ]
    },
    {
      val: 45, figli: [
        { val: -10, figli: [] },
        { val: 2, figli: [] },
      ]
    },
    { val: 8, figli: [] },
    { val: 12, figli: [] },
    { val: 5, figli: [] }
  ]
}

console.log(leavesSet(ktree));
