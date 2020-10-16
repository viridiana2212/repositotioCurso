//par o impar 
'use strict'


var numero=parseInt(prompt('Introduce el numero',0));

while(isNaN(numero)){

	numero=parseInt(prompt('Introduce un numero',0))
}
	if (numero%2 != 0) {
		alert(numero+"Es un numero impar");
	}else{
	alert(numero+" Es un numero par");	
}