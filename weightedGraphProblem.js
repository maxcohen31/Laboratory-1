/*
    Si consideri un grafo orientato G = (V, E) i cui nodi sono pesati (ossia
    contengono valori interi memorizzati in un campo peso). Dato un intero
    positivo k e dati due vertici x e y di peso minore o uguale a k, si deve
    stabilire se esiste un cammino da x a y i cui vertici hanno tutti peso minore
    o uguale a k.
*/

function weightedGraph(graph, u, v, k) {
    
    let visited = new Set();
    let queue = [];

    queue.push(u);

    while (queue.length) {
        let current = queue.shift();
        visited.add(current);

        if (current == v) {
            return true;
        }

        for (let [n, w] of graph[current]) {
            if (w <= k && !(visited.has(n))) {
                queue.push(n);
            }
        }
    }
    return false;
}

