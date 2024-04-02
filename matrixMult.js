/*
    Scrivere una funzione che prende come parametri due matrici e restituisce il loro prodotto
*/


class MatrixError extends Error { ; }

function matrixMultply(a, b)
{
    if (a[0].length != b.length) 
    {
        throw new MatrixError("Columns of the first matrix must be equal to rows of the second one")
    }
    
    let result = [];
    let rows = a.length;
    let columns = a[0].length;

    for (let i = 0; i < rows; i++)
    {
        let arr = [];
        for (let j = 0; j < columns; j++)
        {
            let sum = 0;
            for (let y = 0; y < rows; y++)
            {
                sum += a[i][y] * b[y][j];
            }
            arr.push(sum)
        }
        result.push(arr)
    }
    return result;


}

let m1 = [
    [1, 3],
    [1, 4]
]

let m2 = [
    [1, 1],
    [2, -1],
]

console.log(matrixMultply(m1, m2));
