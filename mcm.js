/*
    Si scriva una funzione che calcola il minimo comune multiplo tra due interi positivi
*/

function gcd(a, b)
{
    if(a < b)
    {
        let temp = a
        a = b;
        b = temp;
    }

    while(b > 0)
    {
        let rst = a % b;
        a = b;
        b = rst;
    }
    return a;

}

function mcm(a, b)
{
    /*
        Euclidean formula: (a*b) / GCD(a, b)
    */
    return (a*b)/gcd(a, b);
}

console.log(gcd(126, 147));
console.log(mcm(10, 22));
