/*
    Si considerino le sequenze di DNA, 
    rappresentate come stringhe codificate concatenando le quattro basi del DNA, 
    ovvero "A", "C", "T" e "G".



    Si definisca in JS una costante globale bases che rappresenti le quattro basi del DNA come un insieme:
    sfruttando la codifica degli insiemi come oggetti vista a lezione 
    (scegliendo liberamente il valore da associare a ciascun elemento dell'insieme) e
    rappresentando le basi SOLO con lettere maiuscole).


    Si definisca in JS un generatore finito unfold che:

    restituisce le basi che compongono una stringa dna passata come argomento, una dopo l'altra, e
    lancia un'eccezione UnknownBaseError quando/se incontra una base sconosciuta 
    (ovvero non contenuta nell'insieme bases).

*/

const bases = { "A": 1, "C": 1, "T": 1, "G": 1};

class UnknownBaseError extends Error { ; }


function contain(s,element)
{
    return element in s; 
}

function* unfold(dna)
{
    for (let i = 0; i < dna.length; i++)
    {
        if (!(contain(bases, dna[i])))
        {
            throw new UnknownBaseError("Unknown base");
        }
        else
        {
            yield dna[i];
        }
    }
}
