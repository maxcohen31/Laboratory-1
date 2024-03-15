/*
    Si considerino le parole generabili con le sole lettere maiuscole "A", "B" e "C".



    Si definisca in JS una costante globale letters che rappresenti le tre lettere "A", "B" e "C" come un insieme:

    -sfruttando la codifica degli insiemi come oggetti vista a lezione 
    (scegliendo liberamente il valore da associare a ciascun elemento dell'insieme) e

    -rappresentando le basi SOLO con lettere maiuscole.



    Si definisca in JS un generatore finito unfold(word) che:

    -restituisce le lettere che compongono una parola word passata come argomento, 
    una dopo l'altra (dalla prima all'ultima), e

    -lancia un'eccezione UnknownLetterError quando/se incontra una lettera non contenuta nell'insieme letters.

*/

const LETTERS = {"A": 1, "B": 1, "C":1 };

class UnknownLetterError extends Error { ; }

function *unfold(word) {
    let i = 0;

    while (i < word.length) {
        if (!(word[i] in LETTERS)) {
            throw new UnknownLetterError("Unknown letter");
        } else {
            yield word[i];
        }
        i++;
    }
}

let s = "ABCA";

for (let i = 0; i < 5; i++) {
    console.log(unfold(s));
}
