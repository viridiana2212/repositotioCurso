'use strict'


var n1 = parseInt(prompt("Ingresa el primer numero", 0));
var n2 = parseInt(prompt("Ingresa el segundo numero", 0));

while(n1 < 0 || n2 <0 || isNaN(n1) || isNaN(n2)){

var n1 = parseInt(prompt("Ingresa el primer numero", 0));
var n2 = parseInt(prompt("Ingresa el segundo numero", 0));

}

var r1 = "La suma es :"+(n1+n2)+" <br/>"+
		 "La resta es :"+(n1-n2)+" <br/>"+
		 "La multiplicacoin es :"+(n1*n2)+" <br/>"+
		 "La division es :"+(n1/n2)+" <br/>";

var r11 = "La suma es :"+(n1+n2)+" \n"+
		 "La resta es :"+(n1-n2)+" \n"+
		 "La multiplicacoin es :"+(n1*n2)+" \n"+
		 "La division es :"+(n1/n2)+" \n";

document.write(r1);
alert(r11);