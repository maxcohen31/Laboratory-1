/*
    Progettare un algoritmo efficiente che, dato un albero binario t a chiavi intere,
    restituisca il numero di nodi di t i cui due figli hanno la stessa chiave.
*/


function conta(t) {
    let c = 0
    
    if (!t) {
        return 0;
    }
    // Verifichiamo che t è tale che t.sx.key == t.dx.key
    if (t.sx && t.dx && t.sx.val === t.dx.val) {
        c = 1;
    }
    else {
        c = 0;
    }

    return c + conta(t.sx) + conta(t.dx);
}

let t = {val:7,sx:{val: 4, sx: {val: 3}, dx: {val: 11, sx: {val: 4, dx:{val:8}, sx:{val: 2}}}}, dx:{val: 4, dx: {val: 18}, sx: {val:3, sx: {val: 2}}}};

console.log(conta(t)) // 1

