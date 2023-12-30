/*
    La differenza simmetrica fra due insiemi a e b è l’insieme c 
    che contiene gli elementi presenti solo in uno dei due 
    (o in altre parole che non sono presenti nell’insieme unione di a con b 
    ).  Si implementi una funzione simmdiff(a,b che, dati due insiemi a e b  
    restituisca l’insieme risultato della differenza simmetrica tra a e b,
    nel quale il valore massimo viene raddoppiato.
*/

function union(a, b)
{
    let result = {};

    for(let i in a)
    {
        result[i] = 1;
    }
    for(let j in b)
    {
        result[j] = 1;
    }
    return result;
}

function intersection(a, b)
{
    let result = {};
    for(let i in a)
    {
        for(let j in b)
        {
            if(i == j)
            {
                result[i] = 1;
            }
        }
    }
    return result;
}

function simmdiff(a, b)
{
    let result = {}; 
    let unionSet = union(a, b);
    let intersectionSet = intersection(a, b);

    for(let i in unionSet)
    {
        if(!(i in intersectionSet))
        {
            result[i] = 1;
        }
    }
    
    let maxElement = 0;
    for(let elem in result)
    {
        if(Number(elem) > Number(maxElement))
        {
            maxElement = 2 * Number(elem);
        }
    } 
    
    result[maxElement] = 1;
    delete result[maxElement/2]
    return result;


}


a = {0:1, 4:1, 5:1, 9:1, 10:1, 544:1}

b = {0:1, 9:1, 22:1, 544:1}
x = {}

console.log(simmdiff(a,b)); // {4:1, 5:1, 10:1, 44:1}
//console.log(union(a, b))
//console.log(intersection(a, b))
