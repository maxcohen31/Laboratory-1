/*
    Conta i bit settati a 1 di un intero 
*/


function contaBit1(n)
{
    let bit = 0;

    while(n != 0)
    {
        bit += n & 1
        n = n >>> 1
    }
    return bit
}

console.log(contaBit1(5))
