// Variables
let a = "ai";
let e = "enter";
let i = "imes";
let o = "ober";
let u = "ufat";

// Evitar el salto de línea si no hay nada escrito en la caja de texto
function cancelarSalto(event){
    let cancelar = event.target
    if (event.keyCode === 13 && cancelar.value.trim() == '') {
        event.preventDefault();
    }
    document.getElementById('textoUsuario').addEventListener('keydown',cancelarSalto);
}

// Buscar letras mayusculas
function letrasMayusculas(textoUsuario){
    let textArea = document.getElementById(textoUsuario);
    textArea.oninput = function(){
        this.value = this.value.replace(/[A-Z]/g, '');
    }
}

// Deshabilitar el boton de copiar si la caja de resultado esta vacía
function activarBoton(){
    let botonCopiar = document.getElementById('copiar');
    botonCopiar.disabled = false;
}

// Enfocar hacia los botones al presionar la tecla tabulador
function enfocarBotones(event){
    if(event.key === 'Tab'){
        let enfoqueActual = document.activeElement;
        let botones = document.querySelectorAll('button');
        let enfocarOtroBoton = Array.from(botones).indexOf(enfoqueActual) + 1;
        if(enfocarOtroBoton >= botones.length){
            enfocarOtroBoton = 0;
        }
        botones[enfocarOtroBoton].focus();
        event.preventDefault();
    }
    document.addEventListener('keydown', enfocarSiguienteBoton);
} 

// Limpiar la caja de texto
function limpiarCaja(){
    let valorCaja = document.querySelector("#textoUsuario").value = "";
    return valorCaja;
 }

// Encriptar el mensaje
function encriptar(){
    let texto = document.getElementById("textoUsuario").value;
    let resultado = texto.replace(/e/g, e).replace(/i/g, i).replace(/o/g, o).replace(/u/g, u).replace(/a/g, a);
    let textoEncriptado = document.getElementById("resultado").value = resultado;

    if(texto == ""){
        let textoVacio = document.querySelector('#resultado');
        textoVacio.placeholder = "Ningún mensaje fue encontrado.";
        document.getElementById('copiar').disabled = true;
        return textoVacio;
    }
    activarBoton();
    limpiarCaja();
    return textoEncriptado;
}

// Desencriptar el mensaje
function desencriptar(){
    let texto = document.getElementById("textoUsuario").value;
    let resultado = texto.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    let textoDescifrado = document.getElementById("resultado").value = resultado;

    if(texto == ""){
        let textoVacio = document.querySelector('#resultado');
        textoVacio.placeholder = "Ningún mensaje fue encontrado.";
        document.getElementById('copiar').disabled = true;
        return textoVacio;
    }
    activarBoton();
    limpiarCaja();
    return textoDescifrado;
}   

// Copiar contenido
function copiarContenido(){
    let textoCopiado = document.getElementById('resultado');
    textoCopiado.select();
    textoCopiado.setSelectionRange(0,99999);
    document.execCommand('copy');
    window.location.reload;
    document.querySelector('#resultado').value = '';
    document.getElementById('textoUsuario').focus();
    document.getElementById('copiar').disabled = true;
    document.querySelector('#resultado').placeholder = 'RESULTADO'
    mensajeCopiar();
}

// Mensaje de 'Texto copiado'
function mensajeCopiar(duración = 1000){
    let mensaje = document.getElementById('mensaje');
    if(mensaje){
        mensaje.style.display = 'block';

        setTimeout(function(){
            mensaje.style.display = 'none'
        },duración)
    }
  }