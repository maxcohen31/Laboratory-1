/*
    Aggiungere un nuovo nodo all'albero, dato il valore del padre (se non c'è, non lo aggiunge)
*/


function addNode(ktree, value, parent_value)
{
    // Caso base
    if(ktree.val === parent_value)
    {
        ktree.figli.push({
            val: value,
            figli: []
        }
        );
        
    }
    
    // Ricorsione 
    for(let i of ktree.figli)
    {
        addNode(i, value, parent_value);
    }

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

console.log(addNode(ktree, -5, 10))

for(let i of ktree.figli)
{
    console.log(i)
}
