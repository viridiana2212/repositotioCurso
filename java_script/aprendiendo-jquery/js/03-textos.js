$(document).ready(function(){
	
$('#add_button').click(function(){
$('#menu').before('<li><a href="'+$("#add_link").val()+'"></a></li>');
reloadlinks();
});


});

function reloadlinks(){
	$('a').each(function(index){
	var that=$(this);
var enlace= that.attr("href");
that.text(enlace);
});
}