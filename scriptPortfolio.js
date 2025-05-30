function scrollToElement(elementSelector, instance=0){
  const elemento = document.querySelectorAll(elementSelector);
  if (elemento.length>instance){
    elemento[instance].scrollIntoView({behavior: 'smooth'})
  }
}

const inicio = document.getElementById("inicio");
const sobreMi = document.getElementById("sobreMi");
const formacion = document.getElementById("formacion");
const proyectos = document.getElementById("proyectos");
const contacto = document.getElementById("contacto");

inicio.addEventListener ('click', ()=>{
  scrollToElement('header')
})

sobreMi.addEventListener ('click', ()=>{
  scrollToElement('.SecDos')
})

formacion.addEventListener ('click', ()=>{
  scrollToElement('.SecTres')
})

proyectos.addEventListener ('click', ()=>{
  scrollToElement('.secCuatro')
})

contacto.addEventListener ('click', ()=>{
  scrollToElement('footer')
})

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

const menuHamburguesa = document.querySelector('.menu-hamburguesa');
const menuOpciones = document.querySelector('.Opciones');
const menuItems = document.querySelectorAll('.menu-items li a');

menuHamburguesa.addEventListener('click', () => {
  menuHamburguesa.classList.toggle('activo');
  menuOpciones.classList.toggle('activo');
});

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuHamburguesa.classList.remove('activo');
    menuOpciones.classList.remove('activo');
  });
});

document.addEventListener('click', (e) => {
  if (!menuOpciones.contains(e.target) && !menuHamburguesa.contains(e.target)) {
    menuHamburguesa.classList.remove('activo');
    menuOpciones.classList.remove('activo');
  }
});