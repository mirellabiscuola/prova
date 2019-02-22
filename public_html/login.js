/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function loginUser() {
        var okusr = "mirella";
        var okpwd = "mirella";
        var oktkn = "qwertyuiop";

        var txusr = document.getElementById("in_usr").value;
        var txpwd = document.getElementById("in_pwd").value;
        var txtkn = document.getElementById("in_tkn").value;
        if ((txusr === okusr && txpwd === okpwd) || txtkn === oktkn) {
            //cosa fare se vero e quindi ok
            alert("ok ti faccio entrare");
        } else {
            // cosa fare se uguale}
            alert("dati non validi");
        }

    }
    
    function insSaluto() {
    //fase input
    let nome = document.getElementById("in_usr").value;
    let saluto = "";
    let data = new Date();
    let giorno = data.getDate();
    //la funzione restituisce il numero mese compreso tra 0 e 11
    let mese = data.getMonth() + 1;
    let anno = data.getFullYear();

    // elaborazione
    // Oggi e’ il 31/01/2019 ciao Luca guerrini buona giornata 
    saluto = "Oggi e’ il " + giorno + "/" + mese + "/" + anno + " buongiorno " + nome + " benvenuta nella tua banca";

    //fase output
    document.getElementById("spMessaggio").innerHTML = saluto;
}


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

document.querySelector("#ServiziBancari").onmouseover = chiediget;
document.querySelector("#Finanziamenti").onmouseover = chiediget;
document.querySelector("#Investimenti").onmouseover = chiediget;
document.querySelector("#Previdenza").onmouseover = chiediget;
document.querySelector("#Protezione").onmouseover = chiediget;

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


