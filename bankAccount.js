/*
    Creare una classe ContoBancario che implementi i seguenti metodi:

    Costruttore(saldoIniziale, massimale); Inizializza l'oggetto settando le proprietà saldo e massimale. 
    Se uno qualsiasi dei due valori è negativo lancia una eccezione con tipo InvalidMoney.

    deposito(valore); incrementa il saldo del valore passato come argomento e ritorna il nuovo saldo. 
    Se il valore è negativo lancia una eccezione con tipo InvalidMoney, 
    se il valore supera il massimale lancia l'eccezione ExcessiveMoney e non aggiorna il saldo.

    prelievo(valore); riduce il saldo del valore passato come argomento e ritorna il nuovo saldo. 
    Se il valore è negativo lancia una eccezione con tipo InvalidMoney, 
    se il valore è maggiore del saldo lancia l'eccezione InsufficientMoney e non aggiorna il saldo.


    Successivamente, definire una funzione applica(conto, depositi, prelievi) 
    che prenda come argomento un oggetto conto di tipo ContoBancario e due array di interi 
    depositi e prelievi di lunghezza identica.

    La funzione alterna sul conto corrente ogni deposito ed ogni prelievo e ritorna true se tutte le operazioni 
    sono eseguibili sul conto bancario, altrimenti ritorna false.

    Nel caso gli array contengano dei valori negativi, la funzione propaga l'eccezione InvalidMoney.

    Il saldo del conto deve essere invariato se la funzione applica ritorna false o propaga un'eccezione.



    Hint: Strutturare le eccezioni in maniera da non doverle gestire individualmente all'interno della funzione applica.



    Esempio:

    var conto = new ContoBancario(5, 10)
    applica(conto, [3, 1], [6, 4]) -> false
    var conto = new ContoBancario(5, 10)
    applica(conto, [2, 2], [2, 3]) -> true

*/

class BankAccountError extends Error { ; }
class InvalidMoney extends BankAccountError { ; }
class BalanceError extends BankAccountError{ ; }
class ExcessiveMoney extends BalanceError{ ; }
class InsufficientMoney extends BalanceError{ ; }

class ContoBancario
{
    saldo
    masismale;

    constructor(saldoIniziale, massimale)
    {
        if (saldoIniziale < 0)
        {
            throw new InvalidMoney("value must be positive");
        }
        
        this.saldo = saldoIniziale;
        this.massimale = massimale;
        
    }

    deposito(valore)
    {
        if (valore < 0) 
        { 
            throw new InvalidMoney(); 
        }
        else if (this.saldo + valore > this.massimale) 
        { 
            throw new ExcessiveMoney(); 
        }
        else 
        {
            this.saldo += valore; 
        }
    }
    prelievo(valore) 
    {
        if (valore < 0) 
        {
            throw new InvalidMoney();
        } 
        else if (this.saldo - valore < 0) 
        {
            throw new InsufficientMoney();
        } 
        else 
        {
            this.saldo -= valore;
        }
  }
}


function applica(conto, depositi, prelievi) 
{
    let vecchio_saldo = conto.saldoIniziale;
    for (let idx in depositi) 
    {
        try 
        {
            conto.deposito(depositi[idx]);
            conto.prelievo(prelievi[idx]);
        } 
        catch (err) 
        {
            if (err instanceof BalanceError) 
            {
                // Il saldo resta invariato
                conto.saldoIniziale = vecchio_saldo;
                return false;    
            } 
            else 
            {
                // Il saldo resta invariato
                conto.saldoIniziale = vecchio_saldo;
                throw err;
            }
        }
    }
    return true;
}
