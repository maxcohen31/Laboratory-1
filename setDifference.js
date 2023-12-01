/*
    Scrivere una funzione differenza(a, b) che restituisce l'insieme risultato della differenza 
    fra l'insieme a e l'insieme b    
*/

function contain(A, value){
    return value in A;
}

function differenza(A, B)
{
    let result = {};

    for(let i in A){
        if(!contain(B, i)){
            result[i] = 1;
        }
    }
    return result;
}  

let x = {1: true, 2: true, 3: true};
let y = {1: true, 2: true, 4: true};
let z = {}
let y2 = {1: true, 2: true, 3: true};
console.log(differenza(x, y2));
console.log(differenza(z, z));
