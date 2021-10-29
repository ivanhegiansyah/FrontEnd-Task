//nomor 4
var header = document.getElementById("fill-me");
header.innerHTML = "HALO!";
// header.style.bold

var isi = document.getElementsByClassName("change-all-of-me");
for (let i = 0; i < isi.length; i++) {
    isi[i].innerHTML = "HALO JUGA!";
}

var header2 = document.getElementsByTagName("H2");
header2[0].innerHTML = "APA KABAR!";

var btn = document.createElement("button");
btn.innerHTML = "Ini Button";
document.getElementById("main").appendChild(btn);

var btn = document.createElement("button");
btn.innerHTML = "Ini Juga Button";
document.getElementById("main").appendChild(btn);
