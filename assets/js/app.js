
document.getElementById("sprint1").addEventListener("click", mostarOcultar);
document.getElementById("sprint2").addEventListener("click", mostarOcultar);
document.getElementById("sprint3").addEventListener("click", mostarOcultar);

function mostarOcultar() {
	var tema1 = document.getElementById("tema1");
	var tema2 = document.getElementById("tema2");
	var tema3 = document.getElementById("tema3");

	console.log(tema1);


	if (this.id == "sprint2" ) {
		tema2.style.display = "block";
		tema1.style.display = "none";
		tema3.style.display = "none";
	} 
	
	if(this.id == "sprint1"){
		tema1.style.display = "block";
		tema2.style.display = "none";
		tema3.style.display = "none";

	}

	if(this.id == "sprint3"){
		tema3.style.display = "block";
		tema1.style.display = "none";
		tema2.style.display = "none"
	}
}


function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}






function saludar(){

	var saludo = document.getElementById("saludo");

	if(localStorage.getItem("nombre")){
	saludo.innerText=localStorage.getItem("nombre");
}
else{

	var nombre = prompt("¿Cuál es tu nombre? :");
	localStorage.setItem("nombre", nombre.charAt(0).toUpperCase() + nombre.substring(1).toLowerCase());
	saludo.innerText=localStorage.getItem("nombre");
}
	
} saludar();







document.getElementById("enviar1").addEventListener("click", quiz1);
document.getElementById("enviar2").addEventListener("click", quiz2);



function quiz1(){

	var respuestasCorrectas = 0;

	if(document.getElementById("p11").checked){
		respuestasCorrectas++;
	}
	if(document.getElementById("p15").checked){
		respuestasCorrectas++;
	}
	if(document.getElementById("p19").checked){
		respuestasCorrectas++;
	}

	document.getElementById("quiz1").innerHTML = "Tienes " + respuestasCorrectas + " respuestas correctas";		

}

function quiz2(){

	var respuestasCorrectas = 0;

	if(document.getElementById("p2").checked){
		respuestasCorrectas++;
	}
	if(document.getElementById("p4").checked){
		respuestasCorrectas++;
	}
	if(document.getElementById("p8").checked){
		respuestasCorrectas++;
	}

	document.getElementById("quiz2").innerHTML = "Tienes <b> " + respuestasCorrectas + " </b>respuestas correctas";		

}