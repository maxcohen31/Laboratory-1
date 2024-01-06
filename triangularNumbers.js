/*
    Scrivere una funzione usando la ricorsione che calcola
    la somma dei primi n numeri trangolari
*/

function triangular(n)
{
    if(n == 0) { return 0; }
    return n + triangular(n-1);
}

console.log(triangular(4));
