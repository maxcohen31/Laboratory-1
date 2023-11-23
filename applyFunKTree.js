/*      
    ESERCIZIO 3 - Applicare una funzione data a tutti i valori contenuti in un albero, 
    sostituendo in ogni nodo il valore attuale con il risultato della funzione applicata al valore attuale
*/



function applyFun(ktree, f)
{
    // Caso base: foglia
    //if(!(ktree.figli) || ktree.figli.length == 0)
    //{
    //    ktree.val = f(ktree.val);
    //}

    // Caso ricorsivo
    // si può semplicemente applicare la funzione alla radice
    ktree.val = f(ktree.val);
    for(let child of ktree.figli)
    {
        applyFun(child, f)
    }
    
}

function printKTree(ktree, ind)
{
    console.log(ind + ktree.val + "|-");
    for(let i of ktree.figli)
    {
        printKTree(i, ind + "  ");
    }
}

function _printKTree(ktree)
{
    printKTree(ktree, "")
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

console.log(applyFun(ktree, (x) => (2*x)))
console.log(_printKTree(ktree))

