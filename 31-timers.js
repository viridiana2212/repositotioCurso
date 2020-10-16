'use strict'

window.addEventListener('load', function(){

	//timers

	function intervalo(){
			var tiempo = setInterval(function(){//se ejecutara cada cierto tiempo y setTimeout se ejecuta solo una vez
				console.log("Set interval ejecutado");

				var encabezado = document.querySelector("h1");
				if (encabezado.style.fontSize  == "50px") {
					encabezado.style.fontSize = "30px";
				}else{
					encabezado.style.fontSize = "50px";
				}
				 
			}, 1000);

		return tiempo;
	}

	
	var tiempo = intervalo();

	var stop = document.querySelector("#stop");

	stop.addEventListener("click", function(){//funcion paradetener el intercalo time
		alert("has parado el intervalo en bucle");
		clearInterval(tiempo);
	});
		 

var start = document.querySelector("#start");
start.addEventListener("click", function(){//funcion paradetener el intercalo time
		alert("has iniciado el intervalo en bucle");
		intervalo();
		
	});
});