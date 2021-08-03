var user = document.getElementById("usera");


function captura() {    
    var nombre = document.getElementById("nombre").value;
    if (nombre==="") {
        alert("Ingresa Un Nombre");
    }else{
        alert(`Bienvenido ${nombre}`);
    }
};
function captura1() {  
    var nombree = document.getElementById("nombre2").value;  
    if (nombree==="") {
        alert("Ingresa Un Nombre");
    }else{
        alert(`Bienvenido ${nombree}`);
    }
};
function volve() {
    document.getElementById("volver").innerHTML = "| <-Volver "
}
function cerra() {
    document.getElementById("volver").innerHTML = "| Cerrar Sesion "
}
user.innerHTML = String(nombre);


document.getElementById("ingru").addEventListener('click', ()=>{
    if (document.getElementById("nombre").value != "") {
        document.getElementById("tablaini").style.display = "none";
        document.getElementById("enrutacionario").style.display = "block";
        document.getElementById("volver").style.display = "inline";
        
    } 
});

document.getElementById("ingruinv").addEventListener('click', ()=>{
    if (document.getElementById("nombre2").value != "") {
        document.getElementById("tablaini").style.display = "none";
        document.getElementById("enrutacionario").style.display = "block";
        document.getElementById("volver").style.display = "inline";
  }
});

var nombre = document.getElementById("nombre");
var nombree = document.getElementById("nombre2");

nombre.addEventListener('keyup',()=>{
    var inputText = event.path[0].value;
    document.querySelector('#usera').innerHTML = inputText;
});
nombree.addEventListener('keyup',()=>{
    var inputText = event.path[0].value;
    document.querySelector('#usera').innerHTML = inputText;
})

var imagen =  document.getElementById("maparu");
document.getElementById("cabecera").addEventListener('click',()=>{
    imagen.src = "Rutas/map2.jpg";
});