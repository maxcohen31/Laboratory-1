/*
    Algoritmo di Dijkstra con coda di priorità.
*/


function dijkstra(graph, s)
{
    let queue = [s];
    let distances = {};
    let visited = new Set();

    // Le distanze dal nodo iniziale vengono settate a infinito
    for (let k in graph)
    {
        distances[k] = Infinity;
    }

    // La distanza dal nodo a sé steso è 0
    distances[s] = 0;
    
    while (queue.length)
    {
        // Prendiamo il nodo con il peso più piccolo rispetto al nodo iniziale
        queue.sort((x, y) => (distances[x] - distances[y]));
        let current = queue.shift();

        // Il nodo corrente è visitato 
        visited.add(current);

        // Controlliamo la lista di adiacenza di tutti i nodi
        for (let node in graph[current])
        {
            let distance = distances[current] + graph[current][node];
            // Rilassamento dell'arco
            if (distance < distances[node])
            {
                distances[node] = distance;
                queue.push(node);
            }
        }
    }
    return distances;
}

let g = {
    1: {1: 50, 4: 10, 3: 45},
    2: {3: 10},
    3: {5: 30},
    4: {1: 10, 5: 15},
    5: {2: 20, 3: 35},
    6: {5: 3}
}

console.log(dijkstra(g, 1))
