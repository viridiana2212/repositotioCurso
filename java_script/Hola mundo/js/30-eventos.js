'use strict'
//eventos del raton

window.addEventListener('load', ()=>{//carga todos los elementos del document sin importar donde esten



		function cambiarcolor(){
			console.log("me has dado clic");
			var bg = boton.style.background;
			if (bg == "green") {
			boton.style.background = "red";

		}else{
			boton.style.background = "green";
		}
		boton.style.padding = "10px";
			boton.style.border = "1px solid #ccc";
		return true;
		}

		var boton = document.querySelector("#boton");
		//evento que captura el click
		boton.addEventListener('click', function(){
			cambiarcolor();
			console.log(this);
			this.style.border = "10px solid black";
		});




		//mouse over para cabiar los atributos al pasar el cursor

		boton.addEventListener('mouseover', function(event) {
			/* Act on the event */
			boton.style.background = "yellow";
		});

		//mouse out para cabiar los atributos al dejar de pasar el cursor
		boton.addEventListener('mouseout', function(event) {
			/* Act on the event */
			boton.style.background = "#ccc";
		});


		//focus se refiere a posisionarse dentro del input
		var input = document.querySelector("#campo_nombre");
		input.addEventListener('focus', function(event) {
			/* Act on the event */
			console.log("Estas dentro del input");
		});


		//blur se refiere a posisionarse fuera del input
		var input = document.querySelector("#campo_nombre");
		input.addEventListener('blur', function(event) {
			/* Act on the event */
			console.log("Estas fuera del input");
		});
		//keydown sucede cuando escribes
		var input = document.querySelector("#campo_nombre");
		input.addEventListener('keydown', function(event) {
			/* Act on the event */
			console.log("[keydown] pulsando esta tecla", String.fromCharCode(event.keyCode));
		});

		//keypress 
		var input = document.querySelector("#campo_nombre");
		input.addEventListener('keypress', function(event) {
			/* Act on the event */
			console.log("[keypress] tecla presionada", String.fromCharCode(event.keyCode));
		});
		//keyup

		var input = document.querySelector("#campo_nombre");
		input.addEventListener('keyup', function(event) {
			/* Act on the event */
			console.log("[keypress] tecla soltada", String.fromCharCode(event.keyCode));
		});

});//final del load