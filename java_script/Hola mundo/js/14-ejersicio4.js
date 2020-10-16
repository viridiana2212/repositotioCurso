'use strict'

//Mostrar los numeros impares entre dos numeros ingresados

var n1 = parseInt(prompt("Ingresa el primer numero",0));
var n2 = parseInt(prompt("Ingresa el segundo numero",0));

while(n1<n2){
	n1++;
	if(n1%2 != 0){
			console.log("El "+n1+" es impar");
	}
}