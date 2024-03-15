/*
    Scrive un algoritmo che dato un array di chiavi intere resituisca quella con frequenza unitaria.
*/

function findDistinctElement(arr) {
    let d = {};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in d) {
            d[arr[i]]++;
        } else {
            d[arr[i]] = 1;
        }
    }
    
    for (let el in d) {
        if (d[el] == 1) {
            return el;
        }
    }
    return -1;
}


let x = [2, 4, 5, 4, 4, 6, 6, 2, 1, 7, 8, 8, 6, 7, 8, 8, 1];

console.log(findDistinctElement(x));
