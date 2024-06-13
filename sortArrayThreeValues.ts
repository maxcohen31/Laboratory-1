/*
    Progettare un algoritmo per ordinare in loco un array a di n interi, 
    il cui valore può essere solo 0, 1 o 2. 
    L’algoritmo deve richiedere tempo lineare nel caso pessimo e può solo scambiare elementi. 
    In particolare, non può usare contatori per mantenere il numero di elementi di un certo valore.
*/


function ordina(a: number[]): number[] {
    
    let i: number = 0;
    let j: number = 0;
    let k: number = a.length - 1;

    while (j <= k) {
        if (a[j] == 0) {
            
            let temp: number = a[j];
            a[j] = a[i];
            a[i] = temp;
            i++;
            j++
        } 
            
        if (a[j] == 2) {

            let temp: number = a[j];
            a[j] = a[k];
            a[k] = temp;
            k--;

        } else {
            j++;
        }
    }
    return a
}

let x: number[] = [1, 0, 2, 0, 2, 1, 0]
console.log(ordina(x));
