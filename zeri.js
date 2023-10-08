/* 
    Scrivere una funzione zeri(f,a,b) che conti gli zeri della funzione f nell’intervallo [a,b] 
*/

function zeri(f, a, b)
{
    let counter = 0;
    for(let i = a; i < b; i++)
    {
        if(f(i) == 0)
        {
            counter += 1;
        }
    }
    return counter;
}

console.log(zeri(x=>x-2, -5, 5));
