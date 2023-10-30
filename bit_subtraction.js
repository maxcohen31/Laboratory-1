/*
    Bit subtraction between two integers
*/


function bit_sub(a, b)
{
    let result = ~b 
    // second complemet
    result = result + 1
    // return subtraction
    return a + result

    
}

console.log(bit_sub(5, 3))
