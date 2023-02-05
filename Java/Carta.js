
// let entrada = prompt ("Que decea comprar? ")
// console.log(entrada)
// while (entrada != "Exit"){
// alert("El usuario ingreso:"+entrada)
// entrada = prompt("Que mas quiere comprar?, si desea salir escriba Exit")
// console.log(entrada)
// }

// Inicializador variables

 let producto = ""
 let precio = 0
 let cantidad = 0
 let precioTotal = 0
 let seguirComprando = false

 do {
     producto = prompt("Que desea comprar:  Cafes, Tortas o ambos?")
     cantidad = parseInt(prompt("Cuantos queres comprar?"))

     switch (producto) {
         case "Cafes":
             precio = 1000
             break
         case "Tortas":
             precio = 400
         case "ambos":
             precio = 1400
             break
         default:
             alert ("El producto no se encuentra en el catalogo!")
             precio = 0
             cantidad = 0
     }

     precioTotal += precio*cantidad

     seguirComprando = confirm ("Queres seguir comprando?")
 } while (seguirComprando)

 alert ("El precio total de la compra es: "+precioTotal)