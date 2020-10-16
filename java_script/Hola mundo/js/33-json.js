'use strict'
//JSON JavaScript Object Notation

var pelicula = {//similar al array
	titulo: 'Batman vs Super',
	year: 2017,
	pais: 'EU'
};

var peliculas = [
	{titulo: "la verdad duele", year: 2016, pais: "Francia"},
	pelicula
];

var caja_peliculas = document.querySelector("#peliculas");//hacer referencia al div peliculas
var index; 
for(index in peliculas){
	var p = document.createElement("p");
	p.append(peliculas[index].titulo+" - "+ peliculas[index].year);//mostrar los datos de las peliculas
	caja_peliculas.append(p);
}
