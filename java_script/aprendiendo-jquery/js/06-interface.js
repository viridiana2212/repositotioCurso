$(document).ready(function(){

//mover elemento por la pagina
$(".elemento").draggable();

//redimensionar
$(".elemento").resizable();
//seleccionar elemntos
//$(".lista-seleccionable").selectable();
//ordenar
$(".lista-seleccionable").sortable({
	update:function(event, ui){
		console.log("ha cambiado la lista");
	}
});

//drop
$("#elemento-movido").draggable();
$("#area").droppable({
	drop:function(){
		console.log("has soltado algo dentro de el area");
	}
});
//efectos
$("#mostrar").click(function(){
	$(".caja-efectos").toggle("slide","slow",4000);
});
	//Tooltip
	$(document).tooltip();
	//Dialog
	$("#lanzar-popup").click(function(){
$("#popup").dialog();
	});
	
	//
 $("#calendario").datepicker();

 //tabs
 $("#pestanas").tabs();
;});