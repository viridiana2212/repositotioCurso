'use strict'
//array denro de un array

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino'];

peliculas.sort();//ordenar un array por orden alfabetico
peliculas.reverse();//de forma inversa
console.log(peliculas);

var cine = [categorias, peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][1]);
/*
var elemento = "";

do{
	elemento = prompt("Introduce tu pelicula");
	peliculas.push(elemento);
}while(elemento != "ACABAR");
*/
var indice = peliculas.indexOf('Gran Torino');

if(indice > -1){
	peliculas.splice(indice, 1);//para eliminar un elemento del array
}

var peliculas_string = peliculas.join();//para devolvernos el array separado por comas

var cadena = "texto1,texto2,texto3";
var cadena_array = cadena.split(", ");//para convertir una cadena en un array



console.log(cadena_array);

