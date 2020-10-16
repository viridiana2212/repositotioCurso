'use strict'
//while
var year = 2020;
while(year != 1991 ){

	console.log("Estamos en el año "+ year);

	if (year == 2000) {
		break;//cortar la ejecucucion del bucle
	}
	year--;
}
// do while

var years = 30;
do{
alert("solo cuando sea dierente a 20");
years --;
}while(years > 25);