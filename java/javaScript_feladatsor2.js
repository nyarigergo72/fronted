
// 1. feladat amely, ellenőrzi a karakterlánc hosszát.
function hosszEllenor(szoveg) {
    if (szoveg.length < 8) {
        return false;
    }
    return true;
}
document.write("<hr>");
document.write("1. feladat tesztje: " + hosszEllenor("teszt"));
document.write("2. feladat tesztje: " + hosszEllenor("feladatteszt"));

//2. Feladat TajSzam Ellenőrzés
function tajSzamEllenor(tajSzam) {
    if (tajSzam.length != 9) {
        return "false";
    }
    else {
        parosak = (tajSzam[1]) + Number(tajSzam[3]) + Number(tajSzam[5]) + Number(tajSzam[7]) * 7;
        paratlan = (tajSzam[2]) + Number(tajSzam[4]) + Number(tajSzam[6]) + Number(tajSzam[8]) * 3;
        if ((parosak + paratlan) % 10 == Number(tajSzam[8]) == true) {
            return true;
        }
    }
    return false;
}
document.write("<hr>")
document.write("2. feladat tesztje:" + tajSzamEllenor("040655330"));
document.write("<br>2. feladat tesztje:" + tajSzamEllenor("111111111"));

document.write("<hr>")
//3. feladat
function tomTerjedelem(viszgaltTomb) {
    let minErtek = vizsgaltTomb[0];
    let maxErtek = viszgaltTomb[0];
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] < minErtek) {
            minErtek = vizsgaltTomb[i]
        }
        else if (vizsgaltTomb[i] > maxErtek) {
            maxErtek = vizsgaltTomb[i]
        }
        else { }
    }
    return maxErtek - minErtek;
}

let vizsgaltTomb = [3, 5, 10, 16, 9];
document.write("<hr>");
document.write("3. feladat tesztje:" + tomTerjedelem(vizsgaltTomb));

// 4.feldat
const Dolgozok = [{
    nev: "Koaxk Ábel",
    kor: 23,
    fizetes: 400000,
    beosztas: "Rendszergazda"
},
{
    nev: "Zsíros B. Ödön",
    kor: 45,
    fizetes: 1200000,
    beosztas: "Ügyvezető Igazgató"
},
{
    nev: "Meg Győző",
    kor: 32,
    fizetes: 600000,
    beosztas: "Marketing Manager"
},
{
    nev: "Békés Csaba",
    kor: 63,
    fizetes: 180000,
    beosztas: "Takarító"
},
{
    nev: "Pofá Zoltán",
    kor: 25,
    fizetes: 300000,
    beosztas: "Biztonsági Őr"
},
{
    nev: "Fejet Lenke",
    kor: 22,
    fizetes: 220000,
    beosztas: "Irodai Titkár"
},
{
    nev: "Vak Cina",
    kor: 30,
    fizetes: 500000,
    beosztas: "Üzem Orvos"
}
];
function legidosebbDolgozo(vizsgaltObjektum) {
    let legidosebbIndex = 0;
    for (let i = 0; i < vizsgaltObjektum.length; i++) {
        if (vizsgaltObjektum[i].kor > vizsgaltObjektum[legidosebbIndex].kor) {
            legidosebbIndex = i;
        }
    }
    return legidosebbIndex;
}
document.write("<hr>");
document.write("4.feladat tesztje: " + legidosebbDolgozo(Dolgozok));

//5. feldat


function atlagFizetes(vizsgaltObjektum) {
    let fizetesOsszege = 0;
    for (let i = 0; i < vizsgaltObjektum.length; i++) {
        fizetesOsszege += vizsgaltObjektum[i].fizetes;
    }
    return Math.round(fizetesOsszege / vizsgaltObjektum.length);
}
function fizetesEmeles(vizsgaltObjektum) {

}
document.write("<hr>");
document.write("Atlagfizetes: " + atlagFizetes(Dolgozok));








