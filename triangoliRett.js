/*
    Si scriva una funzione triangoliRettangoli che prenda in input un array di oggetti rappresentanti triangoli,
    tramite i campi base e altezza, oltre che un booleano rettangolo che indica se il triangolo sia rettangolo. 
    La funzione deve restituire un nuovo array contenente i soli triangoli
    rettangoli, rappresentati come oggetti i cui soli campi siano:
    - cateti, un array contenente i valori numerici dei due cateti (corrispondenti a base e altezza);
    - ipotenusa, calcolata mediante il teorema di Pitagora (si può usare Math.sqrt per il calcolo della radice quadrata)

    Nota: La funzione non deve alterare nè l'array originale nè il suo contenuto.
*/


function triangoliRettangoli(triangoli)
{
    let result = [];
    for(let tr of triangoli)
    {   
        let rett = {}
        if(tr.rettangolo)
        {
            rett.cateti = [tr.base, tr.altezza];
            rett.ipotenusa = [Math.sqrt(tr.base**2 + tr.altezza**2)];
            result.push(rett);
        }
    }
    return result; 
}



let triangoli = [
  { base: 14, altezza: 15, rettangolo: false },
  { base: 4, altezza: 5, rettangolo: true },
  { base: 1, altezza: 5, rettangolo: false },
  { base: 1, altezza: 55, rettangolo: true },
]


console.log(triangoliRettangoli(triangoli));
console.log(triangoliRettangoli2(triangoli));
console.log(triangoli);
