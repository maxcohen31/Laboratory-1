/*
    Algoritmo di programmazione dinamica per il calcolo del n-esimo numero di Fibonacci 
*/

type fib = {[n: number]: number};

let memo: fib = {};

function contains(element: number, set: fib): boolean {
    return element in set;
}

function dynamicFibonacci(n: number): number {

    if (contains(n, memo)) {
        return memo[n];
    }
        
    let result: number = 0

    if (n < 2) {
        result = 1;
    }
    
    if (n > 2) {
        result = dynamicFibonacci(n-1) + dynamicFibonacci(n-2); 
    }

    memo[n] = result;

    return result;
}

