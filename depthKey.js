/*
    Dato un albero binario, 
    progettare un algoritmo che stampi chiave e profondità di ciascun nodo.
*/

function depthKey(tree, profondità)
{
    if (!tree) { return null; }
    console.log(tree.val, profondità)
    depthKey(tree.sx, profondità+1);
    depthKey(tree.dx, profondità+1);
}


t = {val: 4, sx: {val: 3}, dx: {val: 9}}
console.log(depthKey(t))
