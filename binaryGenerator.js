/*

    Scrivere un generatore bin che, dato un numero decimale n, 
    restituisce i bit della sua codifica binaria dal meno significativo al più significativo. 
    Se n è minore o uguale a zero, il generatore deve lanciare un'eccezione UnsuitableNumberError definita appositamente.



    Esempio:

    let g = bin(4)

    g.next().value --> 0

    g.next().value --> 0

    g.next().value --> 1

    g.next().done --> true

*/

class UnsuitableNumberError extends Error { ; }

function *bin(n)
{
    if (n <= 0)
    {
        throw new UnsuitableNumberError();
    }

    while (n > 0)
    {
        let rst = n % 2;
        yield rst;
        n = (n - rst) / 2;
    }
}
