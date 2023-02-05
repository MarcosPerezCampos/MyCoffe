
let askAgain = true
 let userEmail = ""
 let confirmUserEmail = ""

 do {
     userEmail = prompt ("Ingrese su correo:")
     confirmUserEmail = prompt ("Confirma su correo:")

    if (userEmail === confirmUserEmail) {
    alert("El correo: "+userEmail +" Fue guardado con exito!")
    askAgain = false
    } else {
    alert ("Los correos deben ser iguales!")
    }
 } while (askAgain)