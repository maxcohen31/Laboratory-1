/*
    Si consideri l'interfaccia List definita come segue:

    interface List {

    val: Point

    next: List | null

    }

    dove il tipo Point rappresenta un punto nel piano cartesiano e deve essere definito come coppia di numeri. 
    Ad esempio, la coppia [-2,3] sarà usata per rappresenta il punto la cui coordinata x è -2 e la cui coordinata y è 4.



    Si implementi in TypeScript la funzione filter definita come segue: 
    Dati in input una lista l e un predicato p, filter restituisce un array contenente tutti i Point in l 
    che soddisfano il predicato p, nello stesso ordine in cui appaiono nella lista originale. 
    L'array DEVE essere calcolato RICORSIVAMENTE affinchè l'esercizio sia valutato positivamente.



    Si implementi, inoltre, una funzione sortedFilter che calcoli lo stesso array di filter, 
    restituendolo però ordinato per coordinate crescenti 
    (ovvero mettendo prima i punti con coordinate x minori e, a parità di x, quelli con coordinate y minori).



    Suggerimento: sortedFilter può essere realizzata riusando la funzione filter per calcolare l'array, 
    ordinandolo successivamente sfruttando le funzioni offerte dalla libreria Array di JS.

    Tutti i tipi devono essere rigorosamente e accuratamente annotati.
*/

type Point = [number, number];

interface List {
    val: Point;
    next: List|null;
}


function filter(l: List, p: (x: Point) => boolean): Point[] {

    if (!l) {
        return [];
    }
    
    let result = [l.val];

    if (p(l.val)) {
        return result.concat(filter(l.next!, p));
    } else {
        return filter(l.next!, p);
    }
}

function sortedFilter(l: List, p: (x: Point) => boolean): Point[] {
    let result: Point[] = filter(l, p); 
    return result.sort((x, y) => {
        if (x[0] <= y[0]) {
            return -1;
        }
        else if (x[0] >= y[0]) {
            return 1;
        } else {
            return 0;
        }
    });
}

let l: List = {
  val: [4,5],
  next: {
    val: [-3,45],
    next: {
      val: [-2,-2],
      next: {
        val: [-3,12],
        next: {
          val: [3,-5],
          next: null
        }
      }
    }
  }
}

console.log(filter(l,(x:Point)=>(x[0]*x[1]>=0)));
console.log(sortedFilter(l, (x:Point)=>(x[0]*x[1]>=0)))
