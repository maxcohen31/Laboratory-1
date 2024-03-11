/*
    Scrivere un algoritmo che trovi il nodo di chiave massima in un albero binario di ricerca
*/


function findMaxBST(tree)
{
    if (tree == null) { return null; }

    while (tree.dx != null) 
    {
        tree = tree.dx;
    }

    return tree;
}
let t = {val: 5, sx: {val: 3}, dx: {val: 7}}
console.log(findMaxBST(t))
