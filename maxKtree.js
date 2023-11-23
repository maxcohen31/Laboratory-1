/* 
    ESERCIZIO 1 - Trovare il massimo fra i valori in un albero
*/

function findMax(ktree)
{

    if(ktree.figli.length == 0)
    {
        return ktree.val;
    }
    
    // Il massimo per adesso è la radice
    let max = ktree.val;

    // Ciclo sui figli e chiamo la funzione sui figli per trovare il massimo
    for(let child of ktree.figli)
    {
        let m = findMax(child);
        if(max < m)
        {
            max = m;
        }
    }
    return max;

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

console.log(findMax(ktree))
