/*
    Scrivete un frammento di codice JavaScript che, una volta eseguito, 
    aggiunga a tutte le stringhe del vostro programma un metodo titolo() 
    il cui effetto è di restituire la stringa su cui è invocato, 
    ma tutta in maiuscolo e con uno spazio aggiunto fra le lettere della stringa originale.



    Esempi (dopo aver aggiunto il metodo)

    “pippo”.titolo() → “P I P P O”

    `3*2 fa ${3*2}`.titolo() → “3 * 2  F A  6”

    var s=”Pluto”; s.titolo() → “P L U T O”   

*/

String.prototype.titolo = function ()
{
    return this.toUpperCase().split("").join(" ");
}

let x = "pippo"
console.log(x.titolo())
