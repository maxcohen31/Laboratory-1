/*
    Scrivere una funzione che stampa le cifre di un intero    
*/


function stampaInt(n)
{
    let result = "";
    let i = 0;

    while(n > 0)
    {
        let rst = n % 10;
        result += `${rst}*10^${i}` + ' +'
        n = (n - rst) / 10
        i++
    }
    return result.slice(0, result.length - 2) 
}

console.log(stampaInt(371))
