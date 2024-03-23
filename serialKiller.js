/*
    Scrivere un generatore serialKiller che, dato un array di vittime, 
    restituisce ciascuna vittima una per volta (seguendo l'ordine con cui sono memorizzate nell'array). 
    Ciascuna vittima deve essere rappresentate come una coppia di stringhe (es. ["Mario","Rossi"]).



    Il generatore deve lanciare l'eccezione NoKillsError nel caso in cui non ci siano vittime 
    (ovvero l'array di vittime sia vuoto). Se invece c'è solo una vittima, 
    restituisce tale vittima e - all'invocazione successiva - lancia l'eccezione JustOneKillError.

*/

class JustOneKillError extends Error { ; }
class NoKillsError extends JustOneKillError { ; }

function *serialKiller(victims)
{
    if (victims.length === 0) 
    {
        throw new NoKillsError()
    }

    if (victims.length === 1)
    {
        yield victims[0];
        throw new JustOneKillError()
    }

    let i = 0;

    while (i < victims.length)
    {  
        yield victims[i];
        i++  
    }
}
