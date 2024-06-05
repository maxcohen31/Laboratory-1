/*
    Scrivere un algoritmo che restituisca il successore di un dato nodo di un albero binario di ricerca.
*/


function successor(root, node) {
    
    let succ = null;
    let current = root;

    while (current != null) {
        // Il nodo è più grande del nodo attuale, allora cerchiamo a destra
        if (node.val >= current.val) {
            current = current.dx;
        // Se il nodo è più piccolo del nodo attuale cerchiamo a sinistra 
        // e aggiorniamo succ 
        } else {
            succ = current;
            current = current.sx;
        }
    }
    return succ.val;
}

let t = {val: 10, sx: {val: 4, sx: {val: 1}, dx: {val: 7}}, dx: {val: 13}};
console.log(successor(t, {val: 7})) // 10
