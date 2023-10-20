/*
    Scrivere una funzione x_union che, dati in input due oggetti o1 e o2, 
    restituisce un nuovo oggetto contenente tutte le proprietà di o1 e tutte quelle di o2, 
    escluse quelle che compaiono sia in o1 che in o2.
*/


function unionX(obj1, obj2)
{
    let result = {} 
    
    for(k in obj1)
    {
        for(k2 in obj2)
        {
            if(!(k in obj2))
            {
                result[k] = obj1[k]
            }
            if(!(k2 in obj1))
            {
                result[k2] = obj2[k2]
            }
        } 
    }
    return result
}


console.log(unionX({x: 12, y: 5},{w: 24, z: 25}))
console.log(unionX({x: 12, y: 5},{y: 24, z: 25}))
console.log(unionX({x: 12, y: 5},{}))
