/*
    Scrivere una funzione modificaCorsi che - 
    preso in input un array di oggetti contenenti le informazioni dei corsi universitari 
    (rappresentate con le proprietà corso, semestre e numStudenti) - 
    restituisca l'array con gli oggetti modificati come segue:

    se numStudenti è >= 150, settare semestre a 2; 
    se numStudenti è <= 150, settare semestre a 1;
    se l'array è vuoto, restituire undefined

    NB: assumere che negli oggetti siano sempre presenti le chiavi numStudenti e semestre.
*/


function modificaCorsi(corsi)
{
    if(corsi.length === 0) { return undefined; }
    for(let corso of corsi)
    {
        if(corso.numStudenti >= 150)
        {
            corso.semestre = 2;
        }
        if(corso.numStudenti < 150)
        {
            corso.semestre = 1;
        }
    }
    return corsi;
}

corsi = [
    {'corso':'lab I', 'semestre':1,'numStudenti': 217}, 
    {'corso':'algoritmi', 'semestre':2, 'numStudenti': 136},
    {'corso':'analisi','semestre':1,'numStudenti':150}
    ]

console.log(modificaCorsi(corsi))
