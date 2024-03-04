





function filter(l, p)
{
    let arr = new Array;
    // Se la lista esiste e il predicato è soddisfatto, pusha l'elemento
    if (l)
    {
        if (p(l.val))
        {
            arr.push(l.val);
        }
        else
        {
            // Chiama filter sul prossimo nodo se il èredicato è falso
            arr.concat(filter(l.next, p));
        }
    }
    return arr;
}


function sortedFilter(l, p)
{
    let result = filter(l, p);
    result.sort((a, b) => {
        if (a[0] == b[0]) 
        { 
            return a[1] - b[1]; 
        }
        else 
        { 
            return a[0] - b[0]
        }
    }) 
    return result;
}







let l = {val: [4,5],

next: {val: [-3,45],

next: {val: [-2,-2],

next: {val: [-3,12],

next: {val: [3,-5],

next: null}}}}}

console.log(filter(l, (x) => (x[0] * x[1] >= 0)));


