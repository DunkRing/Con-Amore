var dijkstra = require('./dijkstraPathAlgo.js');
var graph = require('./graph.js');
var stationer = require('./modelST.js');

// console.log(dijkstra.data.findShortestPath(graph.graph, "A", "B"));// a-start-b 3
// console.log(dijkstra.data.findShortestPath(graph.graph, "A", "start")); // a-start-b 3
// console.log(dijkstra.data.findShortestPath(graph.graph, "start", "end")); // { distance: 8, path: [ 'start', 'A', 'D', 'end' ] }

console.log(dijkstra.data.findShortestPath(stationer.stationer, "Hillerød", "KBHallen"));
