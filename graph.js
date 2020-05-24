const stationer = require('./modelST.js');

let graph = {
	start: { A: 5, B: 2 },
	A: { start: 1, C: 4, D: 2 },
	B: { A: 8, D: 7 },
	C: { D: 6, end: 3 },
	D: { end: 1 },
	end: {},
};

module.exports.graph = graph;