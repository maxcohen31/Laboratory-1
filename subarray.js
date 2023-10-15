/*
    Si scriva una funzione subSeq(Pagliaio, ago)che, dati come argomenti due array con elementi di qualunque tipo,
    restituisca true se l’array è una sottosequenza dell’array 'ago' è una sottosequenza dell'array 
    'Pagliaio'(ovvero, esiste un punto all’interno di 'Pagliaio' in cui si trovano tutti gli elementi di 
    consecutivamente e nello stesso ordine).
*/


function subSeq(sub, arr)
{
    let counter = 0
    for(let i = 0; i < arr.length; i++)
    {
        {
            if(sub[counter] === arr[i])
            {
                counter++
            }
        }
    }
    return counter === sub.length
}

console.log(subSeq([1, 2], [4, 7, 2, 1, 4]));
console.log(subSeq(['a', 'g', 'o'], ['P', 'a', 'g', 'l', 'i', 'a', 'i', 'o']));
console.log(subSeq([true,false,true],[true,true,false,true,true]))
console.log(subSeq([1, 2, 3], [1, 2, 3]));
console.log(subSeq("ago", "Pagliaio"));
