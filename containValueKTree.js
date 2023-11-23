/*
    ESERCIZIO 2 - Dire se un albero contiene un valore cercato o no
*/


function containKTree(ktree, value)
{
    // Caso base: foglia
    if(!(ktree.figli) || ktree.figli.length === 0)
    {
        return ktree.val;
    }
    
    // La radice è il valore cercato
    if(ktree.val == value)
    {
        return true;
    }
    
    // Cerco il valore nei figli
    for(let child of ktree.figli)
    {
        if(!(containKTree(child, value)))
        {
            return false;
        }
    }
    return true;
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

console.log(containKTree(ktree, -10))
