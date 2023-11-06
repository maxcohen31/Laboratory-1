/*
    Si scriva una funzione JavaScript evenout(n) che, ricevuto come argomento un intero n≥0, restituisca un altro intero m    così definito:

    sia b la rappresentazione binaria di n
    se b contiene un numero pari di 1, allora viene aggiunto uno 0 a destra di b
    se b contiene un numero dispari di 1, allora viene aggiunto un 1 a destra di b
    m è il valore decimale corrispondente a b modificato come indicato sopra
    Si noti che alla fine, il numero di bit a 1 in m sarà sempre pari.
*/


function evenout(n)
{
    let contaBit1 = 0;
    let result = n;

    while(n > 0)
    {
        contaBit1 += (n & 1);
        n = n >>> 1;
    }

    if(contaBit1 % 2 == 1)
    {
        // Inserisce 1 a destra
        result += (1 + result << 0);  
    }
    else
    {
        // Inserisce 0 a destra
        result += result << 0;
    }
    return result;
}


console.log(evenout(11));
console.log(evenout(12));

