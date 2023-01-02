// filtros
//ordenar de menor a mayor precio

const ordenarMenorMayor = () => {
    productos.sort((a,b) => a.precio - b.precio)//ordenamos de menor a mayor 
    mostrarListaOrdenada() 
}

const ordenarMayorMenor = () => {
    productos.sort((a,b) => b.precio - a.precio)// ordenamos de mayor a menor
    mostrarListaOrdenada()
}

const mostrarListaOrdenada = () => {
    const listaOrdenada = productos.map(producto => {
        return '- '+producto.nombre+' $'+producto.precio
    });
    alert('Lista de precios: '+'\n\n'+listaOrdenada.join('\n'))
};

const comprarProductos = (listaDeProductos) => {
    let otroProducto = false;
    let productoNombre = '';
    let productoCantidad = 0;

    do {
        productoNombre = prompt('¿Que producto desea comprar?'+'\n\n'+listaOrdenada.join('\n'));
        productoCantidad = parseInt(prompt('¿cuantos queres comprar?'))
        const producto = productos.find ( producto => producto.nombre.toLocaleLowerCase === productoNombre.toLocaleLowerCase)

        otroProducto = confirm ('¿desea agregar otro producto?')
    } while (otroProducto);
}