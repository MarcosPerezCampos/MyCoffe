// Bienvenida

function solicitarNombre(){
let nombreIngresado = prompt("Ingrese su nombre:")

    if (nombreIngresado == "") {
    alert("No ingresaste ningun nombre")

    } else {
    alert("Bienvenido a My Coffe " + nombreIngresado)
    console.log(nombreIngresado)
}
}

solicitarNombre()
