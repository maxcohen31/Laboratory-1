/*
    calcolaV2: riceve un array ops di tuple fatte di tre elementi (2 operandi e 1 operatore) 
    e restituisce l'array risultante dall'esecuzione di tutte le operazioni indicate in ops
*/


enum Operation {
    Addition = '+',
    Subtraction = '-',
    Multiply = '*',
    Divide = '/'
}

type Tupla = [number, number, Operation]
type TuplaCalcolaV3 = []


function calcola(n1:number,n2:number,o1:Operation):number {
  switch(o1) {
    case Operation.Addition: 
      return n1+n2
    case Operation.Subtraction:
      return n1-n2
    case Operation.Multiply:
      return n1*n2
    case Operation.Divide:
      return n1/n2
  }
}

function calcolaV2(ops: Tupla[]): number[] {
    return ops.map((x: Tupla) => {
        return calcola(x[0], x[1], x[2])
    })
}


let myTupla: Tupla[] = [
    [5, 6, Operation.Multiply],
    [5, 6, Operation.Subtraction],
    [4, Operation.Divide, 2]
]

console.log(calcolaV2(myTupla))
