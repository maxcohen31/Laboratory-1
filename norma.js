/*
    Si scriva una funzione norma(v) che, dato un oggetto x e y con valori float,
    calcoli la norma euclidea del vettore e la aggiunga a v con chiave norma
*/

function norma(v)
{
    n = Math.sqrt(v.x**2 + v.y**2);
    v["norma"] = n;
    return v;
}



console.log(norma({'x': 3, 'y': 4}))
