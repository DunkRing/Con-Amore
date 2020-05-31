var dijkstra = require('./dijkstraPathAlgo.js');
var stationer = require('./modelST.js');

//console.log(dijkstra.data.findShortestPath(stationer.stationer, "Hillerød", "Frederiksund"));

 var stations = stationer.stationer;
stations.forEach(station => {
    
    console.log(station)     
});


Array.from(parent.children).forEach(child => {
    console.log(child)
});