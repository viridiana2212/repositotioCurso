'use strict'

//divisores de un numero que introduve en prompt


var numero=parseInt(prompt("Introduce el numero",1));

for(var i=1;i<=numero;i++){
	if (numero%i==0) {
	console.log("Divisor: "+i)
}
}



