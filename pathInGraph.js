/*
    Progettare un algoritmo che dato un grafo e due nodi stabilisca se 
    tra essi esiste un cammino
*/


function pathGraph(g, x, y) {
    
    let q = [];
    q.push(x);

    while (q.length > 0) {
        
        let current = q.shift();
        
        if (current == y) {
            return true;
        }

        for (let n of g[current]) {
            q.push(n)
        }
    }
    return false;
}
