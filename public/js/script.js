const arregloBotonesEliminar = document.querySelectorAll('#btnEliminar');
arregloBotonesEliminar.forEach((boton) => {
    boton.addEventListener('click', (e)=> {
        const respuesta = prompt('Seguro que deseas eliminar?');
        if(respuesta != 'Si'){
            e.preventDefault();
        }
    });
});
