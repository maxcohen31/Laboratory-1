/*
  La funzione che sembra difficile
  Scrivi una funzione che prenda in input due numeri N e K e restituisca la k-esima cifra (partendo da destra) di N.
  Se K è maggiore del numero delle cifre di N, la funzione restituirà 0.

  Esempio:
    Input : N = 123456, K = 3
    Output: 4
   
*/


function cifraKesima(n, k)
{
    if(k > String(n).length) { return 0; }

    let numb = [];
    
    for(let i of String(n))
    {
        numb.unshift(i);
    }
    return Number(numb[k-1])   
}


console.log(cifraKesima(3213245, 5));
console.log(cifraKesima(123456, 3));
