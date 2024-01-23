/*
    Si scriva una funzione zip(o) che, ricevuto un oggetto o qualunque, 
    restituisca un array così fatto: per ogni proprietà p = chiave: valore di o, 
    l’array deve contenere come elemento la coppia [chiave, valore]
    rappresentata come array di 2 elementi. 

    Extra: L’array risultante deve essere ordinato alfabeticamente per chiave.

    Esempi:

    zip({a:1, b:true}) restituisce [ [“a”,1], [“b”, true] ]

    zip({b:true, a:1}) restituisce [ [“a”,1], [“b”, true] ]

    zip({}) restituisce []


    Inoltre, si scriva una funzione unzip(a) che, ricevuto un array di coppie come restituito da zip, 
    restituisca a sua volta ’oggetto corrispondente, applicando la trasformazione inversa.

    Esempi

    unzip([[“a”,1], [“b”, true]]) → {a:1, b:true}

    unzip([]) → {}

*/

function zip(o)
{
    let result = [];
    for(let i in o)
    {   
        let keyVal = [];
        keyVal.push(i);
        keyVal.push(o[i]);
        result.push(keyVal);
    }
    // Compare strings
    return result.sort((x, y) => x[0].localeCompare(y[0]));
}

function unzip(o)
{
    result = {};
    for(let i = 0; i < o.length; i++)
    {
        // Get key and value
        let key = o[i][0];
        let val = o[i][1];
        // Store both key and value into result
        result[key] = val;
    }
    return result;
}


console.log(zip({b:true, a:1}))
console.log(unzip([["a", 1], ["b", true]]));
