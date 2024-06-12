/*
    Algoritmo per grafi bipartiti utilizzando la BFS
*/



function bipartite(graph, s) {

    let queue = [];
    let colors = {};
    
    colors[s] = "red";
    queue.push(s);

    while (queue.length > 0) {
        let current = queue.shift();

        for (let neighbor of graph[current]) {
            if (colors[neighbor] == undefined) {
                if (colors[current] === "red") {
                    colors[neighbor] = "blue";
                } else {
                    colors[neighbor] = "red";
                }
                queue.push(neighbor)
            } else if (colors[current] === colors[neighbor]) 
                    return false;
            }
        }
    return true; 

}



let g = {
    0: [1, 2], 
    1: [0, 3], 
    2: [0, 3], 
    3: [1, 2]
}

let g1 = {
    1: [2, 4],
    2: [1, 3],
    3: [2, 4],
    4: [1, 3]
}

let g3 = {
    1: [2, 3],
    2: [1, 3],
    3: [1, 2]
}


console.log(bipartite(g, 0))
console.log(bipartite(g1, 1))
console.log(bipartite(g3, 1))


