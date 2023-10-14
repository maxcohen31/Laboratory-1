function map(f, arr)
{
    let result = []
    for(let i = 0; i < arr.length; i++)
    {
        result.push(f(arr[i]))
    }
    return result;
}



