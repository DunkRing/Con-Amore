
class Station {
    constructor(paths) {
        this.relationer = paths;
      }
};
// Linje A Start

Hillerød = new Station({
    Allerød: 5
});

Allerød = new Station({
    Hillerød: 5,
    Birkerød: 5
});

Birkerød = new Station({
    Allerød: 5,
    Holte: 4
});

Holte = new Station({
    Birkerød: 4,
    Virum: 2
});

Virum = new Station({
    Holte: 2,
    Sorgenfri: 2
});

Sorgenfri = new Station({
    Virum: 2,
    Lyngby: 3
});

Lyngby = new Station({
    Sorgenfri:3,
    Jægersborg: 2
});

Jægersborg = new Station({
    Lyngby: 2,
    Gentofte: 2
});

Gentofte = new Station({
    Jægersborg: 2,
    Bernstorffsvej: 2
});

Bernstorffsvej = new Station({
    Gentofte: 2,
    Hellerup: 3
});

Hellerup = new Station({
    Bernstorffsvej: 3,
    Svanemøllen: 3    
});

Svanemøllen = new Station({
    Hellerup: 3,
    Ryparken: 3,
    Nordhavn: 2
});

Nordhavn = new Station({
    Svanemøllen: 2,
    Østerport: 3
});

Østerport = new Station({
    Nordhavn: 3,
    Nørreport: 2
});

Nørreport = new Station({
    Østerport: 2,
    Vesterport: 2 
});

Vesterport = new Station({
    Nørreport: 2,
    KøbenhavnH: 2
});

KøbenhavnH = new Station({
    Vesterport: 3,
    Dybbelsbro: 2
});

Dybbelsbro = new Station({
    KøbenhavnH: 2,
    Sydhavn: 3
});

Sydhavn = new Station({
    Dybbelsbro: 3,
    Sjælør: 2
});

Sjælør = new Station({
    Sydhavn: 2,
    NyEllebjerg: 2
});

Åmarken = new Station({
    NyEllebjerg: 2,
    Friheden: 2
});

Friheden = new Station({
    Åmarken: 2,
    Avedøre: 2
});

Avedøre = new Station({
    Friheden: 2,
    BrøndbyStrand: 3
});

BrøndbyStrand = new Station({
    Avedøre: 3,
    Vallensbæk: 2
});

Vallensbæk = new Station({
    BrøndbyStrand: 2,
    Ishøj: 3
});

Ishøj = new Station({
    Vallensbæk: 3,
    Hundige: 2
});

Hundige = new Station({
    Ishøj: 2,
    Greve: 3
});

Greve = new Station({
    Hundige: 3,
    Karlslunde: 3
});

Karlslunde = new Station({
    Greve: 3,
    SolrødStrand: 4
});

SolrødStrand = new Station({
    Karlslunde: 4
});
// Linje A Slut

// Linje F Start
Ryparken = new Station({
    Svanemøllen: 3,
    Bispebjerg: 2
});

Bispebjerg = new Station({
    Ryparken: 2,
    Nørrebro: 1
});

Nørrebro = new Station({
    Bispebjerg: 1,
    Fuglebakken: 2
});

Fuglebakken = new Station({
    Nørrebro: 2,
    Grøndal: 1
});

Grøndal = new Station({
    Fuglebakken: 1,
    Flintholm: 2
});

Flintholm = new Station({
    Grøndal: 2,
    KBHallen: 2
});

KBHallen = new Station({
    Flintholm: 2,
    Ålholm: 1
});

Ålholm = new Station({
    KBHallen: 1,
    Danshøj: 1
});

Danshøj = new Station({
    Ålholm: 1,
    VigerslevAlle: 1
});

VigerslevAlle = new Station({
    Danshøj: 1,
    NyEllebjerg: 3
});

NyEllebjerg = new Station({
    VigerslevAlle: 3,
    Sjælør: 2,
    Åmarken: 2
});

// Linje F Slut

var stationer = {
    Hillerød, Allerød, Birkerød, Holte, Virum,
    Sorgenfri, Lyngby, Jægersborg, Gentofte,
    Bernstorffsvej, Hellerup, Svanemøllen,
    Nordhavn, Østerport, Nørreport, Vesterport,
    KøbenhavnH, Sydhavn, Sjælør, NyEllebjerg,
    Åmarken, Friheden, Avedøre, BrøndbyStrand,
    Vallensbæk, Ishøj, Hundige, Greve, Karlslunde,
    SolrødStrand, Ryparken, Bispebjerg, Bispebjerg,
    Nørrebro, Fuglebakken, Grøndal, Flintholm,
    KBHallen, Ålholm, Danshøj, VigerslevAlle
};

module.exports.stationer = stationer;