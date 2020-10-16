'use strict'
//mostrar media,suma de numeros introducidos

var suma = 0;
var contador = 0;

do{
	var n1 = parseInt(prompt("Introduce numeros hasta que metas un negativo"));

	if (isNaN(n1)) {
		n1 = 0;
	}else if (n1 >= 0) {
		suma = suma + n1;

		contador++;
	}
	console.log(suma,contador);
}while(n1 >= 0);
alert("La suma es :"+suma);
alert("La media de los numeros es :"+(suma/contador));
