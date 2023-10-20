function palindrome(s)
{
    let len = s.length
    let result = 0
    
    while(result < len-1)
    {
        if(s[result] != s[len-1-result])
        {
            return false
        }
        result++
    }
    return true
}

    


let x = "madam"
let x2 = "culo"
console.log(palindrome(x));
console.log(palindrome(x2));
