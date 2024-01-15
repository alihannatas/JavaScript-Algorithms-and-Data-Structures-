class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  //version 1 with for loop
  removeVertex(vertex) {
    let temp = this.adjacencyList[vertex];
    for (let i = 0; i < temp.length; i++) {
      this.removeEdge(vertex, temp[i]);
    }
    delete this.adjacencyList[vertex];
  }
  //version 2 with while loop
  removeVertex2(vertex) {
    while (this.adjacencyList[vertex].length) {
      const temp = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, temp);
    }
    delete this.adjacencyList[vertex];
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1].includes(vertex2))
      this.adjacencyList[vertex1].push(vertex2);
    if (!this.adjacencyList[vertex2].includes(vertex1))
      this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (item) => item !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (item) => item !== vertex1
    );
  }
  DFSrecursive(vertex) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((element) => {
        if (visited[element] != true) return dfs(element);
      });
    })(vertex);
    return result;
  }
  DFSiterative(vertex) {
    const stack = [vertex];
    const result = [];
    const visited = {};

    visited[vertex] = true;
    while (stack.length) {
      let currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((element) => {
        if (!visited[element]) {
          visited[element] = true;
          stack.push(element);
        }
      });
    }
    return result;
  }
  BFS(vertex) {
    const queue = [vertex];
    const result = [];
    const visited = {};
    visited[vertex] = true;
    while (queue.length) {
      let currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((item) => {
        if (!visited[item]) {
          visited[item] = true;
          queue.push(item);
        }
      });
    }
    return result;
  }
}
