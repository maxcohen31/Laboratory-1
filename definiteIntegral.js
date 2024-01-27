/*
    Data una funzione intdef(f, n) con f una funzione e un parametro n >= 1, 
    si calcoli l'area sotto la curva del grafico usando la regola del trapezoide.
*/



function intdef(f, n)
{
    return function calculateArea(a, b)
    {
        let h = (b - a) / 2;
        let sum = f(a) + f(b);
        
        for(let i = 0; i < n; i++)
        {
            sum += (h * f(a + (i + 0.5) * h))
        }
        return sum;
    }
}

