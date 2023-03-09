
// La idea de este formulario es tener la informacion de estadisticas o de un usurio que se quiere contactar

const formulario    = document.getElementById("form");
const nombre        = document.getElementById("name");
const correo        = document.getElementById("correo");
const texto         = document.getElementById("text");
const edad          = document.getElementById("age");
const hombre        = document.getElementById("man");
const mujer         = document.getElementById("women");
const delivery      = document.getElementById("delivery");
const consumoLocal  = document.getElementById("consumoLocal");
const enviar        = document.getElementById("finalizar");

formulario.addEventListener("submit", (e) => {
  e.preventDefault()

  console.log (nombre.value)
  console.log (correo.value)
  console.log (texto.value)
  console.log (edad.value)
  console.log (hombre.value)
  console.log (mujer.value)
  console.log (delivery.value)
  console.log (consumoLocal.value)
  console.log (enviar.value)
})

