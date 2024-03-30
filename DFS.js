/*
    Algoritmo per la visita in profondità di un grafo. Depth First Search
*/

function dfs(g, s)
{
    let stack = [s];
    let visited = new Set();
    let result = [];

    while (stack.length)
    {
        // Remove from stack the first element
        let current = stack.pop();  

        // Check if the current node is being visited
        if (!(visited.has(current)))
        {
            // Add to visited the current node
            visited.add(current);
            result.push(current);

            // Visit the adjacency list of current node
            for (let node of g[current])
            {
                if (!(visited.has(node)) && !(stack.includes(node)))
                {
                    stack.push(node);
                }
            }
        }
    }
    return result;
}


let graph = {
    'A': ['B', 'C', 'D'],
    'B': ['A', 'E'],
    'C': ['A', 'D', 'E'],
    'D': ['A', 'C'],
    'E': ['B', 'C']
}

let graph2 = {
    0: [1, 2, 3],
    1: [0],
    2: [0, 3, 4],
    3: [0, 2],
    4: [2]
}

console.log(dfs(graph, 'E'));
console.log(dfs(graph2, 0));
