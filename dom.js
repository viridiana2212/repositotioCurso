'use strict'

//document oject model

function cambiacolor(color){
	caja.style.background = color;
}

//conseguir elementos con un id concreto

//var caja = document.getElementById("micaja");//recuperar el valor de el elemento ene el docuento html "micaja"

var caja = document.querySelector("#micaja");//recuperar el valor de el elemento ene el docuento html "micaja" de otra manera
caja.innerHTML = "¡Texto en la caja desde JS!"//cambiar el texto o el valor del div
caja.style.background = "red";//agregar color de fondo ala etiqueta div desde js
caja.style.padding = "20px";//agregar un ancho a la etiqueta
caja.style.color = "white";//agregaar un color a la letra a la etiqueta
caja.className = "hola";//agregar una clase







//conseguir elemnto por su etiqueta 
var todoslosdivs = document.getElementsByTagName('div');

/*
var con = todoslosdivs[1];//mostrar el valor de un div
con.innerHTML = "Otro texto para el segundo elemento";
con.style.background = "green";
*/


//todoslosdivs.forEach((valor, indice)=>{
	var seccion = document.querySelector("#miseccion");

	var hr = document.createElement("hr");

	var valor;
for(valor in todoslosdivs){
	
	if (typeof todoslosdivs[valor].textContent == 'string') {
			var parrafo = document.createElement("p");
	var texto = document.createTextNode(todoslosdivs[valor].textContent);
	parrafo.append(texto);
	seccion.append(parrafo);
	}

}
seccion.append(hr);
//});


//console.log(con);

//conseguir elementos por su clase css


var divsrojo = document.getElementsByClassName('rojo');
var divsamarillo = document.getElementsByClassName('amarillo');
console.log(divsamarillo);
divsamarillo[0].style.background = "yellow";
var div;
for(div in divsrojo){
if (divsrojo[div].className == "rojo") {
	divsrojo[div].style.background = "red";
}
}


//query selector
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);
