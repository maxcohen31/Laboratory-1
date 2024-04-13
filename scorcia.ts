/*
    [scorcia] Funzione che prende due parametri s (stringa o array di stringhe) e n (numero, opzionale). 
    Se n non è definito, viene restituito s non modificato; altrimenti, 
    viene restituita una copia di s contenente gli elementi fino all'n-esimo (escluso)
*/

function scorcia(s: string|string[], n?: number|undefined): string|string[]
{
    if (!n)
    {
        return s;
    } 

    if (typeof s === "string") 
    {
        return s.substring(0, n);
    }

    return s.slice(0, n);
}

console.log(scorcia("ciao", 3))
console.log(scorcia(['s', 'c', 'o', 'r', 'c', 'i', 'a'], 3))
console.log(scorcia("ciao", undefined))
