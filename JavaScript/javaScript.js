// Bienvenida

(async () => {
    const {value: nombre} = await Swal.fire({
    title: 'Bienvenido',
    text: 'Escribe tu nombre',
    icon: 'info',
    confirmButtonText: 'Enviar',
    backdrop: true,
    position: 'center',
    allowOutsideClick: true,
    allowEscapeKey: false,
    allowEnterKey: false,
    stopkeydownPropagation: false,

    input: 'text',
    inputPlaceholder: 'Nombre',
    imputValue: ''

    });

    if (nombre){
        Swal.fire(`Bienvenido a My Coffe ${nombre}`,)
        
           }; 
           
    
} )()




