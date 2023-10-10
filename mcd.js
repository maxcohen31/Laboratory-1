function mcd(a, b)
{
    if(a < b)
    {
        let max = b
        b = a
        a = max
    }
   
    do
    {
        let x = b;
        b = a % b;
        a = x;
    }
    while(b > 0);

    return a;
}
console.log(mcd(10, 20));
