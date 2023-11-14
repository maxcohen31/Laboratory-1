/*
    Si scriva una funzione mogol(r, p) 
    che, dato un array di stringhe r 
    (ciascuna delle quali è una parola) e una stringa 
    (anch’essa una parola), 
    restituisca un array contenente tutti gli elementi di r
    che fanno rima con p. 
    Una parola fa rima con un’altra se il suffisso della prima che parte dalla penultima vocale (inclusa) è uguale all’analogo suffisso della seconda. Si assuma che siano usate solo lettere minuscole.
*/

function isVowel(char)
{
    let vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char); 
}

function findSuffix(word)
{
    let result = "", nVowel = 0, i = word.length - 1
    while(nVowel < 2 && i >= 0)
    {

        if(isVowel(word[i]))
        {
            nVowel++;
        }
        i--;
    }

    for(let h = i+1; h < word.length; h++)
    {
        result += word[h];
    }
    return result;
    
}

function mogol(r, p)
{
    let result = []; 
    let pSuffix = findSuffix(p); 
    for(let i of r)
    {
        if(findSuffix(i) == pSuffix)
        {
            result.push(i);
        }
    }
    
    return result;
  
}

//console.log(mogol(['sale'], 'male'));
console.log(mogol(["cuore" ,"amore", "sale"], "sudore"));
