/*
    Si definisca un generatore decadimento(n,k) che, dato in input un numero n, 
    generi infiniti numeri interi ottenuti dividendo n per potenze successive di k. 
    In altre parole, il generatore restituirà n/(k^0) la prima volta che viene invocato, 
    poi a seguire n/(k^1), n/(k^2), n/(k^3), e così via.

    ATTENZIONE: Si arrotondi ciascun valore generato da decadimento(n,k) 
    all'intero più vicino utilizzando Math.round. Si assuma inoltre k come sempre diverso da 0.    
*/

function *decadimento(n, k)
{
    let a0 = n;
    let idx = 1;
    yield a0;

    while (true)
    {
        a0 = Math.round(a0 / Math.pow(k, idx));
        idx++;
        yield a0;
    }
}
