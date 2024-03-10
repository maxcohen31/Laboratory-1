/*
    Si definisca un generatore decay(n,f,t) che prende in input un numero n , 
    una funzione f (da numeri a numeri), e una soglia t. 
    Il generatore restituirà i valori di “decadimento” partendo da n e secondo la funzione f, 
    ovvero seguendo la regola an = f(an-1) con a0 = n
    terminando quando il valore di an scende sotto la soglia indicata da t

    Esempio:
    let d=decay(5,(x)=>(x/2),2)
    console.log(d.next())			→ 	{ value: 2.5, done: false }
    console.log(d.next())			→ 	{ value: 1.25, done: false }
    console.log(d.next())			→ 	{ value: undefined, done: true }

*/

function *decay(n, f, t)
{
    let a0 = n;

    while (t > 0)
    {
        a0 = f(a0);
        t--;
        yield a0;
    }
}


let d=decay(5,(x)=>(x/2),2)
console.log(d.next())
console.log(d.next())
console.log(d.next())
