/*
    Si scriva una funzione JS manipola(arr, f, a, n) che prenda in input un array arr di numeri,
    un predicato f, una funzione filtro, una funzione aggiorna ed un numero a di iterazioni
    
    La funzione deve ritornare un array ottenuto applicando per n volte la seguente operazione:
    Seleziona il sottoarray per cui il predicato filtro è true. All'inizio,
    il contenuto del sottoarray coincide con quello di arr.
    Applica al sottoarray la funzione aggiorna.

    Al termine, la funzione restituisce l'array risultante senza modificare l'array di partenza
    
    Esempio:
    
    let filtro = (x) => x % 2 == 0 || x > 4;
    let aggiorna = (x) => x + 1;
    manipola([1, 2, 3, 4], filtro, aggiorna, 2) === [6]
    
*/



function manipola(arr, f, a, n)
{   
    let newArr = [];
    let sum = 0;
    let i = 0;

    if(arr.length === 0)
    {
        return [];
    }

    while(i <= n)
    {
        if(f(arr[i]))
        {
            newArr.push(a(arr[i]));
        }
        i++;
    }
    
    for(let i = 0; i < newArr.length; i++)
    {
        sum += newArr[i];
    }
    return [sum];

}




let filtro = (x) => x % 2 != 0 || x > 4;
let filtro2 = (x) => x % 2 == 0 || x > 4;
let aggiorna = (x) => x + 1;
//console.log(manipola([1, 2, 3, 4], filtro, aggiorna, 2));
//console.log(manipola([1, 2, 3, 4], filtro2, aggiorna, 2));


