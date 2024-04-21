/*
    Si consideri in TS la gestione di una lavanderia, definendo 

    una enum TipoLavaggio per modellare i tipi di lavaggio ammessi, 
    ovvero Intensivo (90 minuti), Secco (60 minuti) e Delicati (30 minuti), e 
    una enum TipoTessuto per modellare i tipi di tessuto trattati, ovvero Cotone, Seta, Sintetico, Lana.

    Si consideri inoltre che i tessuti modificano i tempi di lavaggio secondo i seguenti moltiplicatori: 

    Cotone -> 1.1
    Seta -> 2
    Sintetico -> 0.9
    Lana -> 1.75
    
    Inoltre, alcuni tessuti sono incompatibili con alcuni tipi di lavaggio: 
    Seta e Lana non possono essere lavate con Intensivo, mentre il Sintetico non può essere lavato a Secco. 

    Si definisca infine il tipo Lavaggio, da definire come una tupla contenente un TipoTessuto e un TipoLavaggio, 
    in questo ordine.

    Si scriva una funzione processa(lavaggi) che, dato un array di elementi di tipo Lavaggio, 
    lo ordini in place in base al tempo di esecuzione 
    (calcolato come il tempo del tipo lavaggio modificato secondo il tipo di tessuto lavato), 
    lanciando un'eccezione di tipo LavaggioError se viene richiesto un tipo di lavaggio incompatibile con un tessuto.

     

    La soluzione deve essere scritta in TypeScript, definendo opportunamente i tipi, e non usando any o unknown. 
    Saranno preferite le soluzioni che sfruttino le enum per codificare opportunamente 
    i tempi di lavaggio ed i loro moltiplicatori.

*/

class LavaggioError extends Error { ; }

type Lavaggio = [TipoTessuto, TipoLavaggio];

enum TipoLavaggio {
    Intensivo = 90,
    Secco = 60,
    Delicati = 30
}

enum TipoTessuto {
    Cotone = 1.1,
    Seta = 2,
    Sintetico = 0.9,
    Lana = 1.75
}

function processa(lavaggi: Lavaggio[]): void {
    let result = [];

    for (let lav of lavaggi)
        if ((lav[0] == TipoTessuto.Lana || lav[0] == TipoTessuto.Seta && lav[1] == TipoLavaggio.Intensivo) ||
        (lav[0] == TipoTessuto.Sintetico && lav[1] == TipoLavaggio.Secco)) {
            throw new LavaggioError();
        } else {
            lavaggi.sort((a, b) => (a[0]*a[1] - b[0]*b[1]));  
        }
        
        

}

let lavaggi: Lavaggio[] = [
    [TipoTessuto.Cotone, TipoLavaggio.Delicati],
    [TipoTessuto.Seta, TipoLavaggio.Secco],
    [TipoTessuto.Sintetico, TipoLavaggio.Intensivo],
    [TipoTessuto.Cotone, TipoLavaggio.Delicati],
]


console.log(processa(lavaggi));
