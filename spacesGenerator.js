/*
    Si definisca la classe Bounded2DSpace che implementi uno spazio cartesiano di due dimensioni. 
    La classe è caratterizzata da proprietà pubbliche bounded_x e bounded_y, 
    entrambe array di interi nell'intervallo [-10, Infinity]

    Il costruttore prende in input due array di interi x e y di dimensione uguale, 
    applica il bound sopra menzionato filtrando da entrambi gli array tutti gli indici i € [0, x.length-1]
    tali per cui x[i] < 10 or y[i] < -10, e li assegna rispettivamente a bounded_x e bounded_y.

    Dopodichè si definisca una classe PyramidSpace che estende Bounded2DSpace aggiungendo il metodo
    generatore generate_pyramid() che, per ogni indice i € [0, x.length-1], restituisce un array 
    [bounded_x[i], bounded_y[i], f(bounded_x[i], bounded_y[i])] dove f(x, y) = 1 + |x+y| - |x-y|.

*/

class Bounded2DSpace
{
    bounded_x;
    bounded_y;

    constructor(x, y)
    {
        this.bounded_x = this.bound(x);
        this.bounded_y = this.bound(y);
    }

    bound(arr)
    {
        return arr.filter((x) => (x >= -10));
    }
}

class PyramidSpace extends Bounded2DSpace
{
    *generate_pyramid()
    {
        for (let i = 0; i < this.bounded_x.length; i++)
        {
            let x = this.bounded_x[i];
            let y = this.bounded_y[i];
            yield [x, y, 1 + Math.abs(x + y) - Math.abs(x - y) ]
            
        }   
        
    }
}


