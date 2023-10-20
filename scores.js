/*
    Scrivere una funzione scores che prende in input un array r di stringhe,
    che può contenere "win", "tie" o "los". 
    La funzione scores restituisce il punteggio accumulato assegnando un punto per ogni vittoria 
    ed un punto ogni due pareggi. 
    Se r contiene una stringa diversa dalle tre ammesse, scores(r) restituisce -1
    
*/

function scores(arr)
{
    let score = 0
    let countTies = 0
    
    for(let element of arr)
    {   
        if(element != "win" && element != "los" && element != "tie")
        {
            return -1
        }
        else if(element === "win")
        {
            score += 1
        }
        else if(element === "tie")
        {   
            countTies += 1
            if(countTies === 2)
            {
                score += 1
                countTies = 0
            }
        }
    }
    
    return score

}

let x = ["tie", "los", "tie", "tie", "tie" ]
let x2 = ["los", "niw", "los", "los" ]
let x3 = ["win", "los", "win", "tie", "tie" ]
let x4 = ["win", "los", "win", "tie" ]
console.log(scores(x))
console.log(scores(x2))
console.log(scores(x3))
console.log(scores(x4))
