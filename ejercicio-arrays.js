'use strict'

function mostrarArray(elementos,textoCustom){
	document.write("<h1<Contenido del array "+textoCustom+"</h1>");
	
}


var numeros=[];
for(var i=0;i<=5;i++){
	numeros.push(parseInt(prompt("Introduce un numero")));

}
document.write(numeros);

console.log(numeros);