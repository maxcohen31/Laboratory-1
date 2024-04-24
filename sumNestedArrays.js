/*
    Un array annidato, o nested, è un array che contiene al suo interno degli interi e/o altri array annidati.

    Si scriva una funzione Javascript sumNestedArray che dato un array annidato 
    restituisca la somma di tutti gli elementi.

    Nel caso base in cui l'array annidato non contiene interi, si restituisca zero. 
    L'implementazione deve essere effettuata tramite l'utilizzo di ricorsione.



    Esempio:

    let arr = [[1, 2, [3]], 4, [], [[5, 6], 7]];
    sumNestedArray(arr) => 28;

*/

function sumNestedArray(arr) {
    
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number") {
            result += arr[i];
        } else if (typeof arr[i] == "object") {
            result += sumNestedArray(arr[i]);
        } else {
            return 0;
        }
    }
    return result;
}

let arr = [[1, 2, [3]], 4, [], [[5, 6], 7]];
console.log(sumNestedArray(arr))
