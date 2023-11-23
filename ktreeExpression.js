// ESERCIZIO 0 - Si scriva una funzione che, dato un albero binario che rappresenta un'espressione, restituisca il valore calcolato da tale espressione

// ESEMPIO di espressione: (4*((5*4)+3))**2



function evaluateExp(ktree)
{
    // Se non ci sono i sottoalberi destro e sinistro ritorna il valore della foglia
    if(!(ktree.sx) && !(ktree.dx))
    {
        return ktree.val;
    }

    // L'operatore è la radice
    let operator = ktree.val;
    
    // Chiama la funzione sui sottoalberi 
    let lValue = evaluateExp(ktree.sx);
    let rValue = evaluateExp(ktree.dx);

    switch(operator)
    {
        case "+":
            return lValue + rValue;
        case "-":
            return lValue - rValue;
        case "*":
            return lValue * rValue;
        case "%":
            return lValue % rValue;
        case "/":
            return lValue / rValue;
        case "**":
            return lValue ** rValue;
        default:
            return Nan;
    }
}




let exp_tree = {
  val: "**",
  sx: {
    val: "*",
    sx: { val: 4 },
    dx: {
      val: "+",
      sx: { val: "*", sx: { val: 5 }, dx: { val: 4 } },
      dx: { val: 3 }
    }
  },
  dx: { val: 2 }
}

console.log(evaluateExp(exp_tree))
