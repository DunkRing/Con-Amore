var dijkstra = require('./dijkstraPathAlgo.js');
var stationer = require('./modelST.js');

console.log(dijkstra.data.findShortestPath(stationer.stationer, "Hillerød", "Frederiksund"));
