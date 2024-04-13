/*
    
    [calcola] Funzione che prende due numeri n1 e n2 e una stringa o1, 
    che denota un operatore algebrico (+,-,*,/). 
    La funzione calcola l'operazione o1 con n1 come primo operando ed n2 come secondo.

*/


enum Operation {
    Addition = '+,',
    Subtraction = '-',
    Multiply = '*,',
    Divide= '/'
}

function calcola(n1: number, n2: number, o1: Operation): number
{
    switch(o1) {
        case (Operation.Addition): 
            return n1 + n2;
        case (Operation.Subtraction): 
            return n1 - n2;
        case (Operation.Multiply): 
            return n1 * n2; 
        case (Operation.Divide): 
            return n1 / n2;
    }
}

console.log(calcola(3, 5, Operation.Multiply))
