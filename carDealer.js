/*
    Si consideri il problema di gestire una concessionaria, 
    le cui automobili sono memorizzate in un array di oggetti, i cui campi sono i seguenti:



    - Telaio: stringa alfanumerica che identifica l'automobile;

    - Anno: numero che indica l'anno di produzione;

    - Prezzo: numero che indica il prezzo di acquisto in euro;

    - Disponibile: booleano che indica se l'auto è disponibile per la vendita.



    Sviluppare le tre seguenti funzioni:

    (1) presente(concessionaria,auto): 
    restituisce true se l'array concessionaria contiene un'automobile uguale all'auto passata in input;

    (2) disponibili(concessionaria): 
    restituisce un nuovo array contenente le auto disponibili nell'array concessionaria;

    (3) filtra_per_anno(concessionaria, anno, operatore): 
    restituisce un nuovo array contenente le automobili il cui anno soddisfa il controllo "operatore anno", 
    dove operatore può essere "<", ">", o "==". 
    Ad esempio, filtra_per_anno(concessionaria, 2017, "<") 
    restituisce tutte le automobili in concessionaria il cui anno indica che sono precedenti al 2017. 
    In caso di operatore non valido, restituire il valore undefined
*/


function presente(concessionaria, auto)
{
    for(let car of concessionaria)
    {
        if(car.Telaio == auto.Telaio && car.Anno == auto.Anno && car.Prezzo == auto.Prezzo)
        {
            return true; 
        }
    }
    return false;
}

function disponibili(concessionaria)
{
    let avaiable = [];
    for(let car of concessionaria)
    {
        if(car.Disponibil)
        {
            avaiable.push(car)
        }
    }
    return avaiable;
}

function filtra_per_anno(concessionaria, anno, operatore)
{
    
    if(operatore != "==" && operatore != ">" && operatore != "<") 
    {
        return undefined; 
    }
    
    let result = [];
    for(let auto of concessionaria)
    {
        switch(operatore)
        {
            case "==":
                if(anno === auto.Anno)
                {
                    result.push(auto);
                }
                break;
            case ">":
                if(anno < auto.Anno)
                {
                    result.push(auto);
                }
                break;
            case "<":
                if(anno > auto.Anno)
                {
                    result.push(auto);
                }
                break;
            default:
                break;
        }
    }
    return result;
   
}



var macchina1 = {"Telaio": "12w34e", "Anno": 2009, "Prezzo": 17600, "Disponibile": false}
var macchina2 = {"Telaio": "46m87j", "Anno": 2019, "Prezzo": 9700, "Disponibile": true}
var macchina3 = {"Telaio": "32m12g", "Anno": 2020, "Prezzo": 26000, "Disponibile": true}
var macchina4 = {"Telaio": "09j76t", "Anno": 2022, "Prezzo": 76550, "Disponibile": true}
var macchina5 = {"Telaio": "45t67y", "Anno": 2021, "Prezzo": 12566, "Disponibile": false}
var macchina6 = {"Telaio": "45t69x", "Anno": 2020, "Prezzo": 13000, "Disponibile": true}
var concessionaria = [macchina1, macchina2, macchina3, macchina4]

let lambo = {"Telaio": "12w34e", "Anno": 2009, "Prezzo": 17600, "Disponibile": false};
//console.log(presente(concessionaria, lambo));
//console.log(disponibili(concessionaria));
console.log(filtra_per_anno(concessionaria, 2010, ">"));
