/*
    Si scriva una funzione 
    che, dato un array contenente oggetti 
    con chiavi 
    ed, restituisca lo stesso array dove a tutti gli oggetti viene aggiunta una chiave 
    con valore booleano che dica se l'età della persona è >= 18.

*/


function map_senior(db)
{
    for(let persona of db)
    {
        if(persona.eta >= 18)
        {
            persona["maggiorenne"] = true;
        }
        else
        {
            persona["maggiorenne"] = false;
        }
    }
    return db;

}

let input = [
    {'nome': 'Carla', 'eta': 18},
    {'nome': 'Giuseppe', 'eta': 3},
    {'nome': 'Ozzy Osbourne', 'eta': 73}

] 

console.log(map_senior(input))
