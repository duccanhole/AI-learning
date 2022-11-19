class Graph {
    #map;
    constructor() {
        this.#map = {}
    }
    addNode(v) {
        if (this.#map[v]) return
        this.#map[v] = [];
    }
    addEdge(v, w) {
        if (this.#map[v]) {
            if (Array.isArray(w)) this.#map[v].push(...w);
            else this.#map[v].push(w)
        }
        else {
            if (Array.isArray(w)) this.#map[v] = w;
            else this.#map[v] = [w]
        }
    }
    getNodeAt(v) {
        if (!this.#map[v]) return null;
        return this.#map[v];
    }
    getAllNode() {
        return Object.keys(this.#map)
    }
}

module.exports = { Graph }
