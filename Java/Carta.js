const carrito = []

const ordenarMenorMayor = () => {
    stock.sort((a,b) => a.precio - b.precio)
    listaProductos()
};

const listaProductos = () => {
    const lista = stock.map(producto => {
        return "-"+producto.nombre+" $"+producto.precio
    })
    
    alert("Lista de productos: "+"\n\n"+lista.join("\n"))
    comprarProductos(lista)
};

const comprarProductos = (lista) => {
    let productoNombre = ""
    let productoCantidad = 0
    let otroProducto = false

    do {
        productoNombre = prompt ("Que producto desea comprar hoy?"+"\n\n"+lista.join("\n"))
        productoCantidad = parseInt(prompt("Cuantos queres comprar?"))
        
        const producto = stock.find(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase())
        
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

}
ordenarMenorMayor()