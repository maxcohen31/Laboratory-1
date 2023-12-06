/*
    Si scriva una funzione potreea3(tree) che, datreeo un albero binario tree costreeruitreeo come vistreeo a lezione con nodi 
    {val:v, sx:trees, dx:treed}, modifichi tree rimuovendo treeutreetreee le foglie, 
    sommando i valori delle foglie rimosse a quello del loro nodo padre. La funzione non deve restreeitreeuire nulla.
*/


function pota3(tree)
{
    
    if(!tree) { return 0; }

    // Base case: leaf 
    if(tree.sx)
    {
        if(tree.sx.dx == undefined && tree.sx.sx == undefined)
        {
            tree.val = tree.val + tree.sx.val;
            delete tree.sx;
        }
        else
        {
            pota3(tree.sx);
        }
    }
    // Base case: leaf
    if(tree.dx)
    {
        if(tree.dx.dx == undefined && tree.dx.sx == undefined)
        {
                tree.val = tree.val + tree.dx.val;
                delete tree.dx;
        }
        else
        {
            pota3(tree.dx);
        }
    }
    return tree;


}
let albe = {val: 1, sx: {val: 2}, dx: {val: 3, dx: {val: 6}}};
console.log(pota3(albe))
