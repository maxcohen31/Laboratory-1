/*
    Esempi di assegnamento di destrutturazione
*/

let x = [1, 2, 3, 5];
let y = [32, 33, 45, 55, 66];

let [a, b] = x; // a = 1, b = 2
console.log([...x, ...x]) // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

let [s, ...r] = y;
console.log(s, r) // 32, [33, 45, 55, 66]

let [a1, b1, c1, d1, e1] = x; 
console.log(a1, b1, c1, d1, e1); // 1, 2, 3, 5, undefined

let [a2, b2, c2=12, d2=1, e2=25, f2=100] = y;
console.log(a2, b2, c2, d2, e2, f2);

let O = { n: "Pippo", a: 35, c: true }
let {n, p=12} = O;
console.log(n, p); // "Pippo", 12


function double(n, m) { return [2 * n, 2 * m]; }

let v = [2, 4];
let [m, q] = double(3, 9);
console.log(m, q)
