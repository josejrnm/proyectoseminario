let iniciar = document.getElementById("ini"),
    invitado = document.getElementById("invitado"),
    moder=0,
    moderr=0,
    datosdeinvitado = document.getElementById("datosdeinvitado"),
    image = document.getElementById("image"),
    image2 = document.getElementById("image2");


invitado.addEventListener('click',() => {
    invitado.style.background = "Transparent";
    invitado.style.color = "rgb(255, 251, 0)";
    invitado.style.fontSize = "1.5em";
    invitado.style.marginTop = "0.1em";
    image2.style.width="190px";
    image2.style.height="190px";
    image2.style.marginTop = "0.1em";
    image2.style.width="190px";
    image2.style.height="190px";
    image2.style.marginTop = "0.1em";
    document.getElementById("invisio").style.paddingTop="1em";
    document.getElementById("invisio").style.height="490px";
    image.style.width=null;
    image.style.height=null;
    image.style.marginTop = null;
    document.getElementById("inisio").style.paddingTop=null;
    document.getElementById("inisio").style.height="400px";
    document.getElementById("datosinicio").style.display="none";
    document.getElementById("datosdeinvitado").style.display ="block";
    iniciar.style.background = null;
    iniciar.style.color = null;
    iniciar.style.fontSize = null;
    iniciar.style.marginTop =null;
    image.style.width=null;
    image.style.height=null;
    image.style.marginTop = null;
  
});

iniciar.addEventListener('click',() =>{
    iniciar.style.background = "Transparent";
    iniciar.style.color = "rgb(255, 251, 0)";
    iniciar.style.fontSize = "2em";
    iniciar.style.marginTop = "0.1em";
    image.style.width="190px";
    image.style.height="190px";
    image.style.marginTop = "0.1em";
    document.getElementById("inisio").style.paddingTop="1em";
    document.getElementById("inisio").style.height="510px";
    document.getElementById("datosinicio").style.display="block";
    image2.style.width=null;
    image2.style.height=null;
    image2.style.marginTop = null;
    document.getElementById("invisio").style.paddingTop=null;
    document.getElementById("invisio").style.height=null;
    document.getElementById("datosdeinvitado").style.display =null;
    invitado.style.background = null;
    invitado.style.color = null;
    invitado.style.fontSize = null;
    invitado.style.marginTop = null;
    image2.style.width=null;
    image2.style.height=null;
    image2.style.marginTop = null;
});
