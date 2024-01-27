/*
    Si scriva una funzione JavaScript lar(T) che, 
    ricevuto come argomento un albero binario T strutturato come visto a lezione, 
    e con valori di tipo stringa, 
    restituisca una coppia [l,r] in cui l è la stringa che si ottiene concatenando i valori ditutti i nodi, 
    partendo dalla radice e scendendo sempre a sinistra finché è possibile, 
    mentre r è la analoga stringa ottenuta scendendo sempre a destra.

*/

function lar_sx(T)
{
    if(!T.val.sx)
    {
        return T.val;
    }
    return T.val + T.sx.val;
}


function lar_dx(T)
{
    if(!T.val.dx)
    {
        return T.val;
    }
    return T.val + T.dx.val;
}



function lar(T)
{
    return [lar_sx(T), lar_dx(T)];
}
