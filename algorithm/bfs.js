const { Graph } = require('./graph.js');

// document reference: https://www.tutorialspoint.com/Breadth-first-search-traversal-in-Javascript

// theoraphy
// - step 1: Visit the adjacent unvisited vertex. Mark it as visited. Display it. Insert it in a queue.
// - step 2: If no adjacent vertex is found, remove the first vertex from the queue.
// - step 3: repeat step 1 and step 2 until the queue is empty.

// implement
function bfs(g, node) {
    console.log('Start BFS.');
    if (!g.getNodeAt(node)) {
        console.log('visit node: ' + node);
        console.log('Finish BFS.');
        return;
    }
    const queue = [];
    const visitedPoint = {};
    //add node to queue
    queue.unshift(node);
    // set node is visited
    visitedPoint[node] = true;
    console.log('visit node: ' + node);
    let n = node;
    // repeate until queue empty
    while (queue.length > 0) {
        const nData = g.getNodeAt(n);
        if (!nData) continue;
        for (let i = 0; i < nData.length; i++) {
            if (visitedPoint[nData[i]]) continue;
            queue.unshift(nData[i]);
            visitedPoint[nData[i]] = true;
            console.log('visit node: ' + nData[i]);
        }
        n = queue.shift();
    }
    console.log('Finish BFS.');
}
// example
const g = new Graph();
g.addEdge(0, 3);
g.addEdge(1, 5);
g.addEdge(2, [0, 1, 5]);
g.addEdge(3, 5);
g.addEdge(4, []);
g.addEdge(5, [1, 6]);
g.addEdge(6, [2, 7]);
g.addEdge(7, 6);

bfs(g, 6);