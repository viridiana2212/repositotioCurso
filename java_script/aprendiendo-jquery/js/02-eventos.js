$(document).ready(function(){

//MouseOver Y MouseOut
var caja= $("#caja");

/*caja.mouseover(function(){
$(this).css("background","red");
});
caja.mouseout(function(){
$(this).css("background","green");
});
*/
function cambiarRojo(){
$(this).css("background","red");
}
function cambiarVerde(){
$(this).css("background","green");
}
//hover
caja.hover(cambiarRojo,cambiarVerde);

//click, doble click
caja.click(function(){
	$(this).css("background","blue").css("color","write");
});
caja.dblclick(function(){
	$(this).css("background","pink").css("color","yellow");
});
//focus y blur
var nombre= $("#nombre");
var datos= $("#datos");
nombre.focus(function(){
$(this).css("border","2px solid green");
});
nombre.blur(function(){
	$(this).css("border","1px solid #ccc");
//metodo val para sacar los datos
	datos.text($(this).val()).show();
});
//mousedown y mouseup
datos.mousedown(function(){
	$(this).css("border-color","gray");
});
datos.mouseup(function(){
	$(this).css("border-color","black");
});
//mousemove
$(document).mousemove(function(){
$("#sigueme").css("left",event.clientX).css("top",event.clientY);
});

});