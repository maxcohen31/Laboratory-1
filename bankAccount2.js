/*
    Creare una classe ContoPostale che implementi i seguenti metodi:

    Costruttore(saldoIniziale, scoperto); Inizializza l'oggetto settando le proprietà saldo e scoperto. 
    Se il saldoIniziale è negativo o pari a zero lancia una eccezione con tipo OperazioneInvalida.
    deposito(valore); incrementa il saldo del valore passato come argomento e ritorna il nuovo saldo. 
    Se il valore è negativo lancia una eccezione con tipo OperazioneInvalida e lascia il saldo invariato, 
    mentre se il valore è zero lancia l'eccezione TooLow.
    prelievo(valore); riduce il saldo del valore passato come argomento e ritorna il nuovo saldo. 
    Se il valore è negativo lancia l'eccezione OperazioneInvalida e lascia il saldo invariato, 
    mentre se il prelievo supererebbe il massimo scoperto consentito, lancia l'eccezione TooMuch e non aggiorna il saldo.


    Successivamente, definire una funzione applica(conto, depositi, prelievi) 
    che prenda come argomento un oggetto conto di tipo ContoPostale e due array di interi 
    depositi e prelievi di lunghezza identica.

    La funzione alterna sul conto corrente ogni deposito ed ogni prelievo e ritorna true 
    se tutte le operazioni sono eseguibili sul conto bancario, altrimenti ritorna false.

    Nel caso gli array contengano delle operazioni di prelievo con valori negativi,
    la funzione propaga l'eccezione OperazioneInvalida.

    Il saldo del conto deve essere invariato se la funzione applica ritorna false o propaga un'eccezione.



    Hint: Strutturare le eccezioni in maniera da non doverle gestire individualmente all'interno della funzione applica.



    Esempio:

    var conto = new ContoBancario(5, -10)
    applica(conto, [6, 2], [3, 100]) -> false
    var conto = new ContoBancario(5, -10)
    applica(conto, [2, 2], [2, 3]) -> true

*/

class BankAccountError extends Error{}
class OperazioneInvalida extends BankAccountError{}
class BalanceError extends BankAccountError{}
class TooLow extends BalanceError{}
class TooMuch extends BalanceError{}

class ContoPostale
{
    constructor(saldoIniziale, scoperto)
    {
        if (this.saldoIniziale <= 0) 
        {
            throw new OperazioneInvalida("");
        }
        this.saldoIniziale = saldoIniziale;
        this.scoperto = scoperto;
    }

    deposito(valore)
    {
        if (valore < 0) 
        {
            throw new OperazioneInvalida();
        }

        if (this.valore === 0) 
        {
            throw new TooLow();
        }
        else
        {
            return this.saldoIniziale + valore;
        }
    }

    prelievo(valore)
    {
        if (valore < 0) 
        {
            throw new OperazioneInvalida();
        }

        if (this.saldoIniziale - valore < this.scoperto) 
        {
            throw new TooMuch();
        }
        else
        {
            return this.saldoIniziale - valore;
        }
    }
}

function applica(conto, depositi, prelievi)
{
    let contoIniziale = conto.saldoIniziale;
    for (let i = 0; i < depositi.length; i++)
    {
        try
        {
            conto.deposito(depositi[i]);
            conto.prelievo(prelievi[i]);
        }
        catch (err)
        {
            if (err instanceof BalanceError)
            {
                conto.saldo = contoIniziale;
                return false;
            }
            else
            {
                conto.saldo = contoIniziale;
                throw err;
            }
        }
    }
    return true;
}

let conto = new ContoPostale(5, -10)
console.log(applica([2,2], [2, 3]));
