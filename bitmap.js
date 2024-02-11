/*
    Programma che legge una bitmap 8×8 e restituisce un array di 8 interi a 8 bit che la codifica
*/

let symb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']  

function toHex(n)
{
    hex = "";
    result = ""
    while(n > 0)
    {
        rst = n % 16;
        hex += symb[rst]
        n = (n - rst) / 16;
    }
    for(i = hex.length - 1; i >= 0; i--)
    {
        result += hex[i]
    }
    
    return result;
    
}

function encode(bitMap, base)
{
    let binResult = [] 
    let hexResult = []

    for(i = 0; i < bitMap.length; i++)
    {
        let convert = 0 
        for(j = 0; j < bitMap[i].length; j++)
        {
            convert = (convert * 2) + bitMap[i][j];
        }
        binResult.push(convert)
    }
    
    for(let int of binResult)
    {
        hexResult.push(toHex(int))
    }
    
    if(base === 2)
    {
        return binResult
    }
    return hexResult
}   

// Proposed solution
function bitmap(b){
  let a = [];
  for(let i=0; i<b.length; i++){
    let codifica = 0;
    for(let j=0; j<b[i].length; j++){
      codifica += b[i][j]*(2**(b[i].length-1-j))
    }
    a.push(codifica);
  }
  return a;
}

let b = [
    [0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 0], 
    [0, 1, 1, 1, 0, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
]

console.log(encode(b, 2));
console.log(bitmap(b));


