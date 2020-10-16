'use strict'

//Todos los numeros divisores de un numero introducido

var n = parseInt(prompt("Ingresa numero",1));

for(var i = 1;i <= n;i++){

	if (n%i == 0) {
		
	console.log("Divisor "+ i);
	}
}