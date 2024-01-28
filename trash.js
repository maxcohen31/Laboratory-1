/*
    Si scriva una funzione differenzia(trash)
    che, dato un array di oggetti con chiavi nome e categoria 
    (entrambi con valore stringa), restituisca un oggetto con chiavi carta, multimateriale e indifferenziato, 
    ciascuna avente come valore l'array contenente tutti gli oggetti dell'array trash
    della relativa categoria. Se la categoria non coincide con una delle tre specificate, 
    si aggiunga l'oggetto all'array indifferenziato.
*/


function differenzia(trash)
{
    let result = {
        "carta": [],
        "multimateriale": [],
        "indifferenziato": []
    }
    
    for(let i of trash)
    {
        let cat = i.categoria;
        switch(cat)
        {
            case "carta":
                result.carta.push(i);
                break;
            case "multimateriale":
                result.multimateriale.push(i);
                break;
            default:
                result.indifferenziato.push(i);
                break;
        }
    }
    return result;

}


let input = [
    {'nome': 'tonno', 'categoria': 'multimateriale'}
]

console.log(differenzia(input))
