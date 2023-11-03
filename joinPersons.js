/*
    Si scriva una funzione raggruppa_nascita(persone) che dato un array di oggetti con chiavi nome,
    annonascita, e luogonascita, restituisca un oggetto che ha come chiavi i diversi anni di nascita 
    e come valori degli array che raggruppino i rispettivi oggetti.    

    NOTA: L'ordine degli oggetti negli array deve preservare l'ordine dell'array persone.
*/


function raggruppa_nascita(persone)
{
    let joined = {};
    
    // Create an empty array for each birth date
    for(let pers of persone)
    {
        joined[pers.annonascita] = [];
    }
    
    // check if key is present in the new object
    // if true push the key
    for(let k of persone)
    {
        if(k.annonascita in joined)
        {
            joined[k.annonascita].push(k);
            
        }
    } 
    return joined;
}



var persone = [
  {'nome': 'Leonardo da Vinci', 'annonascita': 1452, 'luogonascita': 'Vinci'},
  {'nome': 'Pietro del Donzello', 'annonascita': 1452, 'luogonascita': 'Firenze'},
  {'nome': 'Davide Ghirlandaio', 'annonascita': 1452, 'luogonascita': 'Firenze'},
  {'nome': 'Leonardo Fibonacci', 'annonascita': 1170, 'luogonascita': 'Pisa'}
]

console.log(raggruppa_persone(persone));
