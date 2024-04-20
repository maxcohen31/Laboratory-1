/*
    Si consideri una struttura dati ad albero binario, i cui nodi sono oggetti con quattro proprietà: 
    sx e dx, che riferiscono rispettivamente al figlio sinistro e al figlio destro del nodo stesso; 
    val e conta, due valori interi. Le proprietà sx e dx sono opzionali.

    Si scriva in TS una funzione contaAlbero(T) che, dato un albero binario T come argomento, 
    conti per ogni nodo t in T (inclusa la radice) il numero di nodi appartenenti al sotto-albero destro 
    di cui t è radice (t escluso). Questo valore deve essere scritto in conta.



    Nota: Si assuma che il valore di conta in ogni nodo in T sia inizialmente -Infinity.

    Nota: NON USATE IL TIPO any.



Esempio:

    let Qa = {val: 2, conta: -Infinity, sx: {val: 4, conta: -Infinity, sx: {val: 6, conta: -Infinity}, 
    dx: {val: 6, conta: -Infinity, dx:{val: 8, conta: -Infinity}}}, dx: {val: 7, conta: -Infinity, 
    sx: {val: 8, conta: -Infinity}}};



    Dopo invocazione contaSotto(Qa), si ha che:

Qa -> {val: 2, conta: 2, sx: {val: 4, conta: 2, sx: {val: 6, conta: 0}, dx: {val: 6, conta: 1, dx:{val: 8, conta: 0}}}, dx: {val: 7, conta: 0, sx: {val: 8, conta: 0}}}

*/

interface Node {
    val: number,
    conta: number,
    sx?: Node,
    dx?: Node
}

function contaAlbero(t?: Node): number {
    if (!t) {
        return 0;
    }

    let contaSx = contaAlbero(t.sx);
    let contaDx = contaAlbero(t.dx);

    t.conta = contaDx;
   
    return 1 + contaSx + contaDx;
}
