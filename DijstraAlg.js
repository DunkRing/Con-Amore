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
  
  class WeightedGraph{
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
	  
	Dijkstra(start, finish){
		  const nodes = new PriorityQueue();
		  const distances = {};
		  const previous = {};
		  let path = [] //to return at end
		  let smallest;
		  //build up initial state
		  for(let vertex in this.adjacencyList){
			  if(vertex === start){
				  distances[vertex] = 0;
				  nodes.enqueue(vertex, 0);
			  } else {
				  distances[vertex] = Infinity;
				  nodes.enqueue(vertex, Infinity);
			  }
			  previous[vertex] = null;
		  }
		  // as long as there is something to visit
		  while(nodes.values.length){
			  smallest = nodes.dequeue().val;
			  console.log("smallest node i priority queue: " + smallest);
			  if(smallest === finish){
				  //No more nodes to visit.
				  //BUILD UP PATH TO RETURN
				  while(previous[smallest]){
					  path.push(smallest);
					  smallest = previous[smallest];
				  }
				  break;
			  } 
			  if(smallest || distances[smallest] !== Infinity){
				  for(let neighbor in this.adjacencyList[smallest]){
					  //find neighboring nodes
					  let nextNode = this.adjacencyList[smallest][neighbor];
					  //calculate new distance to neighboring node
					  let candidate = distances[smallest] + nextNode.weight;
					  console.log("distance from start to neighbor node: " + candidate)
					  let nextNeighbor = nextNode.node;
					  if(candidate < distances[nextNeighbor]){
						  //updating new smallest distance to neighbor
						  distances[nextNeighbor] = candidate;
						  //updating previous - How we got to neighbor
						  previous[nextNeighbor] = smallest;
						  //enqueue in priority queue with new priority
						  nodes.enqueue(nextNeighbor, candidate);
					  }
				  }
			  };
		  };
		 
		  console.log("Shortest path: " + path.concat(smallest).reverse());
		  return path.concat(smallest).reverse();     
	  };
  };
  
  var graph = new WeightedGraph();
  // Linje A Start
    graph.addVertex("Hillerød");
    graph.addVertex("Allerød");
	graph.addVertex("Birkerød");
	graph.addVertex("Holte");
	graph.addVertex("Virum");
	graph.addVertex("Sorgenfri");
	graph.addVertex("Lyngby");
	graph.addVertex("Jægersborg");
	graph.addVertex("Gentofte");
	graph.addVertex("Bernstorffsvej");
	graph.addVertex("Hellerup");
	graph.addVertex("Svanemøllen");
	graph.addVertex("Nordhavn");
	graph.addVertex("Østerport");
	graph.addVertex("Nørreport");
	graph.addVertex("Vesterport");
	graph.addVertex("KøbenhavnH");
	graph.addVertex("Dybbelsbro");
	graph.addVertex("Sydhavn");
	graph.addVertex("Sjælør");
	graph.addVertex("Åmarken");
	graph.addVertex("Charlottenlund");
	graph.addVertex("Friheden");
	graph.addVertex("Avedøre");
	graph.addVertex("BrøndbyStrand");
	graph.addVertex("Vallensbæk");
	graph.addVertex("Ishøj");
	graph.addVertex("Hundige");
	graph.addVertex("Greve");
	graph.addVertex("Karlslunde");
	graph.addVertex("SolrødStrand");
    // Linje A Slut
     // Linje F Start
     graph.addVertex("Ryparken");
     graph.addVertex("Bispebjerg");
     graph.addVertex("Nørrebro");
     graph.addVertex("Fuglebakken");
     graph.addVertex("Grøndal");
     graph.addVertex("Flintholm");
     graph.addVertex("KBHallen");
     graph.addVertex("Ålholm");
     graph.addVertex("Danshøj");
     graph.addVertex("VigerslevAlle");
     graph.addVertex("NyEllebjerg");
     //Linje E start 
     graph.addVertex("Jersie");
     graph.addVertex("KøgeNord");
     graph.addVertex("Ølby");
     graph.addVertex("Køge");
    //Linje E Slut 
    // Linje B start
     graph.addVertex("Farum");
     graph.addVertex("Værløse");
     graph.addVertex("Hareskov");
     graph.addVertex("Skovbrynet");
     graph.addVertex("Bagsværd");
     graph.addVertex("Stengården");
     graph.addVertex("Buddinge");
     graph.addVertex("Kildebakke");
     graph.addVertex("Vangede");
     graph.addVertex("Dyssegård");
     graph.addVertex("Emdrup");
     graph.addVertex("Carlsberg");
     graph.addVertex("Valby");
     graph.addVertex("Hvidovre");
     graph.addVertex("Rødovre");
     graph.addVertex("BrøndbyØster");
     graph.addVertex("Glostrup");
     graph.addVertex("Albertslund");
     graph.addVertex("Taastrup");
     graph.addVertex("HøjeTaastrup");
        // Linje B Slut
         // Linje C Start
     graph.addVertex("Frederiksund");
     graph.addVertex("Ølstykke");
     graph.addVertex("Egedal");
     graph.addVertex("Stenløse");
     graph.addVertex("Veksø");
     graph.addVertex("Kildedal");
     graph.addVertex("Målev");
     graph.addVertex("Ballerup");
     graph.addVertex("Malmparken");
     graph.addVertex("Skovlunde");
     graph.addVertex("Herlev");
     graph.addVertex("Husum");
     graph.addVertex("Islev");
     graph.addVertex("Jyllingevej");
     graph.addVertex("Vanløse");
     graph.addVertex("PeterBangsVej");
     graph.addVertex("Langgade");
     graph.addVertex("Charlottenlund");
     graph.addVertex("Ordrup");
     graph.addVertex("Klampenborg");
        // Linje C Slut
  
       graph.addEdge("Hillerød","Allerød",5 );
       graph.addEdge("Allerød","Birkerød",5 );
       graph.addEdge("Birkerød","Holte",4);
       graph.addEdge("Holte","Virum",2 );
       graph.addEdge("Virum","Sorgenfri",2 );
       graph.addEdge("Sorgenfri","Lyngby",3 );
       graph.addEdge("Lyngby","Jægersborg",2 );
       graph.addEdge("Jægersborg","Gentofte",2 );
       graph.addEdge("Gentofte","Bernstorffsvej",2 );
       graph.addEdge("Bernstorffsvej","Hellerup",3 );
       graph.addEdge("Hellerup","Svanemøllen",3 );
       graph.addEdge("Hellerup","Charlottenlund",3 );
       graph.addEdge("Svanemøllen","Ryparken",3 );
       graph.addEdge("Svanemøllen","Nordhavn",2 );
       graph.addEdge("Nordhavn","Østerport",3 );
       graph.addEdge("Østerport","Nørreport",2 );
       graph.addEdge("Nørreport","Vesterport",2 );
       graph.addEdge("Vesterport","KøbenhavnH",2 );
       graph.addEdge("KøbenhavnH","Dybbelsbro",2  );
       graph.addEdge("Dybbelsbro","Sydhavn",3 );
       graph.addEdge("Dybbelsbro","Carlsberg",3 );
       graph.addEdge("Sydhavn","Sjælør",2 );
       graph.addEdge("Sjælør","NyEllebjerg",2 );
       graph.addEdge("Åmarken","NyEllebjerg",2 );
       graph.addEdge("Åmarken","Friheden",2 );
       graph.addEdge("Friheden","Avedøre",2 );
       graph.addEdge("Avedøre","BrøndbyStrand",3 );
       graph.addEdge("BrøndbyStrand","Vallensbæk",2 );
       graph.addEdge("Vallensbæk","Ishøj",3 );
       graph.addEdge("Ishøj","Hundige",2 );
       graph.addEdge("Ishøj","NyEllebjerg",9 );
       graph.addEdge("Hundige","Greve",3 );
       graph.addEdge("Greve","Karlslunde",3 );
       graph.addEdge("Karlslunde","SolrødStrand",4 );
       graph.addEdge("SolrødStrand","Jersie",2 );
       // Linje A Slut
       // Linje F Start
       graph.addEdge("Ryparken","Svanemøllen",3 );
       graph.addEdge("Ryparken","Bispebjerg",2 );
       graph.addEdge("Ryparken","Emdrup",2 );
       graph.addEdge("Bispebjerg","Nørrebro",1 );
       graph.addEdge("Nørrebro","Fuglebakken",2 );
       graph.addEdge("Fuglebakken","Grøndal",1 );
       graph.addEdge("Grøndal","Flintholm",2 );
       graph.addEdge("Flintholm","KBHallen",2 );
       graph.addEdge("Flintholm","Vanløse",3 );
       graph.addEdge("Flintholm","PeterBangsVej",2 );
       graph.addEdge("Flintholm","Valby",4 );
       graph.addEdge("KBHallen","Ålholm",1 );
       graph.addEdge("Ålholm","Danshøj",1 );
       graph.addEdge("Danshøj","VigerslevAlle",1 );
       graph.addEdge("Danshøj","Valby",2 );
       graph.addEdge("Danshøj","Hvidovre",2 );
       graph.addEdge("Danshøj","Glostrup",5 );
       graph.addEdge("VigerslevAlle","NyEllebjerg",3 );
       graph.addEdge("NyEllebjerg","Sjælør",2 );
       graph.addEdge("NyEllebjerg","Åmarken",2 );
       graph.addEdge("NyEllebjerg","Ishøj",9 );
        //Linje E start 
       graph.addEdge("Jersie","SolrødStrand",2 );
       graph.addEdge("Jersie","KøgeNord",3 );
       graph.addEdge("KøgeNord","Ølby",2 );
       graph.addEdge("Ølby","Køge",4 );
       //Linje E Slut 
       graph.addEdge("Farum","Værløse",4 );
       graph.addEdge("Værløse","Hareskov",3 );
       graph.addEdge("Hareskov","Skovbrynet",2 );
       graph.addEdge("Skovbrynet","Bagsværd",2 );
       graph.addEdge("Bagsværd","Stengården",2 );
       graph.addEdge("Stengården","Buddinge",3 );
       graph.addEdge("Buddinge","Kildebakke",2 );
       graph.addEdge("Kildebakke","Vangede",2 );
       graph.addEdge("Vangede","Dyssegård",1 );
       graph.addEdge("Dyssegård","Emdrup",3 );
       graph.addEdge("Emdrup","Ryparken",2 );
       graph.addEdge("Carlsberg","Valby",2 );
       graph.addEdge("Valby","Danshøj",2 );
       graph.addEdge("Valby","Langgade",2 );
       graph.addEdge("Valby","Flintholm",4 );
       graph.addEdge("Hvidovre","Rødovre",2 );
       graph.addEdge("Rødovre","BrøndbyØster",1 );
       graph.addEdge("BrøndbyØster","Glostrup",3 );
       graph.addEdge("Glostrup","Albertslund",3 );
       graph.addEdge("Glostrup","Danshøj",5 );
       graph.addEdge("Albertslund","Taastrup",3 );
       graph.addEdge("Taastrup","HøjeTaastrup",3 );
       // Linje B Slut
       graph.addEdge("Frederiksund","Ølstykke",5 );
       graph.addEdge("Ølstykke","Egedal",2 );
       graph.addEdge("Egedal","Stenløse",2 );
       graph.addEdge("Stenløse","Veksø",3 );
       graph.addEdge("Veksø","Kildedal",3 );
       graph.addEdge("Veksø","Målev",4 );
       graph.addEdge("Kildedal","Målev",2 );
       graph.addEdge("Målev","Ballerup",4 );
       graph.addEdge("Malmparken","Ballerup",2 );
       graph.addEdge("Malmparken","Skovlunde",2 );
       graph.addEdge("Malmparken","Herlev",4 );
       graph.addEdge("Skovlunde","Herlev",2 );
       graph.addEdge("Herlev","Husum",2 );
       graph.addEdge("Herlev","Vanløse",5 );
       graph.addEdge("Husum","Islev",2 );
       graph.addEdge("Islev","Jyllingevej",2 );
       graph.addEdge("Jyllingevej","Vanløse",2 );
       graph.addEdge("Vanløse","Flintholm",3 );
       graph.addEdge("PeterBangsVej","Flintholm",2 );
       graph.addEdge("PeterBangsVej","Langgade",2 );
       graph.addEdge("Langgade","Valby",2 );
       graph.addEdge("Charlottenlund","Hellerup",3 );
       graph.addEdge("Charlottenlund","Ordrup",2 );
       graph.addEdge("Ordrup","Klampenborg",3 );
       

console.log(graph.Dijkstra("Nordhavn", "Frederiksund"));




// stationsWithProp.forEach(element => {
//     element.forEach(data => {
//         console.log(data);
//     });
// });


// stations.forEach(stations => {
//     console.log(stations);
//     graph.addVertex(stations);
//     for (let index = 0; index < Object.getOwnPropertyNames(stationer.stationer.element).length; index++) {
//         //Object.getOwnPropertyNames(stationer.stationer[0])
//         console.log(stationer.stationer[0])
//     };
// });
