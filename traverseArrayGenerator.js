/*
    Dato un array di interi scrivere un generatore che esegua la seguente operazione:
    
    arr = [1, 2, 3, 4, 5] -> 1, 5, 2, 4, 3

*/

function* printArr(array)
{
    let i = 0;
    let j = array.length - 1;
    
    while (i <= j)
    {
        yield array[i];
        if (i < j) 
        { 
            yield array[j]; 
        }
        i++;
        j--;
    }
}

let x = [1, 2, 3, 4, 5];

for (let i = 0; i < 6; i++)
{
    let y = printArr(x);
    console.log(y.next())
}
