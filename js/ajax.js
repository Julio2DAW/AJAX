'use strict'

//Por la via fácil
function cargarFichero() {
    fetch('datos.txt') //Hacemos la petición
        .then(respuesta => respuesta.text())
        .then(texto => document.getElementById('span1').innerHTML = texto)
}

function cargarFichero2() {
    fetch('datos.php?nombre=Miguel&saldo=999999999999')//Hacemos la petición
        .then(respuesta => respuesta.text())//Recibimos un objeto de
        .then(texto => document.getElementById('span2').innerHTML = texto)
}

//Con mayor control
function cargarFichero2() {
    const xhttp = new XMLHttpRequest()
    xhttp.onload = function () {
        document.getElementById('span2').innerHTML = this.responseText
    }
    xhttp.open('GET', 'datos.txt', true)
    xhttp.send()
}

//Detallando el control
function cargarFichero3() {
    const xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        console.log(this.readyState, this.status)
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('span3').innerHTML = this.responseText
        }
    }
    xhttp.open('GET', 'datos.txt', true)
    xhttp.send()
}