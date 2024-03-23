/*
    Si scriva un generatore chain_sum che prende in input una funzione f (da numeri a numeri) 
    e moltiplicatore k (numero). Se k <= 0, 
    chain_diff lancia un'eccezione di tipo RangeError. 
    Altrimenti, genera una successione di numeri definita dalla relazione 
    
                    ai = f(i-1)*k) - f(i*k)

    con a0 = -f(0).

    Nota: Si preferiscono soluzioni che evitano di ricalcolare valori della funzione prevemente calcolati.

*/

class RangeError extends Error { ; }

function *chain_diff(f, k)
{
    if (k <= 0)
    {
        throw new RangeError();
    }
    let a0 = -1 * f(0);
    yield a0
    let i = 1;

    while (true)
    {
        let ai = a0;
        ai = f((i-1)*k) - f(k*i)
        yield ai;
        i++;
        
    }
}
