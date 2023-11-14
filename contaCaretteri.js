/*
    Si scriva una funzione conta_caratteri(stringa_a, stringa_b, stop_condition) che prende in input due stringhe stringa_a e stringa_b ed una funzione stop_condition che, dato un carattere, ritorna un valore booleano.

    la funzione conta_caratteri ritorna il numero totale di occorrenze di
    ciascun carattere di stringa_b in stringa_a fino alla prima occorrenza di un
    carattere per il quale stop_condition ritorna true.

    Il carattere per cui stop_condition è vera deve eventualmente essere incluso nel conteggio.

    Nota: Potete assumere che stringa_b non contenga caratteri ripetuti.

    Esempio:

    conta_caratteri(
    "sempre caro mi fu quest'ermo colle",
    "aeiou", (c) => c == "q" || c == "f") restituisce 5
*/


function conta_caratteri(stringa_a, stringa_b, stop_condition)
{
    // contatore 
    let result = 0;
    
    // ciclo su stringa_a
    for(let i = 0; i < stringa_a.length; i++)
    {
        // ciclo su stringa_b
        for(let j = 0; j < stringa_b.length; j++)
        {
            // controllo se i caretteri sono uguali
            // se uguali incrementa il contatore altrimenti no
            if(stringa_a[i] == stringa_b[j]) 
            {
                result++;
            }
        }
        // se la condizione è vera si il ciclo si ferma e ritorna il contatore
        if(stop_condition(stringa_a[i]))
        {
            return result;
        }
    }
    return result;

}



let str = "sempre caro mi fu quest'ermo colle";
console.log(conta_caratteri(str, "aeiou", (c) => c == "q" || c == "f")); // 5




