/*
    Si scriva una funzione calcT(a) che, dato come argomento un array a, 
    in cui il primo elemento è un operatore aritmetico (+, -, *, /) rappresentato come carattere,
    restituisca il risultato ottenuto applicando l’operatore fra tutti i rimanente elementi dell’array, 
    con la cautela che se uno degli altri elementi è esso stesso un array, 
    viene prima valutato il suo valore secondo la stessa regola.

    Suggerimenti: splendida occasione per un assegnamento destrutturante.  
*/




function calcT(a)
{
    let [operator, ...r] = a;
    
    switch(operator)
    {
        case '+':
            for(let i = 0; i < r.length - 1; i++)
            {
                if(Array.isArray(r[i]))
                {
                    // get operator
                    r.splice(i, 1, calcT(r[i]));
                }
            }
            return r.reduce((previous, current) => previous + current);

        case '-':
            for(let i = 0; i < r.length - 1; i++)
            {
                if(Array.isArray(r[i]))
                {
                    // get operator
                    r.splice(i, 1, calcT(r[i]));
                }
            }
            return r.reduce((previous, current) => previous - current);

        case '*':
            for(let i = 0; i < r.length - 1; i++)
            {
                if(Array.isArray(r[i]))
                {
                    // get operator
                    r.splice(i, 1, calcT(r[i]));
                }
            }
            return r.reduce((previous, current) => previous * current);

        case '/':
            for(let i = 0; i < r.length - 1; i++)
            {
                if(Array.isArray(r[i]))
                {
                    // get operator
                    r[i].splice(i, 1, calcT(r[i]));
                }
            }
            return r.reduce((previous, current) => previous / current);

        default:
            break
    }

}

console.log(calcT(['+',4,['*',3,2]])) // 10

