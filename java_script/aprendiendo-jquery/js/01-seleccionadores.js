$(document).ready(function(){
	//console.log("Estamos listos!!");
	//selector de ID
$("#rojo").css("background","red")
	      .css("color","white");
$("#amarillo").css("background","yellow")
	       .css("color","green");
$("#verde").css("background","green")
	       .css("color","white");

//slectores de clases
var  mi_clase=$('.zebra').css("padding","5px");

//console.log(mi_clase);
$('.sin_borde').click(function(){1 
	console.log("click dado!!");
	$(this).addClass('zebra');
});

//selectores de etiqueta
var parrafo =$('p').css("cursor","pointer");
parrafo.click(function(){
	var that=$(this);
	if (!that.hasClass('grande')) {
that.addClass('grande');
}else{
	that.removeClass('grande');
}
});
//selectores de atributos
$('[title="Google"]').css('background','#ccc');
$('[title="Facebbok"]').css('background','blue');

//otros
//$('p,a').addClass('margen-superior');
var busqueda=$("#caja.resaltado").fi;
console.log(busqueda);
});