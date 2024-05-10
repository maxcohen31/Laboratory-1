/*
    Soluzione proposta dal Prof. Soldani
*/

interface Nodo<T> {
  val: T,
  children: Nodo<T>[]
}

function trova<T>(root:Nodo<T>,controlla:(x:T)=>boolean,confronta:(x:T,y:T)=>number):T[] {
  let valori:T[] = _trova(root,controlla)
  valori.sort(confronta)
  return valori
}

function _trova<T>(root:Nodo<T>,controlla:(x:T)=>boolean):T[] {
  let valori:T[] = []
  if(controlla(root.val))
    valori.push(root.val)
  for (let c of root.children) {
    let altriValori:T[] = _trova(c,controlla)
    valori.push(...altriValori)
  }
  return valori
}
