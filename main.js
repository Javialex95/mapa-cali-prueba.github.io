'use strict'
// MAPA
var mymap = L.map('mapid').setView([3.4372201, -76.5224991], 13);
const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png '

L.tileLayer(tilesProvider, {
    maxZoom: 18,
}).addTo(mymap);

// Abrir seccion
function menuOpen(){
    var x = document.querySelector('#section');
   
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
}

function openEdificaciones(){
    var y = document.querySelector('#edificaciones');
   
    if (y.style.display === "none") {
        y.style.display = "block";
      } else {
        y.style.display = "none";
      }
}

// DIV DRAGGABLE
$( ".contenido" ).draggable({ axis: "x" });


// SLIDERS
var index = 1;
    showMenu(index);

    function menu(n) {
        showMenu(index = n);
    }

    function showMenu(n) {
        var i;
        var slides = document.getElementsByClassName("slides");

        if (n > slides.length) { index = 1 }
        if (n < 1) { index = slides.length };

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }


        slides[index - 1].style.display = "block";
    }