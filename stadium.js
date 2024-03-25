/*
    Si definisca una classe Stadio per rappresentare i posti a sedere di uno stadio, 
    suddivisi per settore casa e settore ospiti.

    Al costruttore della classe vengono forniti n e m che sono rispettivamente il numero totale dei posti 
    del settore ospiti e del settore casa.


    La classe deve fornire i seguenti metodi:

    prenota_posto(s,i): prenota l'i-esimo posto nel settore s e restituisce true se il posto è disponibile, 
    false altrimenti; 
    posti_occupati(s): restituisce il numero di posti occupati del settore s;
    is_empty(): restituisce true se lo stadio è vuoto (non ci sono posti occupati in nessun settore), 
    false altrimenti;
    svuota_stadio(): svuota tutti i posti di entrambi i settori dello stadio.
    Se la stringa s non corrisponde a "ospiti" o "casa", 
    lanciare l'eccezione SectorError con il messaggio "Settore non esistente" in ogni metodo della classe.



    sansiro = new Stadio(3, 5)
    sansiro.posti_occupati("casa") -> 0
    sansiro.posti_occupati("ospiti") -> 0
    sansiro.prenota_posto("casa", 1) -> true
    sansiro.prenota_posto("casa", 1) -> false
    sansiro.is_empty() -> false
    sansiro.posti_occupati("casa") -> 1
    sansiro.svuota_stadio()
    sansiro.posti_occupati("casa") -> 0
*/


class SectorError extends Error { ; }

class Stadio
{
    n;
    m;
    constructor(n, m)
    {
        this.ospiti = n;
        this.casa = m;
        this.postiOspiti = [];
        this.postiCasa = [];
        
        for (let i = 0; i < this.ospiti; i++)
        {
            this.postiOspiti[i] = undefined;
        }
        for (let i = 0; i < this.casa; i++)
        {
            this.postiOspiti[i] = undefined;
        }
    }

    prenota_posto(s, i)
    {
        switch(s)
        {
            case "casa":
                if (this.postiCasa[i] == undefined && i < this.casa)
                {
                    this.postiCasa[i] = 1;
                    return true;
                }
                else
                {
                    return false;
                }
            case "ospiti":
                if (this.postiOspiti[i] == undefined && i < this.ospiti)
                {
                    this.postiOspiti[i] = 1;
                    return true;
                }
                else
                {
                    return false;
                }
            default:
                throw new SectorError("Settore non esistente");
        }

    }

    posti_occupati(s)
    {
        let counter = 0;
        switch(s)
        {
            case "casa":
                for (let i = 0; i < this.casa; i++)
                {
                    if (this.postiCasa[i] != undefined)
                    {
                        counter++;
                    }
                }
                return counter;
        
            case "ospiti":
                for (let i = 0; i < this.ospiti; i++)
                {
                    if (this.postiOspiti[i] != undefined)
                    {
                        counter++;
                    }
                }
                return counter;
            default:
                throw new SectorError("Settore non esistente");
        }
    }

    svuota_posti()
    {
        for (let i = 0; i < this.ospiti; i++)
        {
            this.postiOspiti[i] = undefined;
        }

        for (let i = 0; i < this.casa; i++)
        {
            this.postiCasa[i] = undefined;
        }
        
    }

    is_empty()
    {
        if ((this.posti_occupati("casa") == 0) && (this.posti_occupati("ospiti") == 0))
        {
            return true;
        }
        return false;
    }


} 


