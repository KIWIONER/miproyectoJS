// eventos en JS: como escuchar eventos 
/*//Opcion 1
let boton = document.getElementById('btnPrincipal');
//caso 1
/*boton.addEventListener('click',respuesta)

function respuesta (){
    alert('Hiciste click sobre un boton')
}
//caso2
boton.addEventListener('click',() => {
    alert('Respuesta al evento click!')
})*/

/*//opcion2- Empleando una propiedad del nodo

let boton = document.getElementById('btnPrincipal');

// usando una funcion anónima
boton.onclick = function(){alert('respuesta1')}

//usando una arrow function
boton.onclick = () => {alert('respuesta2')}*/


const btnAgregar = document.querySelector('.btn-info');
const btnDisminuir = document.querySelector('.btn-danger');
const resultado = document.getElementById('resultado');

let contador = 0;


btnAgregar.addEventListener('click', ( ) => {
    contador++
    actualizarContador()
})

btnDisminuir.addEventListener('click', ( ) => {
    if (contador > 0) {
        contador --
        actualizarContador()
    }
})

const actualizarContador = () => {
    resultado.innerText = contador;
};*/


//eventos

//eventos del mouse

/*let boton = document.getElementById('btnMain');

boton.onmousemove = () => console.log('Move')*/

// eventos del teclado

/*let inputNombre = document.getElementById('nombre')
let inputEdad = document.getElementById('edad')

inputNombre.onkeyup = () => {
    console.log('se ejecuta el evento keyup')
}

inputEdad.onekeydown = () => {
    console.log(' se ejecuta el evento keydown')
}*/

// evento change

/*let inputNombre = document.getElementById('nombre');
let inputEdad = document.getElementById('edad');

inputNombre.addEventListener('change', () => {


})*/


const tienda = document.getElementById('tienda')

productos.forEach((producto) => {
    const content = document.createElement('div');
    content.innerHTML = `
        <img src = "${producto.img} ">
        <h3>${producto.name}</h3>
        <h3>$${producto.precio}</h3>
    `;
    tienda.append(content);

    const comprar = document.createElement('button');
    
    comprar.innerText = 'comprar';

    content.append(comprar);

    comprar.addEventListener('click', () => {
        carrito.push({
            name: producto.name,
            img: producto.img,
            precio: producto.precio,
        });
        console.log('carrito')
    });
});

verCarrito.addEventListener('click', () =>{
    miCarrito.style.display = 'block';
    miCarrito.innerHTML = '';
    carrito.forEach((producto)=> {
        let contentCarrito = document.createElement('div');

        contentCarrito.innerHTML =`
        <img src = "${producto.img} ">
        <h3>${producto.name}</h3>
        <h3>$${producto.precio}</h3>
        `;

        miCarrito.append(contentCarrito)
    });
});


cerrarCarrito.addEventListener('click', () =>{
    miCarrito.style.display = 'none';
});




