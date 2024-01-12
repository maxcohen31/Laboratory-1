/*
    Si scriva una funzione JavaScript deep(T) che, 
    ricevuto un albero binario (non-vuoto) T rappresentato come visto a lezione,
    restituisca il valore del campo val del nodo più profondo 
    (cioè, quello più lontano dalla radice). In caso di parità di profondità, 
    la funzione deve restituire il valore del nodo più a sinistra.
*/

/*
function findDepth(T)
{
    if(T == null) { return -1; }

    let leftDepth = findDepth(T.sx);
    let rightDepth = findDepth(T.dx);

    return Math.max(leftDepth, rightDepth) + 1;
}
*/

function deep(T)
{
    let maxLevel = 0;
    let node = T.val;

    function findNode(T, level)
    {
        if(!T)
        {
            return null;
        }

        if(level > maxLevel)
        {
            maxLevel = level;
            node = T.val;
        }

        findNode(T.sx, level+1);
        findNode(T.dx, level+1);
    }

    findNode(T, 0)
    return node;

}

var T=
{   val: 5,
    sx: {   val: 7,
            sx: {   val: 'c' },
            dx: {   val: 5,
                    sx: {val: 10}
                }
        },
    dx: {   val: 'a',
            sx: {   val: 'b',
                    dx: {val: 7}
                },
            dx: {   val: 1}
        }
}

T2 = {val: 4}

console.log(deep(T));
console.log(deep(T2));
//console.log(findDepth(T))
