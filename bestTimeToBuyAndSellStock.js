/*
    Dato un array di interi che rappresentano i prezzi delle azioni
    in giorni differenti, si richiede di trovare il massimo profitto possibile
    comprando e vendendo azioni in giorni differenti dove almeno una transazione     è garantita.

    Esempio:
    
    a = [7, 1, 5, 3, 6, 4];
     
    Il prezzo più basso lo abbiamo il secondo giorno, ovvero 1.
    Partendo dal secondo giorno in poi il prezzo più alto lo avremo
    il quinto giorno, cioè 6.
    Il massimo profitto possibile sarà 6 - 1 = 4

*/

function maxProfit(a)
{
    let result = 0;
    // Maybe the best day to buy is the first one
    let buy = a[0];

    for(let i = 0; i < a.length-1; i++)
    {
        // Find the lowest price 
        buy = Math.min(buy, a[i]);
        // Difference between the current price and the lowest one and return it
        result = Math.max(buy, a[i]-buy);
    }
    return result;

}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
