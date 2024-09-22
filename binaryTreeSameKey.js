/*
    Si scriva un algoritmo efficiente che dato un albero binario T a chiavi intere, restituisca il numero
    di nodi di T i cui due figli hanno la stessa chiave.
*/


function sameKey(tree) {
    if (!tree) {
        return 0;
    }
    let c = 0;
    // Verifichiamo che la proprietà sia verificata
    if (tree.sx && tree.dx && (tree.sx.val === tree.dx.val)) {
        c += 1;
    }

    return c + sameKey(tree.sx) + sameKey(tree.dx);

}

let t = {val: 1, sx: {val: 3, sx: {val: 2}, dx: {val: 2}}, dx: {val: 5, sx: {val: 1}, dx: {val: 1}}}
console.log(sameKey(t))
