/*
    Algoritmo per la visita in ampiezza di un grafo - Breadth First Search    
*/

function contains(set, element)
{
    return element in set;
}

function add(set, element)
{
    if (!(contains(set, element)))
    {
        set[element] = 1;
    }
}

function bfs(g, s)
{
    let queue = [s];
    let result = [];
    // Store visisited nodes
    let visited = {};

    while (queue.length)
    {
        // Remove element from queue
        let current = queue.shift();

        // Check if current node is already being visited
        if (!(contains(visited, current)))
        {
            add(visited, current);
            result.push(current);

            // Add neighbors of the curent node to our queue
            for (let vert of g[current])
            {
                queue.push(vert);
            }
        }
    }
    return result;

}






let graph = {
    'A': ['B', 'C'],
    'B': ['A', 'C', 'E'],
    'C': ['A', 'B', 'D', 'E'],
    'D': ['C', 'E'],
    'E': ['B', 'C', 'D']
}

console.log(bfs(graph, 'B'))
