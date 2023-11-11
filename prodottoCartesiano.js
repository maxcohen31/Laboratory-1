/*
    Si scriva la funzione prodotto(A, B) che implementi il prodotto cartesiano
    B x A = concat{(b, a) per ogni a in A e b in B} 
    (dove concat rappresenta la concatenazione tra stinghe) e restituisca l'insieme
    risultante dell'applicazione del prodotto. Si noti che 0 x A = 0 x B = 0, e l'insieme
    vuoto 0 si rappresenta con {}. Se uno dei valori in input è undefined, questo verrà
    trattato come insieme vuoto.
*/

function prodotto(A, B)
{   
    let cartProd = {};
    
    // controllo input valido
    if(A == {} || B == {}) { return {}; }
   
    for(let k in B)
    {
        let prod = "";

        for(let k2 in A)
        {
            prod = k2 + k;
            cartProd[prod] = true;
        }

    }
    
    return cartProd;

}

C = {'a': true, 'b': true, 'c': true};
D = {'d': true, 'e': true, 'f': true};
F = {};
console.log(prodotto(D, C));
