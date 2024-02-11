/*
    Si scriva in JavaScript una funzione raddoppia(n) (con n numerico) che restituisca una funzione la quale, 
    invocata senza argomenti, restituisca la prima volta 2*n, la seconda volta 4*n, la terza volta 8*n, ecc. 
    In altri termini, alla k-esima invocazione la funzione deve restituire 2^k*(n). 
    Si noti che raddoppia(n) può essere invocata più volte, con valori di diversi di n, 
    e ciascuna delle funzioni restituite dovrà restituire la propria successione di valori, 
    indipendente dalle altre

*/

function raddoppia(n) {
    return function() { n = 2*n; }
}


console.log(raddoppia(2));
