/*
    Scrivere un funzione che restituisce true se l'albero binario passato come 
    parametro è completamente bilanciato.

    Un albero binario è COMPLETO se ogni nodo ha esattamente due figli eccetto le foglie.
    Un albero è COMPLETAMENTE BILANCIATO se è COMPLETO e tutte le sue foglie sono allo stesso livello.


*/

function altezza(t)
{
    if (!t)
    {
        return -1;
    }
    
    let height_sx = altezza(t.sx);
    let height_dx = altezza(t.dx);

    return 1 + Math.max(height_sx, height_dx);
}

function abcb(tree)
{
    function full(node, level)
    {
        // Empty tree
        if (!node)
        {
            return [true, -1];
        }

        // Check if left tree is balanced and it's depth
        let [balanced_sx, height_sx] = full(node.sx, level+1);
        // check if right tree is balanced and it's depth
        let [balanced_dx, height_dx] = full(node.dx, level+1);
        
        // If both left tree and right tree are balanced and have the same depth return <true, level>
        let is_balanced = balanced_sx && balanced_dx && (height_sx === height_dx);
        let height = 1 + Math.max(height_sx, height_dx);
        return [is_balanced, height];
    }
    
    // First call
    let [result, level] = full(tree, 0);
    return [result, level]

}


let t = {val: 3, sx: {val: 2, sx: {val:1}, dx: {val:8}}, dx: {val: 4, sx: {val:2}, dx: {val:5}}}
console.log(abcb(t))
