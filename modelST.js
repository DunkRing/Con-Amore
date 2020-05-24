
let stationer = {
    Hillerød:{
        Allerød: 5
    },
    
    Allerød:{
        Hillerød: 5,
        Birkerød: 5
    },
    
    Birkerød:{
        Allerød: 5,
        Holte: 4
    },
    
    Holte:{
        Birkerød: 4,
        Virum: 2
    },
    
    Virum:{
        Holte: 2,
        Sorgenfri: 2
    },
    
    Sorgenfri:{
        Virum: 2,
        Lyngby: 3
    },
    
    Lyngby:{
        Sorgenfri:3,
        Jægersborg: 2
    },
    
    Jægersborg:{
        Lyngby: 2,
        Gentofte: 2
    },
    
    Gentofte:{
        Jægersborg: 2,
        Bernstorffsvej: 2
    },
    
    Bernstorffsvej:{
        Gentofte: 2,
        Hellerup: 3
    },
    
    Hellerup:{
        Bernstorffsvej: 3,
        Svanemøllen: 3    
    },
    
    Svanemøllen:{
        Hellerup: 3,
        Ryparken: 3,
        Nordhavn: 2
    },
    
    Nordhavn:{
        Svanemøllen: 2,
        Østerport: 3
    },
    
    Østerport:{
        Nordhavn: 3,
        Nørreport: 2
    },
    
    Nørreport:{
        Østerport: 2,
        Vesterport: 2 
    },
    
    Vesterport:{
        Nørreport: 2,
        KøbenhavnH: 2
    },
    
    KøbenhavnH:{
        Vesterport: 3,
        Dybbelsbro: 2
    },
    
    Dybbelsbro:{
        KøbenhavnH: 2,
        Sydhavn: 3
    },
    
    Sydhavn:{
        Dybbelsbro: 3,
        Sjælør: 2
    },
    
    Sjælør:{
        Sydhavn: 2,
        NyEllebjerg: 2
    },
    
    Åmarken:{
        NyEllebjerg: 2,
        Friheden: 2
    },
    
    Friheden:{
        Åmarken: 2,
        Avedøre: 2
    },
    
    Avedøre:{
        Friheden: 2,
        BrøndbyStrand: 3
    },
    
    BrøndbyStrand:{
        Avedøre: 3,
        Vallensbæk: 2
    },
    
    Vallensbæk:{
        BrøndbyStrand: 2,
        Ishøj: 3
    },
    
    Ishøj:{
        Vallensbæk: 3,
        Hundige: 2,
        NyEllebjerg: 9
    },
    
    Hundige:{
        Ishøj: 2,
        Greve: 3
    },
    
    Greve:{
        Hundige: 3,
        Karlslunde: 3
    },
    
    Karlslunde:{
        Greve: 3,
        SolrødStrand: 4
    },
    
    SolrødStrand:{
        Karlslunde: 4,
        Jersie: 2
    },
    // Linje A Slut
    // Linje F Start
    Ryparken:{
        Svanemøllen: 3,
        Bispebjerg: 2
    },
    
    Bispebjerg:{
        Ryparken: 2,
        Nørrebro: 1
    },
    
    Nørrebro:{
        Bispebjerg: 1,
        Fuglebakken: 2
    },
    
    Fuglebakken:{
        Nørrebro: 2,
        Grøndal: 1
    },
    
    Grøndal:{
        Fuglebakken: 1,
        Flintholm: 2
    },
    
    Flintholm:{
        Grøndal: 2,
        KBHallen: 2
    },
    
    KBHallen:{
        Flintholm: 2,
        Ålholm: 1
    },
    
    Ålholm:{
        KBHallen: 1,
        Danshøj: 1
    },
    
    Danshøj:{
        Ålholm: 1,
        VigerslevAlle: 1
    },
    
    VigerslevAlle:{
        Danshøj: 1,
        NyEllebjerg: 3
    },
    
    NyEllebjerg:{
        VigerslevAlle: 3,
        Sjælør: 2,
        Åmarken: 2,
        Ishøj: 9
    },

    //Linje E start 
    Jersie:{
        SolrødStrand: 2,
        KøgeNord: 3
    },

    KøgeNord:{
        Ølby: 2,
        Jersie: 3,
    },

    Ølby:{
        Køge: 4, 
        KøgeNord: 2
    },
    
    Køge:{
        Ølby:4
    }
      //Linje E Slut 
};

module.exports.stationer = stationer;