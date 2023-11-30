/*
    Scrivere una funzione flattenTree(tree) che, dato un albero binario di ricerca tree, 
    ritorna un array contenente i valori dell'albero ordinati in maniera crescente. 
    Si assumano gli alberi binari codificati come oggetti aventi tre proprietà: 
    val per il valore (numerico), sx per il sottoalbero di sinistra, e dx per il sottoalbero di destra. 
    Si usi il valore null per determinare un albero vuoto, a cui deve corrispondere un array vuoto.
    
    ATTENZIONE: L'array va costruito già ordinato! NON si possono usare funzioni/algoritmi di sort.

    Nota: Si ricordi che un albero binario di ricerca (Binary Search Tree) ha le seguenti proprietà:
    - Il sottoalbero sinistro di un nodo X contiene soltanto nodi con valori minori del valore del nodo X;
    - Il sottoalbero destro di un nodo X contiene soltanto nodi con valori maggiori del valore del nodo X;
    - Il sottoalbero sinistro ed il sottoalbero destro sono entrambi due alberi binari di ricerca.

*/

function flattenTree(tree) 
{
    
    if(tree == null) { return []; }     
    
    return flattenTree(tree.sx).concat(tree.val).concat(flattenTree(tree.dx));

}


let T = {val:7,sx:{val: 4, sx: {val: 3}, dx: {val:12, sx: {val: 4, dx:{val:8}, sx:{val: 2}}}}, dx:{val: 11, dx: {val: 18}, sx: {val:3, sx: {val: 2}}}};

console.log(flattenTree(T));


