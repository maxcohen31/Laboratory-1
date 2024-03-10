/*
    Si scriva una funzione somma(a) che, dato un array a di oggetti contenenti un campo valore, 
    calcoli RICORSIVAMENTE la somma dei valori di tali oggetti. 

*/

function somma(a)
{
    if (a.length === 0) 
    {
        return 0;
    }

    [first, ...elements] = a;
    return first.valore + somma(elements)
}



let array = [
    {valore: 3},
    {valore: 5},
    {valore: 2},
    {valore: 10},
]

console.log(somma(array))
