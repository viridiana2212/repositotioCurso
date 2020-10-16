'use strict'
//metodos para saber la fecha
var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDay();
var hora = fecha.getHours();
var textohora = `
El año es: ${year}
El mes es: ${mes}
El dia es: ${dia}
La hora es: ${hora}
`;


console.log(textohora);
console.log(Math.ceil(Math.random()*10000));