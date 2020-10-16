'use strict'
//es el browse object model

function getBom(){
console.log(window.innerHeight);// para ver el tamaño de la ventana (altura)
console.log(window.innerWidth);// para ver el tamaño de la ventana (anchura)
console.log(screen.width);// para ver el tamaño de la ventana (anchura) de otra forma
console.log(screen.height);// para ver el tamaño de la ventana (anchura) de otra forma
console.log(window.location.href);//para imprimir la url de donde estamos
}

function redirect(url){//funcion para redirigirnos a cualquier pagina que ingresemos
window.location.href = url;
}

function abrir(url){//funcion para redirigirnos a cualquier pagina que ingresemos en una nueva ventana
	window.open(url,"","width = 400, height = 300");
}
 
getBom();