let Compra = prompt ("Desea comprar algo? escriba Si para continuar, de lo contrario continue")

if (Compra == "Si") {
    
    const carrito = []

const ordenarMenorMayor = () => {
    stock.sort((a,b) => a.id - b.id)
    listaStock()
};

const listaStock = () => {
    const lista = stock.map(producto => {
        return "- "+producto.id+" "+producto.nombre+" "+producto.descripcion+" $"+producto.precio
    })
    
    alert("Nuestra carta: "+"\n\n"+lista.join("\n"))
    comprarProductos(lista)
};

const comprarProductos = (lista) => {
    let productoId = ""
    let productoCantidad = 0
    let otroProducto = false

    do {
        productoId = parseInt(prompt("Que producto desea comprar hoy? Ingrese N°"+"\n\n"+lista.join("\n")))
        productoCantidad = parseInt(prompt("Cuantos queres comprar?"))
        
        const producto = stock.find(producto => producto.id === productoId)
        
        if(producto){
            agregarAlcarrito(producto, producto.id, productoCantidad)
            
        }else {
            alert( "El producto no se encuentra en el catalogo")
        }

        otroProducto = confirm ("Desea agregar otro producto?")
        
    } while (otroProducto);
};

const agregarAlcarrito = (producto, productoId, productoCantidad) => {
    const productoRepetido = carrito.find(producto => producto.id === productoId)

    if (productoRepetido) {
        productoRepetido.cantidad += productoCantidad
    } else {
        producto.cantidad += productoCantidad
        carrito.push(producto)
    }
    console.log(carrito)
    const precioTotal = carrito.reduce((acc,item)=>acc+ (item.precio*item.cantidad),0)
    console.log(precioTotal)
    alert ("Su total a pagar es: "+precioTotal)
}

ordenarMenorMayor()

    
} else {
    alert("La proxima sera :D , mientras vea nuestra fotos: ")
    console.log (Compra)
}




