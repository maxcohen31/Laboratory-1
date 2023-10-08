/*
    Scrivere una funzione comp(f,g) che, date due funzioni f e g, 
    restituisce la funzione composta, ovvero quella che calcola f(g(x))
*/

function comp(f, g)
{
    return (x) => f(g(x));
}

let linear = (x) => (x + 1);
let square = (x) => (x^2);
