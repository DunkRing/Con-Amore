var dijkstra = require('./dijkstraPathAlgo.js');
var graph = require('./graph.js');

// console.log(dijkstra.data.findShortestPath(graph, "start", "end"));
// console.log(dijkstra.data.findShortestPath(graph, "A", "B"));
// console.log(dijkstra.data.findShortestPath(graph, "A", "start"));
console.log(dijkstra.data.findShortestPath(graph.graph, "start", "end")); 
