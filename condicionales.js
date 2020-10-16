"use strict"
//CONDICIONAL IF
var edad=34;
var nombre='Josue Mateo';
if (edad>=18) {
	console.log(nombre+" tiene "+ edad+" años es mayor de edad")
if (edad<=33) {
console.log("Todavia eres milenial");
}else
{
console.log("Ya eres milenial");
}
}else
{
	console.log(nombre+" tiene "+ edad+" años es menor de edad")
}

//OPERADORES OGICOS

var year=2018;
//NEGACION
if (year!=2016) {
	console.log("El año no es 2016 realmente es:"+year);
}
//AND
if (year>=2000 && year<=2020) {
console.log("Estamos en la era actual");
}else{
	console.log("Estamos en la era post moderna");
}
//OR 
if (year==2008 || (year==2018 && year ==2028)) {
console.log("El año aca en 8");
}else{
	console.log("Año no registrado");
}






//si pasa esto
/*
if(edad1>edad2){
	console.log("Edad uno es mayor que edad2");

}else{
	console.log("Edad uno es inferior");
}*/

