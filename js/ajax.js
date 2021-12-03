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

//Enviando datos al servidor por POST
function peticionPOST() {
    let formData = new FormData()
    formData.append('param1', 42)
    formData.append('param2', 'Miguel ')
    let opciones = {
        method: 'POST',
        body: formData
    }
    fetch('php/datos_post.php', opciones)//Hacemos la peticón
        .then(respuesta => respuesta.text())//Recibimos un objeto
        .then(texto => document.getElementById('span4').innerHTML = texto)
}

//Enviando datos al servidor por POST JSON
function peticionPOSTJSON() {
    let datos = {
        'param1' : 42,
        'param2' : 'Miguel'
    }
    let opciones = {
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{'Content-Type': 'application/json'}
    }
    fetch('php/datos_post_json.php', opciones)//Hacemos la peticón
        .then(respuesta => respuesta.text())//Recibimos un objeto
        .then(texto => document.getElementById('span5').innerHTML = texto)
}

function peticionPOSTJSON2() {
    let datos = {
        'param1' : 42,
        'param2' : 'Miguel'
    }
    let opciones = {
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{'Content-Type': 'application/json'}
    }
    fetch('php/datos_post_json2.php', opciones)//Hacemos la peticón
        .then(respuesta => respuesta.text())//Recibimos un objeto
        .then(objeto => document.getElementById('span6').innerHTML = objeto.loqsea)
}