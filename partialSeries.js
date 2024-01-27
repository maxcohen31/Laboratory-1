/*
    
    Una successione è, come sapete, una sequenza ordinata di valori, 
    che possiamo considerare una funzione f:ℕ→ℝ. Ad ogni successione può essere associata una serie, 
    calcolata come somma degli elementi della successione. 
    Una serie parziale si ottiene quando il calcolo della serie si arresta a un termine di indice n dato.

    Si scriva una funzione serieParziale(f,n) che, data una funzione f come sopra, 
    e un naturale n, restituisca la serie parziale di f limitata a n (partendo da 0, n incluso).

    Esempi

    serieParziale(x=>1, 5) → 6

    serieParziale(x=>(x%2==0?1:-1),9) → 0



    Inoltre, si scriva una funzione serieParziale2(f) che, 
    ricevuta una funzione f:ℕ→ℝ che rappresenta una successione, 
    restituisca una funzione gf:ℕ→ℝ tale che gf(n) calcoli la serie parziale di f (fra 0 e n inclusi).



    Esempi

    serieParziale2(x=>1)(5) // 6

    serieParziale2(x=>(x%2==0?1:-1))(9) // 0
*/

function serieParzile(f, n)
{
    let result = 0;
    for(let i = 0; i<n; i++)
    {
        result += f(i);
    }
    return result;
}

function serieParziale2(f)
{
    return function calcolaSerie(n)
    {
        serieParziale2(f, n);
    }
}
