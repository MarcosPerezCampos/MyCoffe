
Swal.fire({
    title: 'Necesita informacion para algun evento?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    denyButtonText: 'No',
    customClass: {
      actions: 'my-actions',
      cancelButton: 'order-1 right-gap',
      confirmButton: 'order-2',
      denyButton: 'order-3',
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Tenemos un formulario por si necesita contactarse!', '', 'info')
    } else if (result.isDenied) {
      Swal.fire('Okey, mire nuestras fotos mientras', '', 'success')
    }
  })
  


