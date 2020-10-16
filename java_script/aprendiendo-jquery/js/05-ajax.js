$(document).ready(function(){
	$("#datos").load("https://reqres.in/");
//get y post
$.get("https://reqres.in/api/users",{page:3},function(response){
response.data.forEach((element,index)=>{
$("#datos").append("<p>"+element.name+"element.last_name"+"</p>");
});
});

$("#formulario").submit(function(e){
	e.preventDefault();
var usuario={
name:$('input[name="name]').val(),
web:$('input[name="web]').val()	
};
console.log(usuario);
$.post($(this).attr("action"),usuario,function(response){
	console.log(response);
}).done(function(){
	alert("usuario añadido correctamente");
});
$.ajax({
type:'POST',
url:$(this).attr("action"),
data:usuario,
beforeSend:function(){
	console.log("enviando usuario...");
},
success:function(response){
	console.log(response);
},
error:function(){
	console.log("A ocurrido un error");
},
timeout:2000
});

return false;
});
});