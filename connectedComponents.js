/*
    Scrivere un algoritmo che conti le componenti connesse in un grafo
*/


function connectedComponents(graph)
{    
    let visited = new Set(); 
    let cc = 0;

    for (let i = 0; i < graph.length; i++)
    {
        if (!(visited.has(i)))
        {
            cc++;
            visited.add(graph[i]);
            let q = [];
            q.push([i]);
            
            while (q.length)
            {
                let current = q.shift();

                for (let node of graph[current])
                {
                    if (!(visited.has(node)))
                    {
                        visited.add(node);
                        q.push(node);
                    }
                }
            }
        }
    }
    return cc;
}    





let g1 = [ 
    [],
    [2],
    [1],
    [4, 5],
    [3],
    [3]

]

let graph = [
    [1, 2, 3],  
    [0, 2],     
    [0, 1],   
    [0, 4, 5],
    [3, 5],
    [3, 4, 7],
    [8],
    [5],
    [9, 6],
    [8]
]



console.log(connectedComponents(g1))
console.log(connectedComponents(graph))
