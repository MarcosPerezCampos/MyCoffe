
let contrato = prompt("Si le gustaria contratarnos para eventos escriba Si de lo contrario continue: ")
if (contrato == "Si") {
   alert("Perfecto, calculemos los costos")

    const sumar = (a,b) => {
        return a + b
     };
    
    const restar = (a,b) =>{
       return a - b
    };
    
    const calcularIva = x => x * 0.21
    
    let precioEvento = 5000
    let precioDescuento = 500
    
    let iva = calcularIva(precioEvento)
    let precioConIva = sumar(precioEvento,iva)
    let precioFinal = restar (precioConIva, precioDescuento)
    
    alert ("El precio final incluyendo el precio +iva + descuento es: "+ precioFinal)

} else {
    alert("Bueno para la proxima sera, mire nuestro portafolio")

    console.log(contrato)
}


