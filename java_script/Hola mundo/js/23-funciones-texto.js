'use strict'

//transformacion de textos

var num = 444;
var texto1 = "Bienvenido al curso de JS curso";
var texto2 = "Es un buen curso";
/*var dato = num.toString();
	dato = texto1.toUpperCase();//para cambiar el texto a mayusculas
	dato = texto1.toLowerCase();//para cambiar el texto a minusculas
console.log(dato);


//calcular la longitud de un texto

var nombre = "hola";

console.log(nombre.length);

//concatenar
var textototal = texto1+" "+texto2;
console.log(textototal);

var textototal2 = texto1.concat(" "+texto2);
console.log(textototal2);
*/
var busqueda = texto1.indexOf("curso");//para buscar  si contiene alguna palabra o letra
console.log(busqueda);

var busqueda = texto1.search("curso");//para buscar  si contiene alguna palabra o letra
console.log(busqueda);

var busqueda = texto1.match("curso");//para devolvernos una coleccion de donde se encuentra
console.log(busqueda);

var busqueda = texto1.match(/curso/g);//para devolvernos una coleccion de la palabra de manera global 
console.log(busqueda);

var busqueda = texto1.substr(14,5);//para sacarnos las letras desde la posicion que le indiquemos y cuantas queremos
console.log(busqueda);

var busqueda = texto1.charAt(4);//para sacar una letra de la cadena 
console.log(busqueda);

var busqueda = texto1.startsWith("Bienvenido");//para devolvernos falso o verdadero si existe o no una palbra o letra al inicio de la cadena
console.log(busqueda);

var busqueda = texto1.endsWith("curso");//para devolvernos falso o verdadero si existe o no una palbra o letra al final de la cadena
console.log(busqueda);

var busqueda = texto1.includes("Bienvenido");//para devolvernos falso o verdadero si existe o no una palbra de la cadena
console.log(busqueda);

var busqueda = texto1.replace("Bienvenido","Welcome");//para remplazar una palabra  de la cadena
console.log(busqueda);


var busqueda = texto1.slice(14);//para devolvernos el texto apartir de la posicion que indiquemos de la cadena
console.log(busqueda);

var busqueda = texto1.split(" ");//para devolvernos en un array el texto de la cadena
console.log(busqueda);

var busqueda = texto1.trim();//para devolvernos sin espacios delante y detras del texto de la cadena
console.log(busqueda);

