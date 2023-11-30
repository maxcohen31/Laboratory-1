/*
    Si scriva una funzione verifica(T) che, 
    dato un albero binario non vuoto T come definito a lezione 
    (oggetti con chiavi val e sx e dx), 
    restituisce true se il valore memorizzato in ogni nodo è maggiore o uguale
    di quello memorizzato nei suoi due figli, 
    e false altrimenti. La proprietà è vera per una foglia.



    Esempio:

    Se Q = {val: 9, sx: {val: 7, sx: {val: 6}, dx: {val: 6, dx:{val: 4}}}, dx: {val: 7, sx: {val: 6}}}, allora verifica(Q) restituisce true



    Se Q = {val: 9, sx: {val: 7, sx: {val: 6}, dx: {val: 6, dx:{val: 14}}}, dx: {val: 9, sx: {val: 7}}}, allora verifica(Q) restituisce false
*/


function verifica(T)
{
    // True not T or T undefined
    if(!T || T.val == undefined)
    {
        return true;
    }

    // Check if conditions are false 
    if(T.sx && T.val < T.sx.val || T.dx && T.val < T.dx.val) 
    { 
        return false;
    }
    
    // If both conditions fail we get true
    if(verifica(T.sx) && verifica(T.dx) && T.sx && T.dx)
    {
        return false;
    }
    return true; 
}

