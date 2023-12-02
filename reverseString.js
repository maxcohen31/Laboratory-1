/*
    Stampa una stringa al contrario
*/

function reverseStr(str)
{
    let result =  str.split("").reverse().join("");
    return result;
}

function reverseStr2(str)
{
    let result = "";

    for(let i of str)
    {
        result = i + result;
    }
    return result;
}

function reverseStrRecursion(str)
{
    if(str.length <= 1) { return str; }
    return reverseStrRecursion(str.charAt(str.length - 1)) + reverseStrRecursion(str.substring(0, str.length - 1));

    
}

console.log(reverseStr2("Hi, dear!"))
console.log(reverseStr("Hi, dear!"))
console.log(reverseStrRecursion("Hi, dear!"))
