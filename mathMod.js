/*
    Si migliori la classe di sistema Math, modificando Math.max() in modo che, 
    se gli argomenti (in numero qualunque) sono tutti array, e tutti della stessa lunghezza, 
    allora il metodo restituisce -- anziché NaN come farebbe normalmente -- 
    un array avente come i-esimo elemento il max fra gli i-esimi elementi di tutti gli argomenti 
    (usando Math.max() allo scopo). 
    In tutti gli altri casi, la nuova Math.max() si comporta come la versione standard.
*/

// Saving Math.max
let oldMax = Math.max;

Math.max = function (...args)
{
    if (args.every((a => Array.isArray(a) && a.length == args[0].length)) && args.length > 0)
    {
        let result = [];
        for (let i = 0; i < args[0].length; i++)
        {
            // Assumiamo il massimo come primo elemento del primo array
            result[i] = args[0][i];
            for (let j = 0; j < args.length; j++)
            {
                result[i] = Math.max(result[i], args[j][i]);
            }
        }
        return result;
    }
    else
    {
        return oldMax(...args);
    }
}

let a = [[2,3],[4,5],7]
let b = [[1,5],[8,4],11]

console.log(Math.max(a, b));
