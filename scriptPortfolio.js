function enviar(){
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("email").value;
  var telefono = document.getElementById("telefono").value;
  var mensaje = document.getElementById("mensaje").value;

  if (!nombre || !correo || !telefono || !mensaje){
    alert("Por favor complete todos los campos")
    return
  }

  alert("Su correo ha sido enviado "+ nombre +", muchas gracias!")
  console.log("Nombre ingresado: " + nombre )
  console.log("Correo ingresado: " + correo )
  console.log("Telefono ingresado: " + telefono )
  console.log("Mensaje enviado: " + mensaje )
}