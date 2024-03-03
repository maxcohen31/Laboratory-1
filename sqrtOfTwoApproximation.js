/*
    Il valore di sqrt(2)
    può essere approssimato con il cosiddetto metodo babilonese che consiste nel partire da un valore qualunque a0 > 0, 
    e poi calcolare approssimazioni successive del valore di sqrt(2) con la seguente successione:

    an+1 = (a0 / 2) + (1/an)


    Si scriva un generatore babylon(n) in JavaScript che, partendo dal valore iniziale a0 = n
    restituisca ad ogni chiamata i termini della successione (la prima chiamata deve restituire il valore di a1,
    la seconda di a2 e così via).

*/

function* babylon(n)
{
    while (true)
    {
        n = (n/2) + (1/n);
        yield n;
    }
}
