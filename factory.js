/*
    Si scriva una funzione fabbrica(k) che abbia il seguente comportamento.

    Ogni volta che viene invocata, 
    fabbrica(k) restituisce una funzione f tale che la chiamata f() 
    restituisce (sempre) il valore k.

    Esempio

    var f=fabbrica(1)

    var g=fabbrica(2)

    var h=fabbrica(true)

    f() → 1

    g() → 2

    h() → true
*/

function fabbrica(k)
{
    return () => k;
}

console.log(fabbrica(2));
console.log(fabbrica(true));
