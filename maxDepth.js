/*
    Dato un albero binario restituire la massima profondità
*/

function maxDepth(T)
{
    if(!T) { return - 1; }
    
    return Math.max(maxDepth(T.sx) + 1, maxDepth(T.dx) + 1);

}


let albe = {val: 1, sx: {val: 2, sx: {val: 4}, dx: {val: 5}}, dx: {val: 3, dx: {val: 6}}};
console.log(maxDepth(albe));


