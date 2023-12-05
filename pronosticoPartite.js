/*
    Sia partite un array di oggetti, 
    dove ogni oggetto contiene uno storico degli scontri diretti tra due squadre, con i seguenti campi:



    squadraCasa: nome della squadra che gioca in casa
    squadraOspite: nome della squadra ospite
    vittorieCasa: numero di vittorie della squadra in casa
    totalePartite: numero di incontri totali tra le due squadre


    Si scriva una funzione pronostico(partite) 
    che restituisca un array di oggetti a cui si aggiunge la proprietà probVincita 
    calcolata come vittorieCasa/totalePartite arrotondata alla seconda cifra decimale (più vicina).

    In caso di totalePartite uguale a zero, la probabilità di vincita è zero.

    L'array ritornato deve essere ordinato in maniera decrescente in base alla probabilità 
    di vincita della squadra di casa; a parità di probabilità di vincita, 
    ordinare alfabeticamente per il nome della squadra di casa.

*/


function pronostico(partite)
{
    for(let match of partite)
    {
        // For loop over partite
        if(match.totalePartite === 0)
        {   
            // If totalePartite is equal 0 then probVincita is 0
            match["probVincita"] = 0;
        }
        else
        {   
            match["probVincita"] = Math.round((match.vittorieCasa/match.totalePartite)* 100) / 100;
        }
    }

    // Sorting the array
    return partite.sort((a, b) => {
        if(a.probVincita === b.probVincita)
        {
            a.squadraCasa.localeCompare(b.squadraCasa); 
        }
        else
        {
            b.probVincita - a.probVincita;
        }
    }) 
}


partite = [
  {
    squadraCasa: 'Monteriggioni',
    squadraOspite: 'Poggibonsi',
    vittorieCasa: 2,
    totalePartite: 15
  },
  {
    squadraCasa: 'Monteriggioni',
    squadraOspite: 'Massa',
    vittorieCasa: 7,
    totalePartite: 0 
  },
  {
    squadraCasa: 'Massa',
    squadraOspite: 'Carrara',
    vittorieCasa: 9,
    totalePartite: 10
  },
  {
    squadraCasa: 'Poggibonsi',
    squadraOspite: 'Monteriggioni',
    vittorieCasa: 12,
    totalePartite: 13
  }
]

console.log(pronostico(partite));
