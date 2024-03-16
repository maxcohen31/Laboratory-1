/*
    Usando JavaScript, si aggiunga a tutte le stringhe del programma un metodo rotr() con il seguente comportamento:

    se la stringa è vuota, la lascia immutata
    altrimenti, toglie il primo carattere dall'inizio della stringa e lo aggiung in coda


    Per esempio, "pippo".rotr() ha come valore "ippop".

*/


String.prototype.rotr = function () {
    if (this.length === 0) {
        return "";
    } else {
        return this.substring(1) + this[0];
    }
}

