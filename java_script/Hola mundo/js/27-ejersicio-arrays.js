'use strict'
//programa que pida 6 numeros por pantalla 
//tiene que mostrar el array con todos sus elementos en ele cuerpo de la pagina y en la consola
//Ordenar el array y mostrarlo
//Invertir su orden y mostrarlo
//Mostrar cuantos elemnetos tiene el array
//Busqueda de un valor introducido, y que digasi esta en el arrray y su posicion




//var numeros = new Array(6);

function mostrar(elementos,textoCustom){

document.write("<h1>Contenido del array"+textoCustom+"</h1>");
document.write("<ul>");
elementos.forEach((elemento, index)=>{
	document.write("<li>"+elemento+"</li>");
});
document.write("</ul>");
}
// numeros

var numeros = [];

for(var i= 0; i<=5;i++){
	//numeros[i] = parseInt(prompt("Introduce un numero", 0));
	numeros.push(parseInt(prompt("Introduce un numero", 0)));
}

//mostrar por consola

console.log(numeros);

//mostrar en pagina

mostrar(numeros);

//ordenar  y mostrar en pagina

numeros.sort(function(a,b){return a-b});
mostrar(numeros," Ordenado");

//invertir su orden y mostrarlo

numeros.reverse();
mostrar(numeros," Invertido");

//contar elementos

document.write("<h1>El Array tiene "+numeros.length+" elementos</h1>");

//busqueda


var bus = parseInt(prompt("Ingresa numero para buscar ", 0));

var b = numeros.findIndex(numero=> numero == bus);

if(b && b != -1){
document.write("<hr/><h1>Encontrado</h1>");
document.write("<h1>Posicion de la busqueda : "+b+"</h1><hr/>");
}else{
	document.write("<hr/><h1>No Encontrado</h1><hr/>");
}