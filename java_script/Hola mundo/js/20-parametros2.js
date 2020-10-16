'use strict'
//parametros de rest y spread
function listadoFrutas(fruta1, fruta2, ...resto_frutas){//la variable resto de frutas con 3 puntos es para  recoger el resto de parametros y meterlosen un array
	console.log("Fruta 1: "+fruta1);
	console.log("Fruta 2: "+fruta2);
	console.log(resto_frutas);
}
listadoFrutas("Naranja", "Manzana","Sandia","Pera", "Melon");

var  frutas = ['Naranja','Manzana'];
listadoFrutas(...frutas,"Sandia","Pera", "Melon");