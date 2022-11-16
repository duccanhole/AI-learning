class Graph {
    #map;
    constructor() {
        this.#map = {}
    }
    addEdge(v, w) {
        if (this.#map[v]) {
            this.#map[v].push(w)
        }
        else {
            this.#map[v] = [w]
        }
    }
    getGraph() {
        return this.#map
    }
}
const g = new Graph();
console.log(g.getGraph());
module.exports = { Graph }