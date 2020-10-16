'use strict'

//Funciones anonimas
//es una funcion que no tiene nombre

//var pelicula = function(nombre){
//	return "La peliculka es :"+nombre;
//}


function sumame(n1, n2, sumaymuestra, sumapordos){
	var sumar = n1+n2;
	sumaymuestra(sumar);
	sumapordos(sumar);
	return sumar;
}

//una funcion de flecha son utiles para ahorrar pasos sustituyendo la palabra function por ->

sumame(5, 7, function(dato){
	console.log("la suma es :"+dato);
},
function(dato){
	console.log("la suma por dos es :"+(dato*2));
});

