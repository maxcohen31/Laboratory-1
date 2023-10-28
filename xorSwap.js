/*
    Scrivere una funzione che scambi i valori di due variabili usando lo XOR
*/


function swapXor(a, b)
{
    // a = 3, b = 4
    // a = 0011 b = 0100

    a = a ^ b; // 0011 xor 0100 = 0111
    b = b ^ a // 0100 xor 0111 = 0011
    a = a ^ b // 0111 xor 0011 = 0100
    
    return [a, b]

}

console.log(swapXor(3, 4));
