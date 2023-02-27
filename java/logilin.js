
//1. érték: Csapat neve (nev)
//2. érték: Csapat helyezése (helyezes)
//3. érték: Csapat helyének változása (valtozas)
//4. érték: Csapat Pontszama (pont)

const csapatAdat = [
    "Anglia;4;0;1662",
    "Argentína;10;0;1614",
    "Belgium;1;0;1752",
    "Brazília;3;-1;1719",
    "Chile;17;-3;1576",
    "Dánia;14;-1;1584",
    "Franciaország;2;1;1725",
    "Hollandia;13;3;1586",
    "Horvátország;8;-1;1625",
    "Kolumbia;9;-1;1622",
    "Mexikó;12;0;1603",
    "Németország;16;-1;1580",
    "Olaszország;15;1;1583",
    "Peru;19;0;1551",
    "Portugália;5;1;1643",
    "Spanyolország;7;2;1631",
    "Svájc;11;0;1604",
    "Svédország;18;0;1560",
    "Szenegál;20;0;1546",
    "Uruguay;6;-1;1639"
];


//Objektum típusú tömb készítése

function ObjektumFeltoto(feltoltendoElem) {
    const beolvasottAdat = [];
    for (let i = 0; i < feltoltendoElem.length; i++) {
        let objektum = {};
        let daraboltAdatSor = feltoltendoElem[i].split(';');
        objektum.nev = daraboltAdatSor[0];
        objektum.helyezes = daraboltAdatSor[1];
        objektum.valtozas = daraboltAdatSor[2];
        objektum.pontszam = daraboltAdatSor[3];
        beolvasottAdat.push(objektum);
    }
    return beolvasottAdat;
}
const fifaAdatok = ObjektumFeltoto(csapatAdat);
document.write("<table border=\"1\">");
document.write("<tr><th>Név</th><th>Helyezés</th><th>Változás</th><th>Pontszám</th></tr>");
for (let i = 0; i < fifaAdatok.length; i++) {
    document.write(`<tr><td>${fifaAdatok[i].nev}</td><td>${fifaAdatok[i].helyezes}</td><td>${fifaAdatok[i].valtozas}</td><td>${fifaAdatok[i].pontszam}</td></tr>`);
}
document.write("</table>");
//1.feladat
function CsapatokSzama() {
    document.write("<hr>Aktuálisan" + fifaAdatok.length + "csapat szerepel a ranglistán");
}

//2. feladat
function Atlagpontszam() {
    let osszeg = 0;
    for (let i = 0; i < fifaAdatok.length; i++);
    {
        osszeg += Number(fifaAdatok[i].pontszam);

    }
    document.write(`A csapatok átlag pontszáma: ${osszeg / fifaAdatok.length} pont`);

}
Atlagpontszam();
//3.feladat
function Atlagpont() {
    let osszeg = 0;
    for (let i = 0; i < fifaAdatok.length; i++);
    {
        osszeg += Number(fifaAdatok[i].pontszam);

    }
    return osszeg / fifaAdatok.length;
}
let Atlagpontszam = Atlagpont();
function AtlagFelettiek() {
    document.write("Az átlagnál több pontot szerzők");
    for (let i = 0; i < fifaAdatok.length; i++);
    {
        if (fifaAdatok[i].pontszam >= Atlagospontszam) {
            document.write("<li>" + fifaAdatok[i].nev + "</li>");

        }
    }
    document.write("</ol>");
}
AtlagFelettiek();

//4.feladat
function LegtobbetJavito() {
    let maxindex = 0;
    for (let i = 0; i < fifaAdatok.length; i++);

    {
        if (fifaAdatok[i].valtozas > fifaAdatok[maxindex].valtozas) {
            maxindex = i;

        }

    }
    document.write("A Legtöbbet javító csapat: ");
    document.write("Helyezés:" + fifaAdatok[maxindex].helyezes);

}

//5.feladat
function CsatlakozottE() {
    let csatlakozottE = false;
    for (let i = 0; i < fifaAdatok.length; i++) {
        if (fifaAdatok[i].nev == "Magyarország") {
            csatlakozottE = true;
        }
    }
    return csatlakozottE;
}
function EredmenyKiiro(orszagNeve) {
    if (eredmeny == true) {
        document.write("<br>" + orszagNeve);
    }
    else {
        document.write("<br>" + orszagNeve);
    }
}
EredmenyKiiro(CsatlakozottE(), "Magyarország csatlakozott", "Magyarország nem csatlakozott");


//7.feladat
function Valtozas() {
let Valtozas = false;
for (let i = 0; i < fifaAdatok.length; i++){
    
}


}
