/*
    Convertitore decimale-binario
*/


function binToDec(n)
{
    let result = []

    while(n > 0)
    {
        let rst = n % 2;
        result.unshift(rst) 
        n = Math.floor(n / 2) 
    }
    return result
}

console.log(binToDec(34))
