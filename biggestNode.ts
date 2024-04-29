/*
    Si consideri la seguente interfaccia TNode, che definisce i nodi di un albero k-ario:

    interface TNode<T> {

    val: T,

    children: TNode<T>[]

    }



    Si scriva una funzione biggest che prende in input due parametri: 
    la radice root di un albero e una funzione bigger che dati due valori 
    (del tipo contenuto nell'albero) restituisce true se il primo valore è maggiore del secondo e false altrimenti. 
    La funzione biggest deve calcolare ricorsivamente l'elemento più grande nell'albero radicato in root 
    secondo la funzione bigger. Se l'albero non contiene nessun elemento, la funzione deve restituire undefined.

    Nota: La soluzione deve essere scritta in TypeScript, 
    tipando ogni firma e dichiarazione nel modo più preciso possibile (es. usare any, invalida l'esercizio).
*/

interface TNode<T> {
    val: T;
    children: TNode<T>[];
}

function biggest<T>(root: TNode<T>, bigger: (a: T, b: T) => boolean): T|undefined {
    if (!root || !root.val) {
        return undefined;
    }
    if (root.children.length === 0) {
        return root.val;
    }

    let max: T = root.val;
    for (let i: number = 0; i < root.children.length; i++) {
        if (!bigger(max, root.children[i].val)) {
            max = root.children[i].val
        } else {
            biggest(root.children[i], bigger);
        }
    }
    return max;
}

let leaf: TNode<string> = { val: "super!", children: [] }

let tree: TNode<string> = {
  val: "accipicchia",
  children: [{
    val: "perdindirindina",
    children: [
      { val: "perdincibacco", children: [] },
      { val: "cavolini di bruxelles", children: [] },
      { val: "cavoletti romani", children: [
        {val: "aaa cercasi frase", children: []}
      ]},
    ]
  }, leaf]
}

console.log(biggest(tree, (x, y) => (x>y)))
