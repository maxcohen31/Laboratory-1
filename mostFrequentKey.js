/*
    Si scriva un algoritmo che dato un array restituisca l'elemento con frequenza massima
*/


function mostFrequentElement(arr) {
    let dict = {};

    for (let i = 0; i < arr.length; i++) {
        if ([arr[i]] in dict) {
            dict[arr[i]] += 1;
        } else {
            dict[arr[i]] = 1;
        }
    }
    
    let max = -1;
    for (let elem in dict) {
        if (max < dict[elem]) {
            max = dict[elem]
            return elem;
        } else {
            return max;
        }
    }
}

let x = [40, 50, 30, 40, 50, 30, 30]; 

console.log(mostFrequentElement(x))
