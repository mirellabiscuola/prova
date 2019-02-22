/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//document.querySelectorAll(".vocemenu").forEach(function (elm, i) {
//    elm.onfocus = chiediget(elm.href);
//});
document.querySelectorAll(".vocemenu").forEach(function (elm, i) {
    elm.onclick = voceAttiva;
});

function voceAttiva() {
    document.querySelectorAll(".vocemenu").forEach(function (elm, i) {
        elm.classList.remove("active");
    });
    this.classList.add("active");
}
//elm.classList.remove("attivo")

document.querySelector("#battNav").onmouseover = chiediget;
document.querySelector("#astronav").onmouseover = chiediget;
document.querySelector("#tastiera").onmouseover = chiediget;

function chiediget() {
    var chiamata = null;
    chiamata = new XMLHttpRequest();
    chiamata.open("GET", this.href, false);
    chiamata.send(null);
    document.getElementById('contenuto').innerHTML = chiamata.responseText;

}

document.querySelector("#home").onclick = function home() {
    document.getElementById('contenuto').innerHTML = "Passa con il mouse sopra le voci di menù per avere un'anteprima della pagina richiamata";
};
//document.getElementById('contenuto').innerHTML = chiediget('giocoAstronave3.html');  


//PARTE 1
function insSaluto() {
    //fase input
    let nome = document.getElementById("inNome").value;
    let saluto = "";
    let data = new Date();
    let giorno = data.getDate();
    //la funzione restituisce il numero mese compreso tra 0 e 11
    let mese = data.getMonth() + 1;
    let anno = data.getFullYear();

    // elaborazione
    // Oggi e’ il 31/01/2019 ciao Luca guerrini buona giornata 
    saluto = "Oggi e’ il " + giorno + "/" + mese + "/" + anno + " ciao " + nome + " buona giornata";

    //fase output
    document.getElementById("spMessaggio").innerHTML = saluto;
}

//PARTE 2
function spostaNome() {
    //fase input
    let nome1 = document.getElementById("inNome1").value;
    let nome2 = document.getElementById("inNome2").value;
    let nome3 = document.getElementById("inNome3").value;

    //elaborazione
    document.getElementById("inNome1").value = nome3;
    document.getElementById("inNome2").value = nome1;
    document.getElementById("inNome3").value = nome2;

}


