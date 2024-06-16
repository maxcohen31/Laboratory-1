/*
    Un vettore A di dimensione n contiene solo 4 caratteri distinti: 
    a, b, c, d. Si vuole riordinare A in modo tale che le a precedano le b, 
    le b precedano le c, che a loro volta precedano le d.

    -Si dimostri un lower bound sul tempo per il problema

    -Definire un algoritmo efficiente in tempo che risolva il problema

    -Si discuta e si dimostri la complessità in tempo e spazio della soluzione proposta

    -Si dica se la soluzione proposta è ottima rispetto al tempo o no


    lower bound: Omega(n);
    complessità: O(n)

*/

function sort(a: string[]) {
    
    let chars: { [a: string]: number } = {'a': 0, 'b': 0, 'c': 0, 'd': 0};

    for (let i: number = 0; i < a.length; i++) {
        chars[a[i]] += 1;
    }
    

    let idx: number = 0;
    for (let c of ['a', 'b', 'c', 'd']) {
        for (let i: number = 0; i < chars[c]; i++) {
            a[idx] = c;
            idx++;
        }
    }

    return a;
}

let a1: string[] = ['c', 'a', 'd', 'b', 'b', 'a', 'a', 'a'];
console.log(sort(a1));
