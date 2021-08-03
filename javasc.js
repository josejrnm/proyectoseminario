var enrutacionario = document.getElementById("enrutacionario"),
    mapasderutas = document.getElementById("mapaderutas");

function rerutar() {
    enrutacionario.style.display = "block";
    mapasderutas.style.display = "none";
};

var salidaa = document.getElementById("salidaps"),
    llegadaa = document.getElementById("llegadaps");

var sll, lle;
function rename(sll,lle) {
    document.getElementById("pusali").innerHTML =`${sll}`;
    document.getElementById("pullega").innerHTML =`${lle}`;
}

let place = ["Entrada Principal", "Bloque Administrativo","Bloque III","Bloque VII","Bloque VIII", "Edificio Sierra N.", "Edifico Ciénaga G.", "Edificio Docente","Plazoleta Central", "Cafeteria Central", "Hangares FI","Estadio de Futbol","Edificio Mar Caribe"];

console.log(place[9])
function locores() {
    var partid = salidaa[salidaa.selectedIndex].value;
    var objeti = llegadaa[llegadaa.selectedIndex].value;
    var imagenmapa = document.getElementById("maparu");
    if(partid === objeti){
        alert("Los lugares son inguales");
    }else{
        enrutacionario.style.display = "none";
        mapasderutas.style.display = "block";
        rename(place[parseInt(partid)], place[parseInt(objeti)]); 
        imagenmapa.src="Rutas/map"+parseInt(partid)+parseInt(objeti)+".jpg"
    };
};