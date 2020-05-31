var stationer = require('./modelST.js');

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
}

var graph = new WeightedGraph()

// An Object 
var stNames = Object.getOwnPropertyNames(stationer.stationer); 
//console.log(Object.values(obj));
console.log(stNames);

stNames.forEach(st => {
    graph.addVertex(st);
    stNames.forEach(element => {
        console.log(Object.getOwnPropertyNames(stationer.stationer.element))
    });
});

console.log(graph.adjacencyList);