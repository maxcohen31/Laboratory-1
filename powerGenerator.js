/*
    Si consideri la successione numerica delle potenze di n, definita dalla regola 
                                        ai=n*ai-1

    Si scriva un generatore potenze(n) in JavaScript che, 
    partendo dal valore iniziale a0=n, restituisca ad ogni chiamata i termini della successione. 
    ( NB: La prima chiamata deve restituire il valore di a1, la seconda a2, e così via )


    ESERCIZIO 2
    Si consideri la successione numerica delle potenze di n, definita dalla regola 
                                        ai=n*ai-1

    Si scriva un generatore potenzeLimitate(n,e) in JavaScript che, 
    partendo dal valore iniziale a0=n, restituisca ad ogni chiamata i termini della successione
    a1 a2 … ae
    ( NB: Il generatore deve terminare quando si raggiunge l’esponente e )

*/

function *potenze(n)
{
    // First value
    let a0 = n;
    // Yield a0
    yield a0;

    while (true)
    {
        /*
            // We can avoid declaring a variable
            let current = n*a0;    
            a0 = current;
            yield current; 
        */

        a0 = a0 * n;
        yield a0;


    }

}

function *potenzeLimitate(n, e)
{
    let a0= n;
    yield a0;

    while (e > 0)
    {
        a0 = a0 * n;
        yield a0;
        e--;
    }
}

let x = potenze(2);
let y = potenzeLimitate(3, 5);

for (let i = 0; i < 5; i++)
{
    console.log(x.next())
}

console.log("\nPotenze Limitate\n");
for (let i = 0; i < 10; i++)
{
    console.log(y.next())
}
