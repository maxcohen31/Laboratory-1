/*  
    Evo learning
    Si scriva una funzione che, data una singa s, restituisca il numero 
    totale di vocali
*/


function contaVocali(s)
{
    let counter = 0;
    let newStr = s.toLowerCase();
    for(let i = 0; i<s.length; i++)
    {
        if(newStr[i] == "a" || newStr[i] == "e" || newStr[i] == "i" || newStr[i] == "o" || newStr[i] == "u")
        {
            counter += 1;
        }
    }
    return counter;
}

console.log(contaVocali("Ai lati d’Italia"));
