// document reference: https://www.tutorialspoint.com/depth-first-search

// Theoraphy:
// visit current node, mark node is visted
// visit all adjacent node of current node
// repeate untill all node is visted

// Implement
const { Graph } = require('./graph');
function dfs(g, node) {
    console.log('start dfs.');
    console.log('visit node: ' + node);
    if (!g.getNodeAt(node)) {
        console.log('finish dfs.');
        return;
    }
    const map = {};
    map[node] = true;
    for (const n of g.getNodeAt(node)) {
        dfsUntil(g, n, map);
    }
    console.log('finish dfs.');
}
function dfsUntil(g, node, map) {
    if (!map[node]) {
        console.log('visit node: ' + node);
        map[node] = true;
        for (const n of g.getNodeAt(node) || []) {
            if(map[n]) continue;
            dfsUntil(g, n, map);
        }
    }
    return;
}
const g = new Graph();
g.addEdge(0, [1, 2, 3, 4]);
g.addEdge(1, [3]);
g.addEdge(2, [4, 5]);
g.addEdge(3, [5]);
g.addEdge(5, [6, 7])
g.addEdge(7, 6)
dfs(g, 0);