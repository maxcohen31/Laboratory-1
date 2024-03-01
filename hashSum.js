/*
    Scrivere un algoritmo di complessità lineare al caso medio,
    pr verificare se esistono due elementi nell'array aventi somma k
*/


function sumTwoElements(arr, k)
{
    let d = new Set;
    for(let i = 0; i < arr.length; i++)
    {
        let complement = k - arr[i];
        if(complement in d)
        {
            return [d[complement], i]
        }
        d[complement] = i;
    }
    return [-1,-1];
}


let x = [1, 3, 4, 7, 73, 12, 43, 12, 5];


console.log(sumTwoElements(x, 80))
