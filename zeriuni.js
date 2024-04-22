/*
    Scrivere una funzione zeriuni che, dato un numero n (intero e positivo), 
    restituisce un array di 0 e 1 che rappresenti la sua codifica su 8 bit. 
    Gli 0 e 1 devono essere rappresentati come numeri, 
    mettendo il più significativo nella posizione 0 dell'array restituito, 
    e quello meno significativo nella posizione 7.

    La funzione zeriuni deve inoltre lanciare due eccezioni NonIntegerError e OutOfRangeError definite opportunamente:

    l'eccezione NonIntegerError viene lanciata da zeriuni(n) quando il numero n non è intero, 
    mentre l'eccezione OutOfRangeError viene lanciata da zeriuni(n) 
    quando il numero n è fuori dal range degli interi positivi rappresentabili su 8 bit.

*/

class NonIntegerError extends Error { ; }
class OutOfRangeError extends Error { ; }

function zeriuni(n) {
    if (n < 0 || n > 255) {
        throw new OutOfRangeError();
    } 

    if (!(Number.isInteger(n))) {
        throw new NonIntegerError("Not an integer!");
    }

    let result = [0, 0, 0, 0, 0, 0, 0, 0];
    
    let i = 7;
    while (i >= 0) {
        let rst = n % 2;
        result[i] = rst;
        n = (n - rst) / 2;
        i--;
    }

    return result;

}

console.log(zeriuni(255))
