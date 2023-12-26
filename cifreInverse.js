/*
    Si scriva una funzione ricorsiva cifreInv(n) che, 
    dato come argomento un intero positivo n, 
    restituisca un array che in posizione i 
    contiene la cifra i-esima di n , 
    dalla meno significativa alla più significativa.

    Esempi:

    cifreInv(2563) → [3, 6, 5, 2]

    cifreInv(98763) → [3, 6, 7, 8, 9]
*/

function cifreInv(n)
{
    // Make an array from n
    let numbToArr = String(n).split("").reverse().map((n) => {
        return Number(n);
    });

    return numbToArr
}


// Soluzione proposta
function cifreInv(n)
{
    let arr = []
    function ricCall(n)
    {
        if(n==0)
            return
        var resto = n%10
        arr.push(resto)
        ricCall((n-resto)/10)
    }
    ricCall(n)
    return arr
}


