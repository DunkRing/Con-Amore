
# Con Amore
Forfattere: Christoffer og Jonas

**Introduktion**: 
Vi har valgt at undersøge hvordan DSB har udviklet rejseplanen til at give brugerene den hurtigste vej fra Station A til Station B.
For at begrænse vores projekt en anelse, har vi valgt at tage udgangspunkt i DSB's S-togs linjer. Derudover bruger vi data direkte fra rejseplanen ift. hvor lang tid der er mellem hver station.

![Billede af togrouterne](https://www.dsb.dk/globalassets/trafikinformation/kort/nyt-s-togskort-med-koge-nord.png) 

**Problemstilling**: Ville det være optimalt at bruge Dijkstra’s algortimen til at replicere rejseplanen og finde den hurtigste vej fra A til B?


# Graph glossary
For at kunne søge den hurtigste vej frem, bliver vi nød til at have en speciel datastructur, nemlig Graph:

**Forklaring graph principperne:** 
- **Vertex (Node)**: er de fundementale units som som udgør hovedparten af en graph *(sammen med egdes)*. 
- **Edged**: Er hvad der forbinder graphens vertexs til hinanden, så vi får et netværk er connected vertexes.
- **Weights**: Er en propperties der tilhører en edge, kunne være Cost, Distance, Tid m.m. som er den værdi det koster at gå fra en vertex til en anden (hvilket er essentiellet for at algortimer kan validere og lave MST's (**M**inimum **S**panning **T**rees)  Og finde *shortest path* via forskellige alogritmer. 
- **Directed/undirected**: Det er også muligt at have retninger i sin graph, eksempel kunne være en ensrettet vej i virkeligheden, ville i en graph være en directed edge, da det kun er muligt at køre en vej, derfor kan vi bruge directions til at afspejle den virkelig verden.
- **Cycles**: Er når man inde i sin graph a mindst 3 vertexs som er tætforbundet.
- **Path**: Er vejen fra punkt A til punkt B hvor hver vertex ikke gå igen mere end 1. gang. 
- **Component**: En graph kan bestå er flere små subgraph som ikke er forbundet, hver subgraph vil så være eb component.


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

methods.findShortestPath = (graph, startNode, endNode) => {
	let  distances = {};
	distances[endNode] = "Infinity";
	distances = Object.assign(distances, graph[startNode]);
	
	let  parents = { endNode:  null };
	for (let  child  in  graph[startNode]) {
		parents[child] = startNode;
	}
	
	let  visited = [];
	
	let  node = shortestDistanceNode(distances, visited);
	
	while (node) {
		let  distance = distances[node];
		let  children = graph[node];
		for (let  child  in  children) {
			if (String(child) === String(startNode)) {
				continue;
			} else {
				let  newdistance = distance + children[child];
				if (!distances[child] || distances[child] > newdistance) {
					distances[child] = newdistance;
					parents[child] = node;
				}
			}
		}
		visited.push(node);
		node = shortestDistanceNode(distances, visited);
	}
	
	let  shortestPath = [endNode];
	let  parent = parents[endNode];
	while (parent) {
		shortestPath.push(parent);
		parent = parents[parent];
	}
	shortestPath.reverse();
	
	let  results = {
		distance:  distances[endNode],
		path:  shortestPath,
	};
	
	return  results;
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

