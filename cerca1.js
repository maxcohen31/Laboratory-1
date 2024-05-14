/*
    Input: Array ordinato di n interi distinti;
    Output: T se esiste i tale che 1 <= i <= n, a[i] = i; F altrimenti
*/


function cerca1(a) {
    let i = 0;

    while (i < a.length || a[i] < i) {
        if (a[i] === i) {
            return true;
        } else if (a[i] > i) {
            return false; 
        }
        i++;
    }    
    return false;

}

let a = [2, 3, 4, 7, 8, 9];

console.log(cerca1(a))
