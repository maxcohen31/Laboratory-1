/*
    Si scriva una funzione isHeap(t) che, dato un albero k-ario t costruito 
    come visto a lezione con nodi {val:v, figli: [t1, …, tn]}, 
    restituisca true se l’albero soddisfa la proprietà di heap, 
    ovvero il valore del padre è sempre maggiore del valore di ciascuno dei figli.

*/

function isHeap(tree)
{   

    if(!tree || tree.figli.length === 0 || !(tree.figli)) { return true; } 

    for(let k of tree.figli)
    {   
        // Se trovo un figlio più grande del padre ritorna false
        if(tree.val < k && !(isHeap(k)));
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

console.log(isHeap(ktree))
