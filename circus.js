/*
    Il Circo è arrivato in città, col suo famoso numero dei buffoni. 
    Parte del fascino è che per i k posti disponibili ad ogni spettacolo, 
    vengono venduti ben più di k biglietti: anzi, 
    la vendita dei biglietti continua proprio fino all'inizio dello spettacolo, 
    e gli ultimi k biglietti venduti sono validi, mentre tutti quelli venduti in precedenza non vengono onorati.

    Si scriva una funzione buffcirc(k) che, dato un certo k, 
    restituisce una coppia di funzioni [acquista, ammessi] che insieme fanno riferimento a uno stesso spettacolo 
    (con k posti disponibili) con il seguente comportamento: 
    acquista(persona) compra un biglietto a nome della persona; 
    ammessi() restituisce un array con le ultime k persone che hanno comprato un biglietto. 
    Non ci importa il tipo di persona (nell'esempio assumeremo che sia una stringa). 
    Ovviamente, spettacoli diversi possono avere capienze diverse, 
    e avranno elenchi separati di biglietti venduti e di ammessi.



    Il codice dovrà evitare di memorizzare, per ogni spettacolo, 
    più delle k persone effettivamente ammesse -- in altri termini, 
    la complessità in memoria deve essere (per ogni spettacolo) O(k), 
    non O(n) dove n è il numero di biglietti venduti.



    Esempio

    let [acquista,ammessi] = buffcirc(4)

    acquista("pippo")

    acquista("andrea")

    acquista("alex")

    ammessi() → ["pippo", "andrea", "alex"]

    acquista("pupo")

    acquista("kevin")

    acquista("giammi")

    ammessi() → ["alex", "pupo", "kevin", "giammi"]

*/

function buffcirc(k)
{
    let result = [];
    function aquista(persona)
    {
        result.push(persona);
        while(result.length > k)
        {
            result.shift();
        }
    }
    
    function ammessi()
    {
        return result;
    }

    return [aquista, ammessi];

}



