/*
    Si scriva una funzione bisect(f, a, b)
    dove a e b sono valori numerici, e f è una funzione monotona, 
    definita e continua nell'intervallo [a, b], e tale che f(a) * f(b) < 0. 
    La funzione bisect(f, a, b) restituisce un valore x per cui |f(x)| < 0.0001
    (in altre parole, deve approssimare lo zero di nell'intervallo [a, b] 
    con una tolleranza di al più 0.0001).
*/

function bisect(f, a, b)
{
    let res = (a + b) / 2;
    if(Math.abs(f(res)) < 0.0001)
    {
        return res;
    }
    
    if(f(a) * f(b) < 0)
    {
        return bisect(f, a, b);
    }
    else
    {
        return bisect(f, res, b);
    }
}

console.log(bisect(x=>x**3-x-2,1,2));
