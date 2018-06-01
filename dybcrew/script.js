

function valida() {
	if (document.formW.nombre.value.length==0) {
		alert("Recuerde que tiene que escribir su nombre")
		document.formW.nombre.focus ()
		return 0;

		}

	correo= document.formW.correo.value
	if (correo=="") {
		alert("olvidaste colocar tu correo")
		document.formW.correo.focus()
		return 0;
		}

	telefono = document.formW.telefono.value
	if (telefono=="") {
		alert("tiene que introducir el número de su teléfono.")
		document.formW.telefono.focus()
		return 0;
		}

	 mensaje= document.formW.mensaje.value
	if (mensaje=="") {
		alert("No te olvides de comentarme tu idea")
		document.formW.mensaje.focus()
		return 0;
		}

	alert("muchas gracias por enviar el formulario");
	document.formW.submit();
	}

window.onload = function(){
	var contenedor = document.getElementById('contenedor_carga');

	contenedor.style.visibility ='hidden';
	contenedor.style.opacity = '0';
}

