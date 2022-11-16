const { Graph } = require('./graph.js');

// document reference: https://www.tutorialspoint.com/Breadth-first-search-traversal-in-Javascript

// theoraphy
// - step 1: Visit the adjacent unvisited vertex. Mark it as visited. Display it. Insert it in a queue.
// - step 2: If no adjacent vertex is found, remove the first vertex from the queue.
// - step 3: repeat step 1 and step 2 until the queue is empty.

// implement
function bfs(g) {
    const queue = [];
    const graphData = g.getGraph();
    const startNode = graphData.keys();
}