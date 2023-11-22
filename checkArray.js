function check_array(arr)
{
    let arrElemMultiply = [];
    let i = 0;
    let middle = Math.floor(arr.length / 2);
    
    while(i < middle)
    {
        let mult = arr[i] * arr[arr.length - 1 - i]
        arrElemMultiply.push(mult);
        i++;
    }
    
    let divisible = true;
    for(let i = 0; i < arrElemMultiply.length - 1; i++)
    {
        if(arrElemMultiply[i+1] % arrElemMultiply[i] != 0)
        {
            divisible = false;
        }
    }
    return divisible;

}




let x = [1, 4, 4, 1, 3, 32, 8, 2, 2];
console.log(check_array(x));
