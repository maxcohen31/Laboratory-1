/*
    Si consideri una struttura dati ad albero binario, 
    i cui nodi sono oggetti con quattro proprietà: 
    sx e dx, che riferiscono rispettivamente al figlio sinistro e al figlio destro del nodo stesso; 
    val e piccolo, due valori interi. Le proprietà sx e dx sono opzionali.



    Si scriva in TS una funzione contaMin(T) che, dato un albero binario T come argomento, 
    calcoli per ogni nodo t in T (inclusa la radice) 
    il minimo dei val memorizzati nel sotto-albero di cui t è radice (t incluso). 
    Questo minimo deve essere scritto in piccolo. La funzione restituisce il valore piccolo della radice di T.



    Nota: Si assuma che il valore di piccolo in ogni nodo in T sia inizialmente infinito.

    Esempio:

    let Qd = {val: 2, piccolo: Infinity, sx: {val: 4, piccolo: Infinity, sx: {val: 6, piccolo: Infinity}, 
        dx: {val: 6, piccolo: Infinity, dx:{val: 8, piccolo: Infinity}}}, dx: {val: 7, piccolo: Infinity, 
        sx: {val: 8, piccolo: Infinity}}};



    contaMin(Qd) -> 2

    Qd -> {val: 2, piccolo: 2, sx: {val: 4, piccolo: 4, sx: {val: 6, piccolo: 6}, 
    dx: {val: 6, piccolo: 6, dx:{val: 8, piccolo: 8}}}, dx: {val: 7, piccolo: 7, sx: {val: 8, piccolo: 8}}}
*/


interface AlberoBinario {
    sx?: AlberoBinario|undefined;
    dx?: AlberoBinario|undefined;
    val: number;
    piccolo: number; 
}


function contaMin(tree: AlberoBinario|undefined): number {
    if (tree == undefined) {
        return Infinity;
    }

    let min_sx: number = contaMin(tree.sx);
    let min_dx: number = contaMin(tree.dx);
    tree.piccolo = Math.min(tree.val, min_sx, min_dx);
    return tree.piccolo;

}


let t = {val: 2, piccolo: Infinity, sx: {val: 4, piccolo: Infinity, sx: {val: 6, piccolo: Infinity}, dx: {val: 6, piccolo: Infinity, dx:{val: 8, piccolo: Infinity}}}, dx: {val: 7, piccolo: Infinity, sx: {val: 8, piccolo: Infinity}}};

console.log(contaMin(t));
