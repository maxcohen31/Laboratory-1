/*
    Si scriva una funzione JS minDepth(T), 
    dove T è un albero binario come descritto a lezione 
    (oggetti con chiavi val e sx e dx). 
    La funzione deve restituire la minima profondità dell'albero T: 
    la lunghezza del cammino più corto tra tutti quelli che vanno dalla radice alle sue foglie 
    (la radice ha profondità zero).
*/

function minDepth(T)
{
    if(!T)
    {
        return 0;
    } 
    
    // Root
    if(!T.sx && !T.dx)
    {
        return 1;
    }
    // There's only the right tree 
    if(!T.sx && T.dx)
    {
        return Math.min(minDepth(T.dx)) + 1;
    }

    // There's only the left tree 
    if(!T.dx && T.sx)
    {
        return Math.min(minDepth(T.dx)) + 1;
    }

    return Math.min(minDepth(T.sx), minDepth(T.dx)) + 1;
}


let albe = {val: 1, sx: {val: 2, sx: {val: 4}, dx: {val: 5}}, dx: {val: 3, dx: {val: 6}}};
console.log(minDepth(albe))
