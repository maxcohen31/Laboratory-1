/*
    Si scriva una funzione ordnung(a) che, dato come argomento un array a, 
    i cui elementi sono a loro volta array di numeri, 
    ordini lo stesso a in modo che ogni singolo elemento sia ordinato in ordine numerico crescente, 
    e che a sia ordinato in base al valore numerico crescente del primo elemento di ciascun elemento; 
    a parità si passa a confrontare il secondo elemento, e così via. 
    In caso di parità di tutti gli elementi, l’array più corto va ordinato prima di quello più lungo. 
    Questo è un esempio di ordinamento lessicografico, perché viene usato, 
    per esempio nei dizionari, per ordinare le parole di una lingua.



    Esempi

    ordnung([[5,1,3],[1,5,2,7],[3,4],[3]]) → [[1,2,5,7],[1,3,5],[3],[3,4]]

    ordnung([[5,7,3],[8,3,5],[1],[5]]) → [[1],[3,5,7],[3,5,8],[5]]
*/

function ordnung(a)
{
    // sorting the elements of a
    for(let i = 0; i < a.length; i++)
    {
        a[i].sort(); 
    }
    return a.sort();
    
}

console.log(ordnung([[5,1,3],[1,5,2,7],[3,4],[3]]));
