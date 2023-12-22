/*
    Si scriva una funzione maxprod(a) 
    che, dato un array a di numeri naturali 
    restituisca un oggetto con struttura {idx:i, val:n} in cui sia l’indice e 
    il valore dell’elemento in a 
    per cui è massimo il prodotto dell’indice per il valore dell’elemento. 
    In caso di parità, si scelga l’elemento di indice minore.
*/


function maxprod(arr)
{
    let result = {};
    let mult = [];

    for(let i = 0; i < arr.length - 1; i++)
    {
        mult.push(i * arr[i]);
    }
    
    let maxNum = Math.max(...mult);
    let maxInd = mult.indexOf(maxNum);
    
    result["idx"] = maxInd;
    result["val"] = arr[maxInd];
     
    return result;
    
}

// Soluzione proposta

function maxprod(a) {
  let o ={}
  let max = -Infinity;
  for(let i = 0 ; i < a.length ; i++) {
    if((a[i]*i) > max){
      max = a[i]*i;
      o.idx= i;
      o.val = a[i];
    }
  }
  return o;
}

let x = [8, 2, 2, 1]
let y = [1, 8, 1, 2, 2];
console.log(maxprod(x));
console.log(maxprod(y));
