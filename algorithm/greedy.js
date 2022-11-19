const { Graph } = require("./graph");

function calculateMoney(money) {
    const unit = [500, 200, 100, 50, 20, 10, 5, 2, 1];
    let i = 0;
    while (money > 0) {
        if (unit[i] <= money) {
            const amount = Math.floor(money / unit[i]);
            console.log(`return ${unit[i]}: ${amount}`);
            money -= unit[i] * amount;
        }
        i++;
    }
}

// calculateMoney(555)

function color(g) {
    let color = 0;
    let nodes = g.getAllNode();
    // sort list nodes
    nodes.sort((a, b) => {
        const aLength = g.getNodeAt(a)?.length || 0;
        const bLength = g.getNodeAt(b)?.length || 0;
        return bLength - aLength;
    })
    while (nodes.length > 0) {
        console.log(`node ${nodes[0]}: color ${color}`);
        const store = [nodes[0]];
        const isAdjacent = new Map();
        // mark all adjacent
        const nData = g.getNodeAt(nodes[0]);
        if (nData) {
            for (const n of nData) {
                isAdjacent.set(n.toString(), true);
            }
        }
        // loop over nodes, if exist a node which not is adjacent whith current node, color this node
        // add this node to store
        for (let i = 1; i < nodes.length; i++) {
            if (!isAdjacent.has(nodes[i].toString())) {
                console.log(`node ${nodes[i]}: color ${color}`);
                store.push(nodes[i]);
            }
        }
        // remove all colored node from nodes
        nodes = nodes.filter(n => !store.includes(n));
        //  sort node
        nodes.sort((a, b) => {
            const aLength = g.getNodeAt(a)?.length || 0;
            const bLength = g.getNodeAt(b)?.length || 0;
            return bLength - aLength;
        })
        color++;
    }
}
const g = new Graph();
g.addEdge(1, [2, 3, 5]);
g.addEdge(2, [1]);
g.addEdge(3, [1, 5]);
g.addEdge(4, [5]);
g.addEdge(5, [1, 3, 4])
color(g);