/*
    Si definisca una funzione media(arr, a , b) che dato un array arr di n elementi ritorni la 
    media sull'intervallo [a, b] se a <= b < n, altrimenti ritorni undefined
*/

function media(arr, a, b)
{
    if(b < a || arr.length < b || arr.length == 0) { return undefined; }
    
    let mean = 0;
    let counter = 0;

    for(let i = a; i <= b; i++)
    {
        counter++;
    }
    
    for(let j = a; j <= b; j++)
    {
        mean += arr[j];
    }
    return mean / counter;

}

console.log(media([12, -9, 3, 3], 1, 3));
console.log(media([10, -3, 3.4, 0.2], 0, 1));
