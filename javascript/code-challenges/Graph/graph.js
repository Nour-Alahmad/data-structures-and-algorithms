class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addDirectedEdge(start, end, weight) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      console.log(`Vertex does not exist`);
      return;
    } else {
      const adjacencies = this.adjacencyList.get(start);
      let edge = new Edge(end, weight);
      adjacencies.push(edge);
    }
  }

  getVertices() {
    return Array.from(this.adjacencyList.keys());
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      return [];
    }

    return this.adjacencyList.get(vertex);
  }

  size() {
    return this.adjacencyList.size;
  }

  
  
  breadthFirst(startNode) {
    const visited = new Set();
    const result = [];
    const nodesarrayList = [startNode];

    visited.add(startNode);

    while (nodesarrayList.length > 0) {
      const currentNode = nodesarrayList.shift();
      result.push(currentNode);

      for (const neighbor of this.adjacencyList.get(currentNode)) {
        if (!visited.has(neighbor.vertex)) {
          visited.add(neighbor.vertex);
          nodesarrayList.push(neighbor.vertex);
        }
      }
    }

    return result;
  }
}
=======
}