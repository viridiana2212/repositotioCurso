'use strict'
//Prueba con var
alert("hola");
var numero = 40;
console.log(numero);
if(true){
	var numero= 50;
	console.log(numero);
}
console.log(numero);

//Prueba con let
var texto = "Curso JS alex";
console.log(texto);
if(true){
	let texto = "Curso laravel 5";//valor de la variable cambia solo en este bloque
	console.log(texto);
}
console.log(texto);