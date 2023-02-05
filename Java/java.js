// Bienvenida

let nombreIngresado = prompt("Ingrese su nombre:")
if (nombreIngresado == "") {
    alert("No ingresaste ningun nombre")
} else {
    alert("Bienvenido a My Coffe " + nombreIngresado)
    console.log(nombreIngresado)
}
alert("Pruebe nuestra calculadora digital: ")
function calcularOperacion(primerNumero, segundoNumero, operacion){
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero
            case "-":
            return primerNumero - segundoNumero
            case "*":
            return primerNumero * segundoNumero
            case "/":
            return primerNumero / segundoNumero
            default:
                return 0
    }
}

let numero1 = Number(prompt("Ingrese el primer numero:"))
let numero2 = Number(prompt("Ingrese el segundo numero:"))
let operacion = prompt("Ingrese la operacion a realizar:", "ejemmplo: + - * /")

let resultado = calcularOperacion(numero1, numero2, operacion)

alert("El resultado de la operacion es: "+ resultado)
