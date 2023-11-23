/*
        Diciamo che un nodo di un albero binario è in equilibrio se il suo valore è >= del valore del suo figlio sinistro
(se esiste), ed è <= del valore del suo figlio destro (se esiste). Diciamo che un albero binario è in equilibrio se tutti i suoi nodi sono in equilibrio.

    Si scriva una funzione inEquilibrio(t) che dato un albero binario 
    (i cui nodi sono implementati come visto a lezione come oggetti con chiavi val, sx e dx) restituisca true se t è in equilibrio, e false altrimenti.

*/




function inEquilibrio(tree) 
{
    if(tree == undefined || tree.val == undefined)
    {
        return true;
    }

    // Controlla i nodi del sottoalbero sinistro
    if(tree.sx != undefined && tree.sx.val != undefined && tree.val < tree.sx.val)
    {
        return false;
    }

    // Controlla i nodi del sottoalbero destro
    if(tree.dx != undefined && tree.dx.val == undefined && tree.val > tree.dx.val)
    {
        return false;
    }

    if(!(inEquilibrio(tree.sx)) && !(inEquilibrio(tree.dx)))
    {
        return false;
    }
    return true;

}

// Soluzione più compatta - Giorgia Marini
function inEquilibrio2(tree)
{
    if(!tree)
    {
        return true;
    }

    if(tree.sx && (tree.val >= tree.sx.val) || (tree.dx && tree.dx.val <= tree.val))
    {
        return false;
    }
    return inEquilibrio2(tree.sx) && inEquilibrio2(tree.dx);
}


let T = {val:7,sx:{val: 4, sx: {val: 3}, dx: {val:12, sx: {val: 4, dx:{val:8}, sx:{val: 2}}}}, dx:{val: 11, dx: {val: 18}, sx: {val:3, sx: {val: 2}}}} 

console.log(inEquilibrio(T));

let T2 = {val: 1, sx: {val: 6, sx: {val: 5}}}
console.log(inEquilibrio(T2))
