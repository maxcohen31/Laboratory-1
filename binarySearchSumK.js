/*
    Input: array di n interi, k intero.
    Output: true se esiste un 1 <= i, j <= n tale che a[i] + a[j] = k

    Operiamo su array già ordinati.
*/

function binarySearch(array, p, r, k) {
    if (p <= r) {
        let middle = Math.floor((p + r) / 2);

        if (array[middle] === k) {
            return true;
        }
        if (array[middle] < k) {
            binarySearch(array, p, middle-1, k);
        }
        else {
            binarySearch(array, middle+1, r, k)
        }
    }
    return false;
}

function sumK(array, k) {
    for (let i = 0; i < array.length; i++) {
        if (binarySearch(array, 0, array.length, k - array[i])) {
            return true;
        }
    }
    return false;
}

