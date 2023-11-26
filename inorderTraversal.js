/*
    Scrivere una funzione che stampi l'albero da sinistra a destra
*/


function inorderTraversal(tree)
{
    if(!tree || tree == undefined)
    {
        return undefined;
    }
    
    inorderTraversal(tree.sx);
    console.log(tree.val);
    inorderTraversal(tree.dx);


}


let albe = {val: 1, sx: {val: 2, sx: {val: 4}, dx: {val: 5}}, dx: {val: 3, dx: {val: 6}}};
console.log(inorderTraversal(albe))
