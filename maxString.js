/*
    Trova la stringa massima in un array (ordine lessicografico).
    Scrivere una funzione ricorsiva.
*/


function maxStringa(arr)
{
    let l = 0;
    let r = arr.length - 1;
    let result = "";
    
    // Un solo elemento
    if(l === r) 
    {
        return arr[0];
    }

    // Due elementi
    if(l+1 === r)
    {
        if(arr[l] > arr[r])
        {
            return arr[l];
        }
        return arr[r];
    }
    
    // Ricorsione
    if(l <= r)
    {
        let mid = Math.floor((l + r)/2);
        let leftArr = maxStringa(arr.slice(l, mid))
        let rightArr = maxStringa(arr.slice(mid, r+1))

        if(leftArr > rightArr) { result = leftArr; }
        else { result = rightArr; }
    } 
    return result;
}

let x = ["Cat", "People", "Strawberry", "Tool", "Love", "Zoe", "Zebra"];
console.log(maxStringa(x));
console.log("Tool" > "Strawberry")
console.log("Tool" > "Zebra")
console.log(x.slice(0, Math.floor(x.length/2)))
console.log(x.slice(Math.floor((x.length/2)), x.length))
