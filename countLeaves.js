/*
    Scrivere un algoritmo che calcoli il numero di foglie in un albero binario
    e analizzarne la complessità.

*/

function contaFoglie(tree)
{
    if (!tree) { return 0; }
    if (!tree.dx && !tree.sx) { return 1; }
    else { return contaFoglie(tree.sx) + contaFoglie(tree.dx); }
}


t = {val: 4, sx: {val: 3}, dx: {val: 9}}
console.log(contaFoglie(t))
