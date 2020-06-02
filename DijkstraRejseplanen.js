var stationer = require('./modelST.js');

class PriorityQueue {
    constructor(){
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
    };
    dequeue() {
      return this.values.shift();
    };
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    };
  }

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};  //adjacencyList unorden list of element that makes up the finite graph (A graph with a finite number of nodes and edges.)
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2, weight){
        this.adjacencyList[vertex1].push({stationName:vertex2, weight});
        this.adjacencyList[vertex2].push({stationName:vertex1, weight});
    }
    Dijkstra(start, finish){
        const nodes = new PriorityQueue();             // all the vertex in the graph.
        const distances = {};                          // all the distances.
        const previous = {};                           // how we got frem one node to another (Shortest path tree).
        let path = []                                  // to return at the end.
        let smallest;

        //build up initial state of the algorithme 
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;                 // distance to the start node itself, which of course is 0.
                nodes.enqueue(vertex, 0);              // adds to prioity queue with 0 because its the first node.
            } else {
                distances[vertex] = Infinity;          // all other disatnce is set to infinity.
                nodes.enqueue(vertex, Infinity);       // all other vertex has the priority of inifity, later we dequeue nodes.
            }
            previous[vertex] = null;                   // =null because we hasn't visited any nodes yet.
        }
        // as long as there is something to visit
        while(nodes.values.length){                    // loops as long as there is anything to visit.
            smallest = nodes.dequeue().val;            // dequeue the node with the lowest value (distance) (fordi sådan virker PriorityQueue) and  store the station name in variable: smallest
            if(smallest === finish){                   // If smalles (new node to visit) is the endning node = we're of course done.
                //WE ARE DONE
                while(previous[smallest]){             // BUILD UP PATH TO RETURN AT END.
                    path.push(smallest);               // smallest here will be vores endestation
                    smallest = previous[smallest];     // for at bygge vores endelige liste må vi går igennem baglæns
                }
                break;
            } 
            //smallest = station navn
            if(smallest || distances[smallest] !== Infinity){                 // 
            for(let neighbor in this.adjacencyList[smallest]){                // adjacencyList[smallest] gives a list of the relations the node has (the neighbours).
                    let nextNode = this.adjacencyList[smallest][neighbor];    // The first neighbor we look at.
                  
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;    // now we get the distance from start node to the neighboring we just vistining - er den samlede vægt (i vores tilfælde en disntace)
                    let nextNeighbor = nextNode.stationName;                  // storing the station name in a variable, because we need it later. 
                    //TEST:console.log("nextNeighbor" + nextNeighbor)              
                    if(candidate < distances[nextNeighbor]){                  // compare if this candidate distance is less then what we have store in prevouis for the neighbor
                        //updating new smallest distance to neighbor 
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;                    // we want to know how we got from one node to anthoer which is what we're storing here, to make our path later
                        
                        //TEST: console.log("previous: " + previous[nextNeighbor])
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);              // add element to priority queue with a priority
                    }
                }
            }
        }
        //console.log(smallest)
        return path.concat(smallest).reverse();   // concat(smallest) adds our start stations to the start of the path array    
    }
}

var graph = new WeightedGraph()

// Mapping our model class to fit Graph

var stNames = Object.getOwnPropertyNames(stationer.stationer); // getting All station names and collect them in a Array
stNames.forEach(st => {
    graph.addVertex(st.toString()); // Adding every station as a Vertex
});

stNames.forEach(st => {

    var relationer = Object.getOwnPropertyNames(stationer.stationer[`${st}`]); // Getting Relations to a specefic station
    relationer.forEach(relation => {
        
        var vortex1 = st.toString();
        var vortex2 = relation.toString();
        var w = stationer.stationer[`${st}`][`${relation}`]; // Getting Weight for the specefic relation

        graph.addEdge(vortex1, vortex2, stationer.stationer[`${st}`][`${relation}`]); // Adding a relation and its weight as a edge to the graph
        
    });
    
}); 

console.log(graph.Dijkstra("Hillerød", "Køge"));
//console.log(graph.adjacencyList);