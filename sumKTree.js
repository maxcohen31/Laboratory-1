/*
    Calcolare la somma dei valori contenuti in un albero k-ario
*/


function sum(ktree)
{

    // Caso base: foglia
    if(!ktree.figli || ktree.figli.length === 0)
    {
        return ktree.val
    }
   
    // Il primo valore sarà l'etichetta del primo nodo
    let result = ktree.val;

    // Ricorsione
    for(let i of ktree.figli)
    {
        result += sum(i);
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

console.log(sum(ktree));
