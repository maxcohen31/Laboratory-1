/*
    Scrivere una funzione che prende in come input un albero binario di ricerca e una chiave k
    e restituisca k se presente, -1 altrimenti.
*/

interface Tree {
    val: number;
    sx?: Tree;
    dx?: Tree;
}

function findKeyBST(bst: Tree|undefined, k: number): number|undefined {
    if (!(bst)) {
        return undefined;
    }

    if (bst.val === k) {
        return bst.val;
    }

    if (bst.val < k) {
        return findKeyBST(bst.dx, k)
    } else {
        return findKeyBST(bst.sx, k)
    }
}

let tree: Tree = {val: 10, sx: {val: 4, sx: {val: 1}, dx: {val: 7}}, dx: {val: 13, sx: {val: 2}, dx: {val: 8}}};
console.log(findKeyBST(tree, 1));
console.log(findKeyBST(tree, 13));
console.log(findKeyBST(tree, 45));
