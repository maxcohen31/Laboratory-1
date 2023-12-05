/*
    Scrivere una funzione checkBST(tree) che, dato un albero tree, 
    ritorna true se è un albero binario di ricerca, 
    false altrimenti. Si assuma che in caso di valore uguale, 
    un elemento sia inserito nel sottoalbero di destra. Come visto a lezione, 
    gli alberi sono codificati tramite un oggetto con proprietà: 
    val per il valore, sx per il sottoalbero di sinistra, e dx per il sottoalbero di destra.



    Un albero binario di ricerca (Binary Search Tree) ha le seguenti proprietà:



    -Il sottoalbero sinistro di un nodo x contiene soltanto i nodi con chiavi minori della chiave del nodo x;

    -Il sottoalbero destro di un nodo x contiene soltanto i nodi con chiavi maggiori della chiave del nodo x;

    -Il sottoalbero destro e il sottoalbero sinistro devono essere entrambi due alberi binari di ricerca.

     per calcolare il massimo, o il minimo di un sottoalbero potete usare le seguenti funzioni: maxNode, minNode.
*/


function BST(tree)
{
    if(!tree) { return true; }
        
    let rightNode = maxNode(tree.dx);
    let leftNode = maxNode(tree.sx);

    if(tree.val && tree.val > leftNode && tree.val <= rightNode)
    {
        return true;
    }
    return false;

}



function maxNode(tree) {
    if (tree === null){
        return - Infinity;
    }

    return Math.max(tree.val, Math.max(
        maxNode(tree.sx),
        maxNode(tree.dx)))
}

function minNode(tree) {
    if (tree === null){
        return Infinity;
    }

    return Math.min(tree.val, Math.min(
        minNode(tree.sx),
        minNode(tree.dx)))
}
