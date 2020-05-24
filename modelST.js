
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
        Svanemøllen: 3,
        Charlottenlund: 3    
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
        Sydhavn: 3,
        Carlsberg: 3
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
        Bispebjerg: 2,
        Emdrup: 2,
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
        KBHallen: 2,
        Vanløse: 3,
        PeterBangsVej: 2,
        Valby: 4
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
        VigerslevAlle: 1,
        Valby: 2,
        Hvidovre: 2,
        Glostrup: 5
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
    },
      //Linje E Slut 

     // Linje B start
    
    Farum:{
        Værløse: 4
    },

    Værløse:{
        Farum: 4,
        Hareskov: 3
    },

    Hareskov:{
        Værløse: 3,
        Skovbrynet: 2
    },

    Skovbrynet:{
        Hareskov: 2,
        Bagsværd: 2
    },

    Bagsværd:{
        Skovbrynet: 2,
        Stengården: 2
    },

    Stengården:{
        Bagsværd: 2,
        Buddinge: 3
    },

    Buddinge:{
        Stengården: 3,
        Kildebakke: 2
    },

    Kildebakke:{
        Buddinge: 2,
        Vangede: 2
    },

    Vangede:{
        Kildebakke: 2,
        Dyssegård: 1
    },

    Dyssegård:{
        Vangede: 1,
        Emdrup: 3
    },

    Emdrup:{
        Dyssegård: 3,
        Ryparken: 2
    },

    Carlsberg:{
        Dybbelsbro: 3,
        Valby: 2
    },

    Valby:{
        Carlsberg: 2,
        Danshøj: 2,
        Langgade: 2,
        Flintholm: 4
    },

    Hvidovre:{
        Danshøj: 2,
        Rødovre: 2
    },

    Rødovre:{
        Hvidovre: 2,
        BrøndbyØster: 1
    },

    BrøndbyØster:{
        Rødovre: 1,
        Glostrup: 3
    },

    Glostrup:{
        BrøndbyØster: 3,
        Albertslund: 3,
        Danshøj: 5
    },

    Albertslund:{
        Glostrup: 3,
        Taastrup: 3
    },

    Taastrup:{
        Albertslund: 3,
        HøjeTaastrup: 3
    },

    HøjeTaastrup:{
        Taastrup: 3
    },

    // Linje B Slut

    // Linje C Start

    Frederiksund:{
        Ølstykke: 5
    },

    Ølstykke:{
        Frederiksund: 5,
        Egedal: 2
    },

    Egedal:{
        Ølstykke: 2,
        Stenløse: 2
    },

    Stenløse:{
        Egedal: 2,
        Veksø: 3
    },

    Veksø:{
        Stenløse: 3,
        Kildedal: 3,
        Målev: 4
    },

    Kildedal:{
        Veksø: 3,
        Målev: 2
    },

    Målev:{
        Kildedal: 2,
        Ballerup: 4,
        Veksø: 4
    },

    Ballerup:{
        Målev: 4,
        Malmparken: 2
    },

    Malmparken:{
        Ballerup: 2,
        Skovlunde: 2,
        Herlev: 4
    },

    Skovlunde:{
        Malmparken: 2,
        Herlev: 2
    },

    Herlev:{
        Skovlunde: 2,
        Husum: 2,
        Malmparken: 4,
        Vanløse: 5
    },

    Husum:{
        Herlev: 2,
        Islev: 2
    },

    Islev:{
        Husum: 2,
        Jyllingevej: 2
    },

    Jyllingevej:{
        Islev: 2,
        Vanløse: 2
    },

    Vanløse:{
        Jyllingevej: 2,
        Flintholm: 3,
        Herlev: 5
    },

    PeterBangsVej:{
        Flintholm: 2,
        Langgade: 2
    },

    Langgade:{
        PeterBangsVej: 2,
        Valby: 2
    },

    Charlottenlund:{
        Hellerup: 3,
        Ordrup: 2,
    },

    Ordrup:{
        Charlottenlund: 2,
        Klampenborg: 3
    },

    Klampenborg:{
        Ordrup: 3
    }

    // Linje C Slut
};

module.exports.stationer = stationer;