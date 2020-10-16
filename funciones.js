'use strict'
//una funcion es una agrrupacion reutilizable de un conjunto de instrucciones

function calculadora(numero1, numero2,mostrar=false){

if (mostrar==false) {
console.log("Suma:  "+(numero1+numero2));
console.log("Resta:  "+(numero1-numero2));
console.log("Multipliacacion:  "+(numero1*numero2));
console.log("Division:  "+(numero1/numero2));

console.log("*****************************************************+");
}else{
document.write("Suma:  "+(numero1+numero2)+"<br/>");
document.write("Resta:  "+(numero1-numero2)+"<br/>");
document.write("Multipliacacion:  "+(numero1*numero2)+"<br/>");
document.write("Division:  "+(numero1/numero2)+"<br/>");

document.write("***************************************************"+"<br/>");

}

}
//calculadora(12,8);
//calculadora(98,2);

/*for(var i=1;i<=10;i++){
	console.log(i);
	calculadora(i,8);
}*/
calculadora(1,4);
calculadora(2,5,true);
calculadora(4,5,true;)

