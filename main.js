'use strict'
// MAPA
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('mapid'), {
    center: {lat: 3.4372201, lng: -76.5224991},
    zoom: 12.5,
    mapTypeId: 'hybrid'
  });

  var marker = new google.maps.Marker({
      position: {lat: 3.4372201, lng: -76.5224950},
      map: map
  })

  var infoWindow = new google.maps.InfoWindow({
      content: '<h1>Esta es una ventana de prueba que no creo que nos sirva jaja</h1>'
  })

  var marker2 = new google.maps.Marker({
    position: {lat: 3.457699, lng: -76.50089},
    map: map,
    icon: 'https://img.icons8.com/plasticine/100/000000/filter.png'
})


marker2.addListener('click', function(){
    infoWindow.open(map, marker2)
});

}

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