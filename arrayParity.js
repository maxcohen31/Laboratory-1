/*
    Scrivere una funzione che dato in input un array di interi 
    restituisca lo stesso array ordinato nel seguente modo:
    tutti i numeri pari spostati a sinistra e i dispari spostati a destra
*/

function parityArr(arr)
{
    let i = 0;
    let j = arr.length-1;

    while(i < j)
    {
        while(arr[i] % 2 == 0)
        {
            i++;
        }
        while(arr[j] % 2 == 1)
        {
            j--;
        }
        if(i < j)
        {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    return arr;
}

console.log(parityArr([3,2,7,8,1,4])) // [4, 2, 8, 7, 1, 3]
