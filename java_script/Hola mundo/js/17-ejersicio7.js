'use strict'
//tabla de multiplicar 

var n = parseInt(prompt("Ingresa numero de la tabla", 1));

document.write("<h1>Tabla del "+n+" </h1>");

for(var i = 1;i <= 10; i++){
	document.write(i+" x "+n+" = "+(i*n)+"<br/>");
}


//todas las tablas
for(var i = 1;i <= 10; i++){
	document.write("<h1>Tabla del "+i+"</h1>");
for(var c = 1;c <= 10; c++){
	document.write(i+" x "+c+" = "+(i*c)+"<br/>");
}
}