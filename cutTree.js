/*
    Sia T un albero k-ario e v un valore valido per un node dell'albero.
    Si scriva una funzione Js tagliaRami(T, v) che modifichi T tagliando tutti i 
    rami(attenzione: non la radice!) che hanno valore val divisore di v.
    L'operazione di taglio di un nodo elimina dall'albero il nodo in questione,
    e l'eventuale sotto-albero radicato nel nodo.
*/

function tagliaRami(T,v)
{
    for(let i = 0; i < T.figli.length; i++)
    {
        if(v%T.figli[i].val == 0)
        {
            T.figli.splice(i--, 1);
        }
        else
        {
            tagliaRami(T.figli[i], v);
        }
    }
}

let t ={val:12, figli:[{val: 8, figli: [{val: 2},{val: 2}, {val: 2, figli:[{val:4}]}]}]};
console.log(tagliaRami(t, 3))
