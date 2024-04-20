/*
    Si scriva una funzione Typescript sxdx(T) che, 
    ricevuto come argomento un albero binario T strutturato come visto a lezione 
    (oggetti con chiavi val di tipo string, sx che contiene il nodo sinistro, e dx che contiene il nodo destro), 
    e con valori di tipo stringa, 
    restituisca una coppia [l,r] in cui l è la stringa che si ottiene concatenando i valori di tutti i nodi, 
    partendo dalla radice e scendendo sempre a sinistra finché è possibile, 
    mentre r è la analoga stringa ottenuta scendendo sempre a destra.

    La soluzione deve essere scritta in TypeScript, definendo opportunamente i tipi, e non usando any o unknown.
*/

interface Alberobinario {
    sx?: Alberobinario,
    dx?: Alberobinario,
    val: string
}

type stringArr = [string, string];


function rightStringTree(tree: Alberobinario): string {
    if (!tree.dx) {
        return tree.val;
    }
     return tree.val + rightStringTree(tree.dx);
}

function leftStringTree(tree: Alberobinario): string {
    if (!tree.sx) {
        return tree.val;
    }
    return tree.val + leftStringTree(tree.sx);
}

function sxdx(tree: Alberobinario): stringArr {
    return [leftStringTree(tree),rightStringTree(tree)];
}

var tr = {
    val: "a",
    sx: {
        val: "b",
        sx: {val: "c"},
        dx: {val: "d"}
    },
    dx: {
        val: "e",
        sx: {val: "f", sx: {val: "z"}},
        dx: {val: "g", sx: {val: "x"}, dx: {val: "y", sx: {val: "w"}}}
    }
}

console.log(sxdx(tr));
