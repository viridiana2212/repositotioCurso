'use strict'
// programa quye pida 2 numeros y mencione cual es el mayor, menor y si son iguales
//si los numeros no son un numero o son menores o iguales a cero que lo vuelva a pedir

var n1 = parseInt(prompt("Introduce el primer numero", 0));
var n2 = parseInt(prompt("Introduce el segundo numero", 0));

while(n1 <= 0 || n2 <= 0 || isNaN(n1) || isNaN(n2)){
	var n1 = parseInt(prompt("Introduce el primer numero", 0));
var n2 = parseInt(prompt("Introduce el segundo numero", 0));
}

if (n1 == n2) {
	alert("Los numeros son iguales");
}else if (n1>n2) {
	alert("El numero mayor es :"+n1);
	alert("El numero menor es :"+n2);
}else if (n2>n1) {
	alert("El numero mayor es :"+n2);
	alert("El numero menor es :"+n1);
}else{
	alert("Introduce numeros correctos");
}
