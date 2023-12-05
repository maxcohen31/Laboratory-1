/*
    Si scriva una funzione normalizza(T) che, 
    dato un albero k-ario non vuoto T come definito a lezione 
    (oggetti con chiavi val e figli, dove figli è un array di nodi), 
    in cui i nodi hanno valori di tipo booleano, 
    lo modifica sostituendo ad ogni valore s, 
    1 se il valore di s è true e 0 altrimenti.

*/


function normalizza(T)
{
    // Base case: leaf
    if(!(T.figli) || T.figli.length === 0) { return T.val; }
    
    if(T && T.val) 
    { 
        T.val = 1;
    }
    else
    {
        T.val = 0;
    }

    // Loop over children and apply recursevely the function
    for(let k of T.figli)
    {
        normalizza(k);
    }

}

let X =  {val: false, figli: [ { val: true }, { val: true, figli: [ { val: true } ] }, { val: false }]};
console.log(normalizza(X))
console.log(X)
