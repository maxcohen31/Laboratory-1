/*
    Si definisca un generatore walk(p,f) che prende in input un punto p 
    (rappresentato come una coppia di numeri) e una funzione f (da numeri a numeri). 
    Il generatore simulerà una “camminata” che comincia in p e procede applicando f prima alla coordinata x, 
    poi alla coordinata y, poi di nuovo alla x, poi di nuovo alla y, e così via. 

    Esempio:
    let one = walk([1,1],(x)=>(x+1))
    console.log(one.next().value) 	→ 	[2,1]
    console.log(one.next().value) 	→ 	[2,2]
    console.log(one.next().value) 	→ 	[3,2]
    console.log(one.next().value) 	→ 	[3,3]

*/

function *walk(p, f)
{
    // Get coordinates
    let [x, y] = p; 

    while (true) 
    {
        // Applies function to x coord.
        yield [f(x), y];
        // Store x
        x = f(x);
        // Applies function to y coord.
        yield [x, f(y)];
        // Store y
        y = f(y);
    }
}

let one = walk([1,1], (x) => (x+1))
console.log(one.next().value)
console.log(one.next().value)
console.log(one.next().value)
console.log(one.next().value)
