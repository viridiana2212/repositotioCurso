'use strict'
// Arrays , arreglos , matrices

var  nombre = "Jonathan Alexis";
var nombres = ["Raul Alvares","Samuel de Luque","Ruben Doublas",52,true];

var lenguajes = new Array("PHP","JS","Go","Java");
/*
console.log(nombres[0]);


var elemento = parseInt(prompt("¿Que elemento del array quieres?", 0));
if(elemento >= nombres.length){
	alert("Introduce el numero correcto menor que "+nombres.length);
}else{
	alert("El usuario seleccionado es "+nombres[elemento]);
}
*/

document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("</ul>");
/*
for(var i = 0;i < lenguajes.length; i++){
	document.write("<li>"+lenguajes[i]+"</li>");
}
*/
/*
leguajes.forEach((elemento, indice)=>{
	document.write("<li>"+ indice+" - "+elemento+"</li>");
});
document.write("</ul>");

*/


for(let lenguaje in lenguajes){//recorrer un array
	document.write("<li>"+ lenguajes[lenguaje]+"</li>");
}
document.write("</ul>");

//busquedas

var busqueda = lenguajes.find(function(lenguaje){
	return lenguaje == "PHP";
});
console.log(busqueda);

//de forma optimizada

var busqueda = lenguajes.find(lenguaje=> lenguaje == "PHP");
console.log(busqueda);

//funcion find index para sacar la posicion en la que se encuentra el elemento
var busqueda = lenguajes.findIndex(lenguaje=> lenguaje == "PHP");
console.log(busqueda);

var precios = [10,20,30,40,50];
var bus = precios.some(precio=> precio > 80);//comprobar si un valor es mayor o igual a alguno
console.log(bus);


