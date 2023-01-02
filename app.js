//get element by ID

//et div = document.getElementById ('app');
//let parrafo = document.getElementById ('parrafo1');
//console.log (div)
//console.log (div.innerHTML)// obtenemos el contenido de div
//console.log(parrafo.innerHTML) obtenemos el contenido de parrafo1

// get element by class name

/*let paises = document.getElementsByClassName('paises');
console.log(paises)// coleccion de elementos html
console.log(paises[0].innerHTML)// accedemos a cada uno de los elementos
console.log(paises[1].innerHTML)
console.log(paises[2].innerHTML)*/

// get element by tagname: accedemos a todas las etiquetas.

/*let contenedores = document.getElementsByTagName('div');
console.log(contenedores[0].innerHTML)
console.log(contenedores[1].innerHTML)
console.log(contenedores[2].innerHTML)*/

//recorrer HTMLcollection con FOR OF

/*let paises = document.getElementsByClassName('paises');

for (const pais of paises) {
    console.log(pais.innerHTML)
}*/


//innerText : permite establecer un nodo tipo texto.

/*let titulo = document.getElementById('parrafo1');
/*console.log(titulo.innerText)*/


// cambio del contenido del elemento

/*titulo.innerText = 'Hola Coders!!'

//Ejemplo: 
const nombreUsuario = prompt ('Bienvenido! ingrese su nombre de usuario:');

titulo.innerText = 'Hola'+nombreUsuario+ */

// innerHTML: permite crear etiquetas HTML

/*let container = document.getElementById('contenedor');

container.innerHTML = '<h2>Hola mundo!!</h2>'

container.className = 'container row'*/


// obtener datos de inputs

/*let nombre = document.getElementById ('nombre').value;
let edad = document.getElementById ('edad').value;

nombre.value = 'Homero'
edad.value = 38*/


//remove()
/*let nombre = document.getElementById('nombre')

nombre.remove()*/


// Ejemplo aplicado

/*let padre = document.getElementById ('personas')

let personas = ['Homero', 'Marge', 'Lisa', 'Bart'];

for (const persona of personas) {
    let li = document.createElement('li')

    li.innerHTML = persona;

    padre.appendChild(li)

}*/

//appenChild
// agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre sleccionado.

// Plantillas literales

/*let producto = { id:1, nombre: 'arroz', precio: 300};let concatenado = 'ID: '+producto.id+' - producto: '+producto.nombre+'precio: $'+producto.precio;
let plantilla = `ID: ${producto.id} - Producto: ${producto.nombre} $${producto.precio}`
console.log(concatenado)
console.log(plantilla)*/

/*const pintarProductos = () => {
    const contenedor = document.getElementById ('producto-contenedor')

    pintarProductos.forEach(producto => {
        const div= document.createElement('div');
        div.classList.add('card')
        div.innerHTML +=` 
        `
        contenedor.appendChild(div)
    })
}
pintarProductos()*/


//desafio segunda entrega:
/*
hasta funciones de orden superior*/

