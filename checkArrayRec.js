function check_arr(arr)
{
    if(arr.length <= 3) { return true; }

    let first = arr.splice(0, 1);
    let end = arr.splice(arr.length-1, 1);

    if(arr[0] * arr[arr.length-1] % (first * end) == 0)
    {
        return check_arr(arr)
    }
    return false;
}


console.log(check_arr([1, 4, 4, 1, 3, 32, 8, 2, 2]));
