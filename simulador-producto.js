// caluladora de costo total de productos seleccionados por el usuario

/*let precioTotal = 0
let unidades = 0
let producto1 = 'camiseta'
let producto2 = 'sudadera'
let producto3 = 'gorra'
let iva = precioTotal *1.21
let comprar = true*/


//do while-> permite ejecutar  por lo menos una accion una o más veces
//confirmar el correo electrónico


/*let nombre =''
let email= ''
let confirmEmail = ''
let askAgain = true;
do {
    nombre = prompt ('Ingrese su nombre')
    userEmail = prompt('Ingrese su correo: ')
    confirmEmail = prompt('confirme su correo: ')
    if(email === confirmEmail){
        alert('El correo '+userEmail+'ha sido guardado con éxito')
        askAgain = true;
    }else{
        alert('los correos deben ser iguales!')
    }
} while (askAgain) o (email != confirmEmail);*/


//do while-> permite ejecutar  por lo menos una accion una o más veces

//confirmar el correo electrónico

const comprarProductos = () => {
    let producto = '';
    let cantidad = 0;
    let precio = 0;
    let compraTotal = 0;
    let algoMas = false;

    do {
        producto = prompt('¿que quieres comprar? Tenemos sudaderas, camisetas y gorras')
        cantidad = parseInt(prompt ('¿Cuantos te quieres llevar?'))

        let cantidadValidada = validarCantidad(cantidad);
        
    switch (producto) {
        case "sudaderas":
                precio= 69;
                break;
        case "camisetas":
                precio = 24;
                break;
        case "gorras":
                precio = 15;
                break;
        default:
            alert ('Algo no ha ido bien, vuelve a elegir qúe producto qieres');
            precio = 0;
            cantidad = 0;
    }
    compraTotal += precio * cantidadValidada;
        algoMas = confirm ('¿Quieres añadir algo más?');

    } while (algoMas)

    return totalCompra;
}

const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad === 0){
        if (cantidad !== 0){
            alert('Debe escribir un número.')
        } else {
            alert ('Agrega la cantidad de productos que quieres.')
        }
        cantidad = parseInt(prompt('¿Cuántas unidades quieres llevarte?'))
    }
    return cantidad;
};