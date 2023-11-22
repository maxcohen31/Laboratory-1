/*
    Trees in Javascript and their representation  

    A tree is a connected acyclic graph
    
*/



/*
        Francesco
           /\
          /  \
         /    \
        /      \
    Giuseppe   Luigi
    
*/
let ciccio = {val: "Francesco", sx: {val: "Giuseppe"}, dx: {val: "Luigi"}};



// 1. Scrivere una funzione maxT(tree) che - dato un albero tree - restituisce il valore massimo tra quelli contenuti nei suoi nodi 

T = {val: 7, sx: {val:3}, dx: {val:12, sx: {val: 4, dx: {val:3}, sx: {val: 8}}}}
T2 = {val: 1, sx: {val:3, sx: {val:7}, dx: {val:8}}, dx: {val:5, sx: {val:9}, dx: {val:10}}};


function maxT(tree)
{   
    let maxSx = -Infinity;
    let maxDx = -Infinity;

    if(tree.sx != undefined)
    {
        maxSx = maxT(tree.sx);
    }
    if(tree.dx != undefined)
    {
        maxDx =  maxT(tree.dx);
    }
    return Math.max(tree.val, maxSx, maxDx);
}

//console.log(maxT(T));

// 2. Scrivere una funzione sommaT(tree) che - dato un albero tree - restituisce la somma dei valori contenuti nei suoi nodi

function sommaT(tree)
{
    if(tree == undefined)
    {
        return 0;
    }
    
    return tree.val + sommaT(tree.sx) + sommaT(tree.dx);
}

//console.log(sommaT(T2));
//console.log(sommaT(T));

// 3. Scrivere una funzione isInTree(tree,x) che - dato un albero tree e un valore x - restituisce true se x è presente in almeno un nodo dell’albero (false altrimenti)


function isInTree(tree, x)
{
    if(tree == undefined)
    {
        return false;
    } 

    return (tree.val == x) || isInTree(tree.sx, x) || isInTree(tree.dx, x)
}

//console.log(isInTree(T, 4))
//console.log(isInTree(T2, 32));


// 4. Scrivere una funzione contaT(tree,x) che - dato un albero tree e un valore x - restituisce il conto delle occorrenze di x nell'albero


function contaT(tree, x)
{
    if(tree == undefined)
    {
        return 0;
    }
        
    let countX = 0; 

    if(isInTree(tree.sx, x))
    {
        countX++;
    }
    if(isInTree(tree.dx))
    {
        countX++;
    }
    if(isInTree(tree.val == x))
    {
        countX++;
    }

    return countX;
}

//console.log(contaT(T, 3));

// 5. Scrivere una funzione swap(tree) che - dato un albero tree - scambia i rami destro e sinistro della radice

function swapT(tree)
{
    if(tree == undefined)
    {
        return undefined
    }
    
    let tmpBranch = tree.sx;
    tree.sx = tree.dx;
    tree.dx = tmpBranch;

}

// 6. Scrivere una funzione prune(tree,val) che - dati un albero tree e un valore val - “pota” l’albero rimuovendo tutti i rami che iniziano da nodi il cui valore è val

function prune(tree, val)
{
    if(tree && tree.val == val)
    {
        delete tree.sx;
        delete tree.dx;
    }
    else
    {
        if(tree)
        {
            prune(tree.sx, val);
            prune(tree.dx, val);
        }
    }
}

//prune(T2, 3);
//console.log(T2);

//7. Scrivere una funzione size(tree) che - dato un albero tree - restituisce il numero di nodi contenuti nell’albero
function size(tree)
{
    if(tree == undefined)
    {
        return 0;
    }
    
    let sizeTree = 0;

    if(tree)
    {
        sizeTree = 1 + size(tree.dx) + size(tree.sx);
    }
    return sizeTree;

}

//console.log(size(T));
//console.log(size(T2));

//8. Scrivere una funzione even_odd_visit(tree) che - dato un albero tree - stampa i valori dei nodi attraversati implementando la seguente visita: se il valore di un nodo è pari, visita il figlio sinistro; altrimenti, visita il figlio destro

function even_odd_visit(tree)
{
    //if(tree == undefined)
    //{
    //    return undefined;
    //}

    if(tree)
    {
        console.log(tree.val)

        if(tree.val % 2 == 0)
        {
            even_odd_visit(tree.sx);
        }
        else
        {
            even_odd_visit(tree.dx);
        }
    }
}

//console.log(even_odd_visit(T));

