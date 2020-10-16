//tablas de multiplicar
'use strict'


var numero=parseInt(prompt('De que numero quieres la tabla de multiplicar',1));
document.write("<h1> Tabla del "+numero+"</h1>");
for(var i=1;i<=10;i++){
	document.write(i+ " X "+numero+" = "+(i*numero)+"<br/>");

}


for(var c=1;c<=10;c++){

	document.write("<h1> Tabla del "+c+"</h1>");

for(var i=1;i<=10;i++){
	document.write(i+ " X "+c+" = "+(i*c)+"<br/>");
}
}

