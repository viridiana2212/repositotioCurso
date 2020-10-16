'use strict'
//local storage para guardar informacion y este disponible cuando estemos navegando

//
if (typeof(Storage) !== 'undefined') {//para saber si el navegador es compatible con localstorage
	console.log("Localstorage disponible");
}else{
	console.log("Incompatible con localstorage");
}

//guardar datos en el localstorage

localStorage.setItem("titulo", "Curso de Jonathan ");

//recuperar elemento y mostrarlo en el documento HTML


document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar Objetos

var usuario = {
	nombre: "vir",
	email: "ads@outlook.es",
	web: "www.f.com"

};
localStorage.setItem("usuario", JSON.stringify(usuario));

//recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#peliculas").append(userjs.web+" "+userjs.nombre);

localStorage.clear();//limpiar todos los datos