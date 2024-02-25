/*
    Esempi di eccezioni
*/

class CalcError extends Error
{
    constructor(...args)
    {
        super(...args);
        this.name = "Calculation Error";
    }
}

class ValueError extends CalcError
{
    constructor(...args)
    {
        super(...args);
        this.name = "ValueError";
    }
}

class OperatorError extends CalcError
{
    constructor(...args)
    {
        super(...args);
        this.name = "OperatorError";
    }
}

class EmptyValueError extends ValueError
{
    constructor(...args)
    {
        super(...args);
        this.name = "EmptyValueError";
    }
}

function calc(a)
{
    // Prendiamo il primo elemento di a: operatore.
    [op, ...elementi] = a;
    
    switch(op)
    {
        case "+":
            return elementi.reduce((acc, elementi) => (elementi + acc, 0));

        case "-":
            [x, ...elementi] = elementi; 
            return elementi.reduce((acc, elementi) => (elementi - acc, x));

        case "*":
            return elementi.reduce((acc, elementi) => (elementi * acc, 1));

        case "/":
            [x, ...elementi] = elementi;
            // Controllo divisione per 0 
            for(let i of elementi)
            {
                if(i == 0)
                {
                    throw new ValueError("Cannot divide by zero!");
                }
            }
            return elementi.reduce((acc, elementi) => (elementi / acc, x));

        default:
            throw new OperatorError("Operator" + op + "is not supported")
    }
}




console.log("+:",calc(["+",1,2,3,4]))
console.log("+ (err):",calc(["+","uno",2,3,4]))
console.log("*:",calc(["*",1,2,3,4]))
console.log("-:",calc(["-",10,4,2,1]))
console.log("- (err):",calc(["-","uno",2,3,4]))
console.log("/:",calc(["/",16,2,2,2]))


function calcAll(arr)
{
    // Restituisce un array con la funzione calc applicata ad ogni suo elemento
    return arr.map(calc);
}

e = [
  ["+"],
  ["/", 16, 2, 2, 2, 0],
  {"op": "+", "values": [1,2,3]}
  ["+", "1", 2, 3, 4],
  ["%", 2, 3, 4],
];

try
{
    let test = calcAll(e);
    console.log(test)
}

catch(e)
{
    if(e instanceof CalcError)
    {
        console.log("Sorry, not working because of", e.name, ":", e.message);
    }
    else
    {
        throw e;
    }
}
