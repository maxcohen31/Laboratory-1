/*
    Implementaione della moltiplicazione egizia
*/

function egypt(a, b)
{
    let result = 0;
    while(a > 0)
    {
        if(a % 2 != 0)
        {
            result = result + b;
        }
       
        // Divide a by 2 and multiply b by 2
        a = Math.floor(a / 2);
        b = 2*b;
    }
    return result;
}


console.log(egypt(7, 3))
