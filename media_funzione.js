/* Scrivere una funzione media(f,a,b) che calcoli il valore medio della funzione f nell’intervallo [a,b] */

function media(f, a, b)
{
    let area = 0;
   
    // Precision
    let numberOfRect = 10;
    let dX = (b - a) / numberOfRect;
    
    // Riemann sums
    for(let i=1; i<numberOfRect; i++)
    {
        area += f(a + ((i - 1) * dX)) * dX;
    }
    return (1 / (b - a)) * area;
}

console.log(media(x=>x^3, 0, 1));
