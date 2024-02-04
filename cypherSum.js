/*
    Si scriva una funzione sommaCifre(v) con v intero positivo. 
    La funzione restituisce la somma delle cifre di v. 
    Si provi a scrivere sia una versione iterativa che ricorsiva della funzione.
*/


function sommaCifre(v)
{
    let s = 0;

    while(v > 0)
    {
        let getLast = v % 10;
        v = Math.floor(v/10);
        s += getLast
    }
    return s;

}


function sommaCifreRec(v)
{
    // Base case
    if(v < 10)
    {
        return v;
    }
    
    return (v % 10) + parseInt(sommaCifreRec(v/10));

}


console.log(sommaCifre(1234));


