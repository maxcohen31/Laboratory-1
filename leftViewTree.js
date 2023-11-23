/*
    Si scriva una funzione left_view che stampi i nodi a sinistra dell'albero
*/


function left_view(tree) 
{
    let result = [];
    
    function getNodes(tree, level)
    {
        if(tree == undefined)
        {
            return undefined;
        }

        if(level == result.length)
        {
            result.push(tree.val)
        }

        getNodes(tree.sx, level + 1);
        getNodes(tree.dx, level + 1);
    }
    
    getNodes(tree, 0);

    return result;
}


let albe = {val: 1, sx: {val: 2}, dx: {val: 3, dx: {val: 6}}};
console.log(left_view(albe));
