'use strict'
//local storage para guardar informacion y este disponible cuando estemos navegando

//
if (typeof(Storage) !== 'undefined') {//para saber si el navegador es compatible con localstorage
	console.log("Localstorage disponible");
}else{
	console.log("Incompatible con localstorage");
}

