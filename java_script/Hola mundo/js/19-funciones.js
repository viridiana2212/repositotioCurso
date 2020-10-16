'use strict'

//funciones

//es una agrupacion reutilizable de un conjunto de instrucciones

function porConsola(n1, n2){
		console.log("suma :" + (n1+n2));
	console.log("resta :"+(n1-n2));
	console.log("multi :"+(n1*n2));
	console.log("div :"+(n1/n2));
	
	console.log("*************************************");
}

function porPantalla(n1, n2){
	document.write("suma :" + (n1+n2)+"<br/>");
	document.write("resta :"+(n1-n2)+"<br/>");
	document.write("multi :"+(n1*n2)+"<br/>");
	document.write("div :"+(n1/n2)+"<br/>");
	
	document.write("*************************************");
}
function calculadora(n1, n2, mostrar = false){

if (mostrar == false) {
	porConsola(n1, n2);
	//return "Hola";
}else {
	porPantalla(n1, n2);
	//return "Hola";
	
}
return true;
}

//calculadora(5,5);

/*for(var i = 1;i <=10; i++){
	console.log(i);
	calculadora(i,5);
}*/

calculadora(1, 4);
calculadora(1, 4, true);
