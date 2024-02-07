/*
    Examples of tail recursion
*/


function foo(n, acc=0)
{
    if(n == 0) { return 0; }
    if(n % 2 == 1) { return 2*acc + 1; }
    return foo(n/2, 2*acc + 1);
}

// console.log(foo(12)) // 7


function factorial(n, acc=1)
{
    if(n > 1)
    {
        return n * factorial(n-1, acc++);
    }
    else
    {
        return 1;
    }
}

console.log(factorial(5));

// From iterative function to tail recursion

function pNum(x)
{
    while(x != 0)
    {
        console.log(x);
        console.log(" ");
        x -= 1;
    }
    console.log("\n");
}

function pNumTailRecursion(x)
{
    if(x != 0)
    {
        console.log(x);
        console.log(" ");
        pNumTailRecursion(x-1);
    }
    else
    {
        return "\n";
    }
}

console.log("pNum :", pNum(7));
console.log("pNum tail recursion :", pNumTailRecursion(7));
