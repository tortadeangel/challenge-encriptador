//OBTENIENDO ELEMENTOS DE HTML

const logoAlura = document.getElementById("logoAlura");
const textoUsuario = document.getElementById("textoUser");
const mensaje = document.getElementById("mostrarMensaje");

const imagenMensaje = document.getElementById("imagenMensaje");
const botonEncriptar = document.getElementById("boton1");
const botonDesencriptar = document.getElementById("boton2");

const textoEncriptado = document.getElementById("mensajeEncriptado");
const botonCopiar1 = document.getElementById("botonCopiar1");
const botonRefrescar1 = document.getElementById("botonRefrescar1");

const textoResultado = document.getElementById("textoEncriptado");
const textoResultado2 = document.getElementById("textoDesencriptado");

const textoDesencriptado = document.getElementById("mensajeDesencriptado");
const botonCopiar2 = document.getElementById("botonCopiar2");
const botonRefrescar2 = document.getElementById("botonRefrescar2");

const alertaPopUp = document.getElementById("alertaPopUp");
const ingresarTextoPopUp = document.getElementById("ingresarTextoPopUp");
const caracteresEspecialesError = document.getElementById("caracteresEspecialesError");
const botonCerrarPopUp = document.getElementById("botonCerrarPopUp");

// BOTON DE CAMBIAR TEMA

var botonTema = document.getElementById("cambiarTema");

if(localStorage.getItem("theme") == null){
  localStorage.setItem("theme", "light");
}



let localData = localStorage.getItem("theme");

if(localData == "light"){
  imagen.src = "imagenes/lupaojo.png"
  logoAlura.src = "imagenes/LogoAlura.png"
  document.body.classList.remove("dark-theme");
}
else if(localData == "dark"){
  imagen.src = "imagenes/lupaojo2.png"
  logoAlura.src = "imagenes/LogoAlura2.png"
  document.body.classList.add("dark-theme");
}

botonTema.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    imagen.src = "imagenes/lupaojo2.png";
    logoAlura.src = "imagenes/LogoAlura2.png"
    localStorage.setItem("theme", "dark");
  }else{
    imagen.src = "imagenes/lupaojo.png";
    logoAlura.src = "imagenes/LogoAlura.png"
    localStorage.setItem("theme", "light");
  }
}

  // La letra "e" es convertida para "enter"
  // La letra "i" es convertida para "imes"
  // La letra "a" es convertida para "ai"
  // La letra "o" es convertida para "ober"
  // La letra "u" es convertida para "ufat"


//BOTON ENCRIPTAR

let getValue = (e) => {
  return e.value;
}

function btnEncriptar(){
  if(textoUsuario.value.length == 0){
    alertaPopUp.style.display = "";
    ingresarTextoPopUp.style.display = "";
    caracteresEspecialesError.style.display = "none";
  }else if(((/[A-Z]/g.test(getValue(textoUsuario)) === true) || (/[´´áéíóúÁÉÍÓÚ*!¡/(-)#$%&=?¿¨¨><+@;:.,|_°]/g.test(getValue(textoUsuario))) === true)){
    alertaPopUp.style.display = "";
    caracteresEspecialesError.style.display = "";
    ingresarTextoPopUp.style.display = "none";
  }else{
    const encryptedText = encriptar(textoUsuario.value);
    textoResultado.value = encryptedText;
    mensaje.style.display = "none";
    textoUsuario.value = ""
    mensajeDesencriptado.style.display = "none";
    textoEncriptado.style.display = "flex";
    textoResultado.innerHTML = encryptedText;
  }  
}


function encriptar(stringEncriptada){
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringEncriptada;
}


//BOTON DESENCRIPTAR

function btnDesencriptar(){
  if(textoUsuario.value.length == 0){
    alertaPopUp.style.display = "";
    ingresarTextoPopUp.style.display = "";
    caracteresEspecialesError.style.display = "none";
  }else if(((/[A-Z]/g.test(getValue(textoUsuario)) === true) || (/[´´áéíóúÁÉÍÓÚ*!¡/(-)#$%&=?¿¨¨><+@;:.,|_°]/g.test(getValue(textoUsuario))) === true)){
    alertaPopUp.style.display = "";
    caracteresEspecialesError.style.display = "";
    ingresarTextoPopUp.style.display = "none";
  }else{
    const desencryptedText = desencriptar(textoUsuario.value);
    textoResultado2.value = desencryptedText;
    mensaje.style.display = "none";
    textoUsuario.value = ""
    mensajeEncriptado.style.display = "none";
    textoDesencriptado.style.display = "flex";
    textoResultado2.innerHTML = desencryptedText;
  }
}

function desencriptar(stringDesencriptada){
  let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++){
    if(stringDesencriptada.includes(matrizCodigo[i][0])){
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringDesencriptada;
}


//BOTON COPIAR

function copiar(){
  let content = document.createElement("input");
  content.setAttribute("value", textoResultado.innerHTML);
  document.body.appendChild(content);
  content.select();
  document.execCommand("copy");
  document.body.removeChild(content);
}

function copiar2(){
  let content = document.createElement("input");
  content.setAttribute("value", textoResultado2.innerHTML);
  document.body.appendChild(content);
  content.select();
  document.execCommand("copy");
  document.body.removeChild(content);
}



/* function btnCopiar1(){
  textoResultado.select();
  textoResultado.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textoResultado.value);
  textoResultado.value = "";
  alert("Texto copiado");
}

function btnCopiar2(){
  textoResultado2.select();
  textoResultado2.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textoResultado2.value);
  textoResultado2.value = "";
  alert("Texto copiado");
}
*/

//BOTON REFRESCAR

function refrescar(){
  window.location.reload();
  mensajeEncriptado.style.display = "none";
  botonCopiar.style.display = "none";
  mensajeDesencriptado.style.display = "none";
}

//BOTON CERRAR POP UP

function btnCerrarPopUp(){
  alertaPopUp.style.display = "none";
}

//mostrarMensaje.style.display = "none";

//mensajeEncriptado.style.display = "none";

//botonCopiar1.style.display = "none";
//botonCopiar2.style.display="none";

//mensajeDesencriptado.style.display = "none";