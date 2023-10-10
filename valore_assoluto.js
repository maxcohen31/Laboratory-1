const prompt = require("prompt-sync")();

function absVal(n)
{
    if(n <= 0)
    {
        return -1 * n;
    }
    return n;
}

console.log(absVal(-3));
