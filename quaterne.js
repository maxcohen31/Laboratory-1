/*
    Si scriva una funzione quaterne(a, b)
    che, dati come argomenti due interi a e b con a <= b 
    restituisca il numero di quaterne (cioè sequenze distinte di quattro numeri consecutivi) 
    comprese fra a e b, estremi esclusi.

*/

function abs(n)
{
    if(n > 0)
    {
        return n
    }

    return -1 * n
}

function quaterne(a, b)
{
    let counter = 0

    if(abs(b - a) < 4 || a >= b)
    {
        return 0
    }

    for(let i = a; i < b - 4; i++)
    {
        counter++
    }
    return counter
}


function printQuat(a, b)
{
    let interval = []
    let quat = []

    for(let i = a + 1; i < b; i++)
        interval.push(i)

    for(let j = 0; j < quaterne(a, b); j++)
    {
        result = []
        for(let y = 0; y < a; y++)
        {
            result.push(interval[y]++)
        }
        quat.push(result)
    }
    return quat
}


console.log(quaterne(-4, 10))
console.log(quaterne(4, 6))
console.log(printQuat(4, 10))
