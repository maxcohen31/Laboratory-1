/*
  Invertimi
  Scrivi un programma che dato un numero N, generi un array di N numeri casuali
  e stampi sia l'array ottenuto che quello invertito.

  Esempio:
    Input: N = 5
    Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

  Variante:
  Non utilizzare array/variabili di appoggio per l'inversione.

  Consigli:
  Per la variante ricordati l'uso degli indici del ciclo ;)

  http://www.imparareaprogrammare.it

*/

function reverseArray(arr)
{
    for(let i = 0; i < (arr.length - 1) / 2; i++)
    {
        let temp = arr[i]
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
        
    }
    return arr;
}

let a = [3, 5, 10, 2, 8];
let a2 = [1, 2, 3, 4];

console.log(reverseArray(a)); // [8, 2, 10, 5, 3]
console.log(reverseArray(a2)); // [4, 3, 2, 1]



