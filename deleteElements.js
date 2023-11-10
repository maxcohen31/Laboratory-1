function eliminaElementi(a)
{   
    for(i = 0; i <= a.length; i++)
    {
        // check for conditions to be satisfied
        if(typeof a[i] === "string" && a[i].length % 2 === 1)
        {
            a.splice(i, 1)
        }
        else if(typeof a[i] === "number" && a[i] % 2 != 0)
        {
            a.splice(i, 1); 
        }
        else if(Boolean(a[i]) === false)
        {
            a.splice(i, 1)
        }
    }
    return a
}


function elimina2(arr)
{   
    let i = 0;
    while(i > 0)
    {
        switch(typeof arr[i])
        {
            case "number":
                if(arr[i] % 2 === 1)
                {
                   arr.splice(i, 1);
                   break; 
                }
                else
                {
                    i++;
                }
            case "string":
                if(arr[i].length % 2 === 1)
                {
                    arr.splice(i, 1);
                    break; 
                }
                else
                {
                    i++;
                }
            case "boolean":
                if(arr[i] === false)
                {
                    arr.splice(i, 1);
                    break; 
                }
                else
                {
                    i++;
                }
            default:
                break
        }
    }
    return arr
}


let x = [1, 2, false, true, "pippo", "pari"]
let x2 = [4, 2] 
let x3 = [3, false, "dispari"]
console.log(eliminaElementi(x))
console.log(eliminaElementi(x2))
console.log(eliminaElementi(x3))
console.log(elimina2(x))
console.log(elimina2(x2))
console.log(elimina2(x3))

