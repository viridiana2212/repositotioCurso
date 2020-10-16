'use strict'
//condicionales 
//if
var edad1 = 19;
var nombre = "Jonathan";
if (edad1 >= 18) {
		console.log(nombre+" tiene "+edad1+" ,Es mayor de edad");
		if (edad1 <= 33) {
			console.log("Todavia eres milenial");

		}else if(edad1 >= 70){
			console.log("Eres anciano");
		}else{
			console.log("Ya no eres milenial");
		}

}else{
	console.log(nombre+" tiene "+edad1+" ,Es menor de edad");
}

//Operadores logicos -&& -|| -!=

var year = 2029;
if (year != 2016) {
	console.log("El año no es 2016");
}

//&&

if (year >= 2000 && year<= 2020) {
	console.log("Estamos en la era actual");
}else{
	console.log("Estamos en el area postmoderna");
}

//||

if (year == 2009 || (year >= 2019 && year ==2029)) {
	console.log("El año acaba en 9");
}else{
	console.log("Año no registrado");
}
