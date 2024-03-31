/*
    Algoritmo che stampa la distanza del cammino minimo tra due nodi in un grafo
*/

// Modified BFS
function shortestPathBFS(g, s, d)
{
    let distance = {};
    let visited = new Set();
    let queue = [];

    // Source is added to queue and to visited
    queue.push(s);
    visited.add(s);
    distance[s] = 0;

    while (queue.length)
    {
        // Get first element 
        let current = queue.shift();
        // Current node is the destination node
        if (current == d) 
        {
            return distance[current]
        }

        for (let node of g[current])
        {
            if (!(visited.has(node)))
            {
                visited.add(node);
                queue.push(node);
                distance[node] = distance[current] + 1;
            }
        }
    }
    return distance;
}

let g1 = {
    0: [1, 2, 3],
    1: [0],
    2: [0, 3, 4],
    3: [0, 2],
    4: [2]
}

console.log(shortestPathBFS(g1, 1, 4))
console.log(shortestPathBFS(g1, 0, 4))
