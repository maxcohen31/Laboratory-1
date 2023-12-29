/*
    Si scriva una funzione JavaScript vocali(s) che data una stringa s, 
    restituisce un oggetto così fatto:
    { ant: a, cent: c, post: p}, dove a è il numero di vocali anteriori che compaiono in s 
    (sono vocali anteriori: E, I), c è il numero di vocali centrali che compaiono in s 
    (sono vocali centrali: A), e p è il numero di vocali posteriori che compaiono in s 
    (sono vocali posteriori: O, U). 

    Suggerimento: si può usare il comando s.split("") per trasformare una stringa in un array di caratteri.

    Esempi

    vocali("ciao MAMMA!") → {ant: 1, cent: 3, post: 1}

    vocali("2+2") → {ant: 0, cent: 0, post: 0}

*/

function vocali(s)
{
    let result = {ant: 0, cent: 0, post: 0};

    let stringToArr = s.toLowerCase().split("");

    for(let i = 0; i < stringToArr.length - 1; i++)
    {
        if(stringToArr[i] == "a")
        {
            result.cent += 1;
        }
        if(stringToArr[i] == "i" || stringToArr[i] == "e")
        {
            result.ant += 1;
        }
        if(stringToArr[i] == "o" || stringToArr[i] == "u")
        {
            result.post += 1;
        }
    }
    return result;

}

console.log(vocali("ciao MAMMA!"));
console.log(vocali("2+2"));
