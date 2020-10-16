'use strict'

//fetch y peticiones a servicios / apis rest


var div_usuarios = document.querySelector("#usuarios");
var div_profesor = document.querySelector("#profesor");
var div_michael = document.querySelector("#michael");




	getUsuarios()
	.then(data => data.json())
	.then(users => {
		
		listadoUsuarios(users.data);

		
		return getInfo();
	})
	.then(data => {
		div_profesor.innerHTML = data;
		return getMichael();
	})
	.then(data => data.json())
	.then(user => {
		mostrarmichael(user.data);
		
	})

	.catch(error =>{//para ver los errores que se presenten
		alert("Error en las peticiones");
	});	
	

function getUsuarios(){
	return fetch('https://reqres.in/api/users?page=2');
}
function getMichael(){
	return fetch('https://reqres.in/api/users/2');
}
function getInfo(){

	var profesor = {
		nombre: 'Victor',
		apellidos: 'Robles',
		url: 'https://victorroblesweb.es'
	};
		return new Promise((resolve, reject)=>{
			var profesor_string = "";
			setTimeout(function(){
				profesor_string = JSON.stringify(profesor);
				if (typeof profesor_string != 'string' || profesor_string == '') return reject('error 1');
			
			
			return resolve(profesor_string);
			}, 3000);
			

			
		});
			
	}


	function listadoUsuarios(usuarios){
		usuarios.map((users, i) => {
			let nombre = document.createElement('h3');

			nombre.innerHTML = i +". "+users.first_name +" "+users.last_name;

			div_usuarios.appendChild(nombre);


			document.querySelector(".loading").style.display = 'none';
	

	
	});
	}

	function mostrarmichael(user){
		
		console.log(user);
			let nombre = document.createElement('h4');
			let avatar = document.createElement('img');

			nombre.innerHTML = user.first_name +" "+user.last_name;
			avatar.src = user.avatar;
			avatar.width = '100px';


			div_michael.appendChild(nombre);
			div_michael.appendChild(avatar);

			document.querySelector("#michael .loading").style.display = 'none';

	
	
	}