
const EuropaiUnio = [{
    orszag: "Ausztria",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Belgium",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Bulgária",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Ciprus",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Csehország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Dánia",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Észtország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Finnország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Franciaország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Görögország",
    csatlakozas: "1981.01.01"
},
{
    orszag: "Hollandia",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Horvátország",
    csatlakozas: "2013.07.01"
},
{
    orszag: "Írország",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Lengyelország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Lettország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Litvánia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Luxemburg",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Magyarország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Málta",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Németország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Olaszország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Portugália",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Románia",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Spanyolország",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Svédország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Szlovákia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Szlovénia",
    csatlakozas: "2004.05.01"
}
];
//Hány tagja van az EU-nak?
//Paraméter nélküli eljárás
function TagallamokSzama() {
    document.write("Az Európai unóinak " + EuropaiUnio.length + " darab tagállama van");
}
TagallamokSzama();

//Hány ország csatlakozott 2007-ben...
//Paraméter nélküli függgvény
function csatlakozottK7() {
    let k7 = 0;
    for (let i = 0; i < EuropaiUnio.length; i++) {
        //if(EuropaiUnio[i].csatlakozas.substr(0,4)=="2007")
        //if(EuropaiUnio[i].csatlakozas.includes("2007"))
        if (EuropaiUnio[i].csatlakozas.startsWith("2007")) {
            k7++;
        }
    }
    return k7;
}

document.write(`<br>A 2007-ben csatlakozott államok mennyisége: ${csatlakozottK7()}`);




//Csatlakozott-e magyaroszág az európai únióhoz? Igen/Nem?
function CsatlakozottE() {
    let csatlakozottE = false;
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].orszag == "Magyarország") {
            csatlakozottE = true;
        }
    }
    return csatlakozottE;
}

function CsatlakozottEV2() {
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].orszag == "Magyarország") {
            return true;
        }
    }
    return false;
}
function EredmenyKiiro(eredmeny, eredmenySzovegEgy, eredmenySzovegKetto) {
    if (eredmeny == true) {
        document.write("<br>" + eredmenySzovegEgy);
    }
    else {
        document.write("<br>" + eredmenySzovegKetto);
    }
}
EredmenyKiiro(CsatlakozottE(), "Magyarország csatlakozott", "Magyarország nem csatlakozott");
EredmenyKiiro(CsatlakozottEV2(), "Magyarország csatlakozott", "Magyarország nem csatlakozott");



//Volt-e májusban csatlakozás?
function MajusiCsatlakozas() {
    let voltCsatlakozo = false;
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].csatlakozas.includes(".05.")) {
            voltCsatlakozo = true;
        }
    }
    if (voltCsatlakozo == false) {
        document.write("<br>Nem volt májusban csatlakozas");
    }
    else {
        document.write("<br>Volt májusban csatlakozas");
    }
}
function MajusiCsatlakozasV2() {
    let voltCsatlakozo = false;
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].csatlakozas.includes(".05.")) {
            voltCsatlakozo = true;
        }
    }
    return voltCsatlakozo;//Ez csak egy true/false értéket ad vissza, még meg kell jeleníteni valamilyen módon!
}

function MajusiCsatlakozasV3() {
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].csatlakozas.includes(".05.")) {
            return true;
        }
    }
    return false;
}
MajusiCsatlakozas();
EredmenyKiiro(MajusiCsatlakozasV2(), "Volt májusban csatlakozás", "NEM volt májusban csatlakozás");
EredmenyKiiro(MajusiCsatlakozasV3(), "Volt májusban csatlakozás", "NEM volt májusban csatlakozás");


//Legutolso Csatlakozo

function LegutolsoCsatlakozo() {
    let maxIndex = 0;
    for (let i = 0; i < EuropaiUnio.length; i++) {
        let aktIndexEv = Number(EuropaiUnio[i].csatlakozas.substr(0, 4));
        let maxIndexEv = Number(EuropaiUnio[maxIndex].csatlakozas.substr(0, 4));
        if (aktIndexEv > maxIndexEv) {
            maxIndex = i;
        }
    }
    document.write("<br>A legutolsó csatlakozó ország neve:" + EuropaiUnio[maxIndex].orszag);
    document.write("<br>A legutolsó csatlakozásának dátuma:" + EuropaiUnio[maxIndex].csatlakozas);
}
LegutolsoCsatlakozo();


function LegutolsoCsatlakozoV2() {
    let maxIndex = 0;
    for (let i = 0; i < EuropaiUnio.length; i++) {
        let aktIndexEv = Number(EuropaiUnio[i].csatlakozas.substr(0, 4));
        let maxIndexEv = Number(EuropaiUnio[maxIndex].csatlakozas.substr(0, 4));
        if (aktIndexEv > maxIndexEv) {
            maxIndex = i;
        }
    }
    return maxIndex;
}

document.write("<br>A legutolsó csatlakozó ország neve:" + EuropaiUnio[LegutolsoCsatlakozoV2()].orszag);
document.write("<br>A legutolsó csatlakozásának dátuma:" + EuropaiUnio[LegutolsoCsatlakozoV2()].csatlakozas);


//Ország Statisztika, melyik évben hány ország csatlakozott

function Statisztika() {
    //Csatlakozási évek kiválogatása
    let csatlakozasiEvek = [];
    for (let i = 0; i < EuropaiUnio.length; i++) {
        let szerepelE = false;
        for (let j = 0; j < csatlakozasiEvek.length; j++) {
            if (csatlakozasiEvek[j] == EuropaiUnio[i].csatlakozas.substr(0, 4)) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            csatlakozasiEvek.push(EuropaiUnio[i].csatlakozas.substr(0, 4));
        }
    }
    //Évek rendszerezése
    csatlakozasiEvek.sort();

    //Segédtömb használat
    let csatlakozasiEvekSeged = [];
    for (let i = 0; i < csatlakozasiEvek.length; i++) {
        csatlakozasiEvekSeged.push(0);
    }
    //Segéd változó segítségével történő megszámlálás(nagyon gyors)
    for (let i = 0; i < EuropaiUnio.length; i++) {
        for (let j = 0; j < csatlakozasiEvek.length; j++) {
            if (csatlakozasiEvek[j] == EuropaiUnio[i].csatlakozas.substr(0, 4)) {
                csatlakozasiEvekSeged[j]++;
            }
        }
    }
    //Eredmény megjelenítés
    document.write("<hr>Statisztika:");
    for (let i = 0; i < csatlakozasiEvek.length; i++) {
        document.write("<br>" + csatlakozasiEvek[i] + ":" + csatlakozasiEvekSeged[i]);
    }
}
Statisztika();


function csatlakozottAdottEvUniverzalis(ev) {
    let adottEvbenCsatlakozottSzama = 0;
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].csatlakozas.startsWith(ev)) {
            adottEvbenCsatlakozottSzama++;
        }


    }
    return adottEvbenCsatlakozottSzama;

}
//Csatlakozott e adott orszag az uniohoz

//Volt e az adott honapban csatlakozás
function Adott_honaoban_volt_e_csatlakozas(honap_szama) {
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].csatlakozas.slice(5, 7) == honap_szama) {
            return true;
        }
    }
    return false;
}




