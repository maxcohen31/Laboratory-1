/*
    La rappresentazione Binary-Coded Decimal (BCD) si basa sull'idea di 
    rappresentare ogni cifra di un numero decimale attraverso la sua rappresentazione binaria, 
    ma lasciando come moltiplicatore la base 10 fra le cifre. Poiché le cifre decimali esprimono valori fra 0 e 9, 
    sono necessari 4 bit per rappresentare una cifra decimale 
    (con 3 bit potremmo avere al massimo 0-7). 
    Con un byte, ovvero 8 bit, potremo dunque rappresentare in BCD numeri decimali fra 0 e 99. 
    Questa rappresentazione -- curiosa dal punto di vista matematico -- ha alcuni vantaggi pratici, 
    per esempio è molto facile usare i bit di un numero codificato 
    in BCD come linee di controllo di un display a 7 segmenti 
    (trovate una simulazione interattiva del circuito elettronico relativo alla pagina 
    https://www.sgart.it/IT/elettro/decoder-bcd-7-segmenti/post).

*/

function bcd(n)
{
    let a = n % 10;
    let b = (n - n % 10)/10; 
    let arr = [];
    
    for(let i = 3; i >= 0; i--){
        arr[i] = b & 1;
        console.log(arr[i])
        b >>= 1;
        arr[i + 4] = a & 1;
        a >>= 1;
    }
    return arr
}




//console.log(bcd(73));
console.log(bcd(33));
