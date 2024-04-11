/*
    Si scriva una funzione che, dato un array di numeri , 
    restituisce un altro array contenente gli elementi di a senza ripetizioni e ordinati in modo strettamente crescente.
*/

function ordina(a)
{
    let newArray = [...new Set(a)];
    return newArray.sort((x, y) => (x - y)) 
}
