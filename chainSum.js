/*
    Si scriva un generatore chain_sum che prende in input una funzione f (da numeri a numeri) 
    e moltiplicatore k (numero). Se k <= 0, 
    chain_sum lancia un'eccezione di tipo RangeError. 
    Altrimenti, genera una successione di numeri definita dalla relazione 
    
                    ai = f(i*k) + f(i-1)*k)

    con a0 = f(0).

    Nota: Si preferiscono soluzioni che evitano di ricalcolare valori della funzione prevemente calcolati.

*/

class RangeError extends Error { ; }

function *chain_sum(f, k)
{
    if (k <= 0) { throw new RangeError("K must be positive"); }

    // Primo valore della successione
    let start = f(0);
    yield start;

    // definiamo un valore prececedente 
    // inizialmente è a0 
    let prev = start;
    let i = 1;

    while (true)
    {
        let succ = f(i*k) + f((i-1) * k);
        // prev diventa i'esimo valore della successione
        prev = succ;
        yield succ;
        i++;
    }
}

// Proposed solution
function *chain_sum(f, step){
    if (step < 1) {
        throw new RangeError();
    }
    let idx = 0;
    let prev = 0;
    while (true){
        let res = f(idx);
        yield prev + res;
        prev = res;
        idx += step;
    }
}
