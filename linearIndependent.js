/*
    Si scriva una funzione JavaScript lindip(A) che, 
    dato un argomento A che è una matrice di numeri naturali positivi (garantita almeno 2x2), 
    realizzata come un array di righe, ciascuna delle quali è un array di numeri, 
    restituisca true se e solo se la matrice contiene almeno due righe linearmente dipendenti fra di loro.

    Ricordate che due vettori X e Y (nel nostro caso, vettori-riga dentro A) 
    sono linearmente dipendenti se esiste un numero k tale che X=kY.

*/

function checkLinear(v1, v2)
{
    for(let i = 0; i < v1.length; i++)
    {
        let k = (v1[i] / v2[i]);

        if(k != (v1[0]/v2[0]))
        {
            return false;
        }
    }
    return true;
}


function lindip(matrix)
{
    let row = matrix.length;
    let col = matrix[0].length;

    for(let i = 0; i < row; i++)
    {
        for(let j = i+1; j < col; i++)
        {
            if(!checkLinear(matrix[i], matrix[j]))
            {
                return false;
            }
        }
    }
    return true;
}


var m=[
  [ 2, 4, 6 ],
  [ 5, 7, 1 ],
  [ 3, 3, 8 ],
  [ 1, 2, 3 ]
]




console.log(lindip(m))
