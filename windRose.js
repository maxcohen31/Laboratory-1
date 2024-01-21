/*
    Si considerino le quattro direzioni cardinali (nord, est, sud, ovest), 
    ciascuna codificata con la lettera corrispondente in (N, E, S, W), 
    nonché le direzioni intermedie codificate con due lettere in ordine qualsiasi (es: NE = EN = nord-est).

    Si scriva una funzione rosa(s) 
    che, data una stringa s 
    contenente la codifica di una direzione come indicato sopra, 
    restituisca un oggetto {x: i, y: j} in cui e 
    sono valori fra -1, 0 e 1 che rappresentano lo spostamento unitario lungo l’asse e lungo l’asse , 
    rispettivamente, corrispondente alla direzione codificata da.



    Esempi:

    rosa(“NE”) restituisce {x: 1, y: 1}

    rosa(“EN”) restituisce {x: 1, y: 1}

    rosa(“S”) restituisce {x: 0, y: -1}

    rosa(“NW”) restituisce {x: -1, y: 1}

*/

function rosa(s)
{
    let symb = {
        "NE": {x: 1, y: 1},
        "EN": {x: 1, y: 1},
        "S": {x: 0, y: -1},
        "N": {x: 1, y: 0},
        "E": {x: 1, y: 0},
        "W": {x: -1, y: 0},
        "SW": {x: -1, y: -1},
        "WS": {x: -1, y: -1},
        "NW": {x: -1, y: 1},
        "WN": {x: -1, y: 1},
        "SE": {x: 1, y: -1},
        "ES": {x: 1, y: -1},
    } 
    return symb[s];
}


// Alternative Sol
function rosa(s)
{
    var obj = { "x":0, "y":0 };
    for(let i=0; i<s.length; i++)
    {
        switch(s[i])
        {
            case "N":
                obj["y"] = 1;
                break;
            case "E":
                obj["x"] = 1;
                break;
            case "S":
                obj["y"] = -1;
                break;
            case "W":
                obj["x"] = -1;
                break;
            default:
                return "Input non valido";
        }
    }
    return obj;
}

console.log(rosa("S"));
