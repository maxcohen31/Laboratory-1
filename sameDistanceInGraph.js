/*
    Si consideri il seguente problema: dato un grafo orientato G 
    (con n nodi e m archi) e due nodi s1 e s2 di G, 
    trovare il numero di nodi di G raggiungibili da s1 e s2, e che si trovano alla stessa distanza da s1 e da s2.

    -Descrivere una possibile idea per risolvere il problema

    -Scrivere un algoritmo in L (senza tipi) che implementa l'idea appena descritta, e discuterne la complessità.



    Nota: in un grafo orientato G, dati due nodi s e v, 
    si dice che v è raggiungibile da s se esiste un cammino da s a v e; 
    in questo caso, 
    la distanza di v da s è la lunghezza del più breve cammino da s a v 
    (misurato in numero di archi).

*/

function bfs(graph, v) {
    
    let queue = [v]; 
    let distances = []
    
    for (let i = 0; i < graph.length; i++) {
        distances[i] = -1;
    }

    distances[v] = 0;
    
    while (queue.length > 0) {
        
        let node = queue.shift()
            
        for (let n of graph[node]) {
            // nodo non visitato
            if (distances[n] === -1) {
                distances[n] = distances[node] + 1;
                queue.push(n);
            }
        }
    }

    return distances 
}

function findDistance(graph, s1, s2) {

    let dist1 = bfs(graph, s1);
    let dist2 = bfs(graph, s2);
    let c = 0;

    for (let i = 0; i < graph.length; i++) {
        if ((dist1[i] == dist2[i]) && (dist1[i] != -1) && (dist2[i] != -1)) {
            c++;
        }
    }

    return c;

}

const g = [
    [1, 2],    // nodo 0
    [0, 3, 4], // nodo 1
    [0, 4],    // nodo 2
    [1, 5],    // nodo 3
    [1, 2, 5], // nodo 4
    [3, 4]     // nodo 5
];

console.log(bfs(g, 3))
console.log(findDistance(g, 0, 3))
