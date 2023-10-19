/*
    Scrivere una funzione pal_index che, data in input una stringa s, restituisce:
    Infinity se la stringa è palindroma, oppure 
    il numero di caratteri n (con n nell’intervallo [0,⎣s.length/2⎦]) per cui s è palindroma

*/

function pal_index(str)
{
    var result = 0

    for(let i = 0; i < str.length/2; i++)
    {
        if(str[i] == str[str.length-1-i])
        {
            result += 1
        }
    }
    
    if(result != (str.length/2) - 1)
    {
        return Infinity
    }
    return result

}

console.log(pal_index("ossesso"))
console.log(pal_index("angina"))
