function recept() {
    let i = document.getElementById("fo").value;
    document.getElementById("tej").innerText = i / 5;
    document.getElementById("tojas").innerText = i * 2;
    document.getElementById("cukor").innerText = i * 1;
}