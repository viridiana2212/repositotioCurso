'use strict'

function suname(numero1,numero2,sumaymuestra,sumapordos){
	var sumar=numero1+numero2;
	sumaymuestra(sumar);
	sumapordos(sumar);
	return sumar;
}

suname(5,7, function(dato){
	console.log("La suma es: "+dato);
},
function (dato){
console.log("La suma por dos es: ",(dato*2));
});
