/*
    Si scriva una funzione rimuovi_dispari(t) 
    che, dato un albero k-ario (con la rappresentazione, vista a lezione, 
    che utilizza un array *figli* per i figli di ogni nodo) contenente numeri interi,   
    modifica l'albero eliminando tutti i sottoalberi costituiti unicamente da nodi con etichette dispari. 
    Si può assumere che la radice dell'albero non venga mai cancellata 
    (ovvero non verrà mai testato il caso di un albero costituito da tutti nodi con etichetta dispari)
*/


function visita_albero(t){ 
  if (t.figli == undefined) return [t.val]
  let arT = [t.val]
  for (let s of t.figli) 
    arT= arT.concat(visita_albero(s))
  return arT
}

function rimuovi_dispari(t)
{
    // Base case: node is odd
    if(t.figli == undefined)
    {
        return (t.val % 2 == 1);
    }

    let i = 0;
    // can i remove a subtree?
    let found = false;

    while(i < t.figli.length)
    {
        // remove the i-th element if it's odd 
        if(rimuovi_dispari(t.figli[i]))
        {   
            found = true;
            t.figli.splice(i, 1); 
        }
        else
        {
            i++;
            found = false;
        }
    }

    // If length is zero no more children: remove the array
    if(t.figli.length  === 0)
    {
        delete t.figli;
    }

    return found && t.val % 2 == 1;

}



let t ={val:12, figli:[{val: 8, figli: [{val: 2},{val: 2}, {val: 2, figli:[{val:4}]}]}]};
let x ={val:12, figli:[{val: 3, figli: [{val: 1},{val: 1}, {val: 1, figli:[{val:1}]}]}]};
console.log(rimuovi_dispari(t));
console.log(visita_albero(t));
