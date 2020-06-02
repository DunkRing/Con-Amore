
# Con Amore
Forfattere: Christoffer og Jonas

**Introduktion**: 
Vi har valgt at undersøge hvordan DSB har udviklet rejseplanen til at give brugerene den hurtigste vej fra Station A til Station B.
For at begrænse vores projekt en anelse, har vi valgt at tage udgangspunkt i DSB's S-togs linjer. Derudover bruger vi data direkte fra rejseplanen ift. hvor lang tid der er mellem hver station.

![Billede af togrouterne](https://www.dsb.dk/globalassets/trafikinformation/kort/nyt-s-togskort-med-koge-nord.png) 

**Problemstilling**: Ville det være optimalt at bruge Dijkstra’s algortimen til at replicere rejseplanen og finde den hurtigste vej fra A til B?

# Eksperiment / applikation 
 For at svare på vores problemstilling har vi implementeret Dijkstra’s Algoritme for at se om vi kan opsætte en datastruktur og et program der simulere S-togs linjerne, ligesom rejseplanen.  

## Opsætning 
Først og fremmest skulle vi have oprettet vores graph, vi gik ud fra billedet i starten og så var det ellers bare at oprettes alle vores **Vertex** *(Stationerne)*, **egdes** *(hvilket station kender til hvem?)* og **weight** af hver egde *(tiden det tager at komme fra stationen til nabostationen)*.

**Graph Creation**
> *javascript*
> 
	let  stationer = {
	Hillerød:{
	Allerød: 5
	},

	Allerød:{
	Hillerød: 5,
	Birkerød: 5
	}

### Dijkstra’s algoritmen

Step 1. Start ved den ønskede start vertex  and sæt distance til 0 og resten til Infinite fx _sptSet_ {0, INF, INF, INF, INF, INF, INF, INF}

Step 2. Opdatere egdes til den forbundne start vertexs, fx (**3**(weight: 1) og **7***(weight: 5)*). 

Step 3. Ud vælg den edge med det mindste cost og tilføj vertexen til _sptSet_ {0, 3, INF, INF, INF, INF, INF, INF}

Step 4. Forsæt indtil ***end*** vertexen er nået
= *Smallest Path Tree* er generet. 

Step 5. den bedste vej bliver udvalgt ud fra SPT 

###  Kode 

> *javascript*

```
let  shortestDistanceNode = (distances,visited) => {
	let  shortest = null;
	
	for (let  node  in  distances) {
		let  currentIsShortest =
			shortest === null || distances[node] < distances[shortest];
		if (currentIsShortest && !visited.includes(node)) {
			shortest = node;
		}
	}
	return  shortest;
};

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
```
    

# Konklussion & Refleksion 
### Kompleksister (Big O notation)
Netop når vi snakker algortimer, er komplektsistet et meget relavant spørgsnmål at stille sig selv, netop fordi det fastlægger hvor effektiv en algoritme er. Fx ved vi at en listes Big O notation er O(1), det bliver altså ikke bedre.
- Hvor effektiv er Dijkstra Algorithm?
-Time Complexity af Dijkstra's algoritme er (Adjacency List and Priority queue):
Vores while loop kører lige så mange gange at der er vertexs der kan besøges, derfor giver det en run time på O(log V) (hvor V er vertex). Derudover skal vi pop og behandle hver vertex egde og opdatere den til besøgt, dette hvilket tager V tid over hele tiden, så det bliver for edges O(E log V) og for vertex  O(V log V) - Derfor er den totale run time for summeres op til at være Dijkstra Algorithmen: 
O((v+e) log v)
-Og Space kompleksistiken svare til O(V) (V = vertexes) 

### Konklussion
Ud fra vores forsøg, har vi kunne se at en fuld implementation af Dijkstra’s algortimen sagtens ville kunne være algoritemn bag rejseplanen, da det giver mening at have vertex som stationer, edges som tiden det tager at rejse fra en station til en anden og at den giver den hurtigste vej fra A til B som værende alle de station man skal igennem og den totale _cost_ det koster (totalt antal minutter)

Dog må der være mere til algoritmen bag rejseplanen i og med at den giver dig flere forskellige løsninger til det samme problem. Fx hvis du skal fra Roskilde til København H, får du ikke kun en mulighed, da muligheden afhænger af hvornår du tager af sted og om du ønsker den rejse med mindst mulige skift, derudover kan du tilføje hvor hurtigt du gå, hvilket får algoritmen til at vælge nogle andre afgange end hvis du bare har indstillingerne på default. 

Derfor er vores endelige konklussion, at man sagtens ville kunne bruge Dijkstra’s algortimen til at replicere rejseplanen, dog hvis det fulde potentielle skal leves op til (altså hvordan rejseplanen fungere 100% i dag) mener at der skal tilføjes nogle modifiktioner hertil.

