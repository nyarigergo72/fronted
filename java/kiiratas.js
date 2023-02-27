//. 1 Feladat
function CsakAFele(szoveg) {
    let ujSzoveg = "";
    for (let i = 0; i < szoveg.length; i++) {
        if (i % 2 == 0) {
            ujSzoveg += szoveg[i];
        }
    }
    return ujSzoveg;
}
document.write(CsakAFele("Szeretem a programozást"));
//. 2 Feladat
function KarakterTabusito(szoveg, tiltottkarakter) {
    let ujSzoveg = "";
    for (let i = 0; i < szoveg.length; i++) {
        if (szoveg[i] == tiltottkarakter) {
            ujSzoveg += "";

        }
        else {
            ujSzoveg += szoveg[i];
        }
    }
    return ujSzoveg;
}
document.write("<hr>" + KarakterTabusito("Szeretem a programzoást", "e"));
//3. feladat
function MaganhangzoTabusito(szoveg) {
    let maganHAngzok = ["a", "á", "e", "é", "i", "í", "o", "ó", "ö", "ő", "u", "ú", "ü", "ű"];
    for (let i = 0; i < szoveg.length; i++) {
        for (let j = 0; j < szoveg.length; i++) {
            if (szoveg[i] == maganHAngzok[j]) {
                szoveg = szoveg.replace(szoveg[i], "");

            }
        }
    }
    return szoveg;
}
document.write("<hr>" + MaganhangzoTabusito("Szeretem a programzoást"));

