'use strict'
//programa que diga si un numero es par o impar 

var n = parseInt(prompt("Ingresa numero", 0));

while(isNaN(n)){
	n = parseInt(prompt("Introduce un numero", 0));
}
if (n % 2 == 0) {
	alert("Es numero par");
}else{
	alert("Es impar");
}