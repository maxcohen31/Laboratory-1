/*
    Si scriva una funzione componi(f, g) che, date due funzioni f e g,
    restituisca una funzione h tale che h(x) = g(f(x)).
    
    Esempi

    componi(x=>2*x, x=>2*x)(3) restituisce 12
    componi(s=>s.length, x=>x**2+1)(“Vincenzo”) restituisce 65
    componi(a=>a[0], s=>s.length)([“pere”,”banane”]) restituisce 4
*/


function componi(f, g)
{
    return x => g(f(x));
}

console.log(componi(x=>2*x, x=>2*x)(3)); // 12 
console.log(componi(s=>s.length, x=>x**2+1)("Vincenzo")); // 65
console.log(componi(a=>a[0], s=>s.length)(["pere","banane"])); // 4
