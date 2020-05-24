
# Con Amore
Forfattere: Christoffer og Jonas

**Introduktion**: 
Vi har valgt at undersøge hvordan DBS har udviklet rejseplan til at give brugerene den hurtigste vej fra Station A til Station B.
For at begrænse vores projekt en anelse, har vi valgt at tage udgangspunkt i DSB's S-togs linjer. Derudover bruger vi data direkte fra rejseplanen ift. hvor lang tid der er mellem hver station.

![Billede af togrouterne](https://www.dsb.dk/globalassets/trafikinformation/kort/nyt-s-togskort-med-koge-nord.png) 

**Problemstilling**: hvordan udregner rejseplanen den hurtigste vej fra A til B og hvilken algoritmer bruger de? 
Ville det være optimalt at bruge Dijkstra’s algortimen til at løse denne problemstilling?


# Graph glossary
For at kunne søge den hurtigste vej frem, bliver vi nød til at have en speciel datastructur, nemlig Graph:
Forklar graph principperne: 
- **Vertex (Node)**: er de fundementale units som som udgør hovedparten af en graph *(sammen med egdes)*. 
- **Edged**: Er hvad der forbinder graphens vertexs til hinanden, så vi får et netværk er connected vertexes.
- **Weights**: Er en propperties der tilhører en edge, kunne være Cost, Distance, Tid m.m. som er den værdi det koster at gå fra en vertex til en anden (hvilket er essentiellet for at algortimer kan validere og lave MST's (**M**inimum **S**panning **T**rees)  Og finde *shortest path* via forskellige alogritmer. 
- **Directed/undirected**: Det er også muligt at have retninger i sin graph, eksempel kunne være en ensrettet vej i virkeligheden, ville i en graph være en directed edge, da det kun er muligt at køre en vej, derfor kan vi bruge directions til at afspejle den virkelig verden.
- **Cycles**: Er når man inde i sin graph a mindst 3 vertexs som er tætforbundet.
- **Path**: Er vejen fra punkt A til punkt B hvor hver vertex ikke gå igen mere end 1. gang. 
- **Component**: En graph kan bestå er flere små subgraph som ikke er forbundet, hver subgraph vil så være eb component.


# Eksperiment / applikation 

Vi har i undervisning stiftet bekendskab men en række shortest path algoritmer, såsom "Dijkstra’s algoritmen", som kan finde den korteste vej i en Graph datastruttur. 
 - for at svare på vores problemstilling har vi derfor implementeret Dijkstra’s for at se om vi kan opsætte en datastruktur og et program der simulere S-togs linjerne, ligesom rejseplanen.  

## Opsætning 
Først og fremmest skulle vi have oprettet vores graph, vi gik ud fra billedet i starten og så var det ellers bare at oprettes alle vores **Vertex** *(Stationerne)*, **egdes** *(hvilket station kender til hvem?)* og **weight** af hver egde *(tiden det tager at komme fra stationen til nabostationen)*.

    Graph Creation
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





# Konklussion & Refleksion 
Kompleksister 

Hvad hvis det bliver en stor graph, vil Dijkstra’s så stadig være skide go