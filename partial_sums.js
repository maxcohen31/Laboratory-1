function partialSums(x)
{

    let result = "";
    let n = 1;
    for(let i = 2; i <= x; i++)
    {
        n = i + n;
        result += String(n) + " "
        console.log(`x = ${i} -> 1 ${result}`);
    }
}

console.log(partialSums(4));
