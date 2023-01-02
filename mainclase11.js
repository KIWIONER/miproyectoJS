//Operadores avanzados.
/*operadores y condicionales avanzados (Sugar syntax).*/

// Operador ++

// Operador ternario ( condicion ? caso1 : caso2)

/*const  producto = {
    nombre: 'Noebook',
    marca: 'Asus',
    precio: 200000,
    stock: 1
};

//declarar y asignar condicionalmente
const tieneStock = producto.stock != 0 ? true : false;

//Mostrar un mensaje
tieneStock ? alert('enemos stock'): alert('no tenemos stock de este producto');
tieneStock = producto.stock != 0 ? alert('tenemos stock'): alert('no tenemos stock de este producto');*/

/*//Operador logico AND
const carrito = []

if (carrito.length === 0){
    console.log('el carrito está vacio')
}
//con operador AND
carrito.length === 0 && console.log('el carrito está vacio');

// return implicito
const usuario = {
    nombre: 'carlos',
    edad: 19
};
const registroDeIngreso = usuario.edad >= 18 && new Date();
//si la condicion no se cumple retorna false
console.log(registroDeIngreso)*/

// Operador logico OR
//console.log( operando1 || operando2 )

/*const usuario1 = {
    nombre: 'carlos',
    edad: 19
};

const usuario2 = null;

console.log(usuario1 || 'el usuario no existe')// retorna el objeto usuario1
console.log(usuario2 || 'el usuario no existe')// retorna el usuario no existe.

//el operador or tiene tambien un return implicito
const usuarioNombre = usuario1.nombre ||'el usuario no existe';
console.log(usuarioNombre)*/

//Operador nullish coalescing

// console.log(null ?? 'nullish') // nullish
// console.log(undefined ?? 'nullish') // nullish

// Operador optional chaining ( ?. )
//Ejemplo 1
/*const usuario = null
console.log(usuario.nombre || 'el usuario no existe');
//error: 'No se puede leer la propiedad null

console.log(usuario?.nombre || 'el usuario no existe');
// El usuario no existe*/

//Ejemplo2
/*const usuario2 = {
    nombre: 'Juan',
    edad: 22,
    cursos:{
        javaScript: 'aprobado'
    }
};

console.log(usuario2?.cursos?.javaScript || 'la propiedad no escixte')
//aprobado

onsole.log(usuario2?.trabajos?.coderhouse || 'la propiedad no escixte')
//la propiedad no existe*/



//Desestructuración

//primera forma (la antigua)
/*const usuario1 = {
    nombre: 'carlos',
    edad: 19,
    email: 'matias@gmail.com'
};*/

//const nombre = usuario1.nombre;
//const edad = usuario1.edad;
//const email= usuario1.email;

//console.log(nombre,edad,email)

//ejemplo1
//segunda forma ( usando desestructuración de objetos)
//const { nombre, edad, email } = usuario1;

//console.log(nombre,edad,email)

//ejemplo2
/*const usuario = {
    nombre: 'carlos',
    edad: 19,
    email: 'matias@gmail.com'
};

const {telefono} = usuario;
console.log(telefono)// undefined*/

//ejemplo3
/*const usuario = {
    nombre: 'carlos',
    edad: 19,
    telefono:{
        cel:123445,
        casa:null,
        trabajo:34455
    } 
};

const {nombre, telefono:{trabajo} } = usuario;
console.log(nombre) // carlos
console.log(trabajo) // 34455*/

//ejemplo4 - alias

/*const item = {
    item_id:432,
    product_name:'some product',
    price_per_unit: 5000
};
const {item_id: id, product_name: name, price_per_unit:price} = item ;

/*console.log(id)
console.log(name)
console.log(precio)

const id = item.item_id*/


//ejemplo5 - desestructurar objetos en parametros

/*const producto = {
    id:10,
    nombre:'Curso Javascript',
    precio: 2000
};*/

/*const pintarCurso = (curso) => {
    const{id, nombre, precio}= curso;
    console.log(id,nombre,precio)
};
pintarCurso(curso)*/

//ejemplo6 

/*const pintarCurso = ({id,nombre,precio}) => {
    console.log(id,nombre,precio)
};
pintarCurso(curso)*/



//Desestructuracion en arrays

//const nombres = ['juan','maria','pedro','Facundo'];

//const[a, b, c] = nombres

//console.log(a,b,c)
/*const[a, ,c] = nombres;
console.log(a)
console.log(c)*/


//Spread operator (...)

/*const nombres = ['juan','maria','pedro','Facundo'];
//console.log(nombres)

//spread del array nombres
console.log(...nombres)
//equivalente a:
console.log ('juan','maria','pedro','Facundo')*/

//const numeros = [3, 6, 1, 10, 56, 5];

//console.log( Math.max(numeros) ) //NaN
//console.log( Math.max(...numeros) )//56


/*const nombre1 = ['juan', 'maria',];
const nombre2 = ['marcos','julian'];

const nombre3 = [...nombre1, ...nombre2];
// const nombre3 =['juan', 'maria','marcos','julian']
console.log(nombre3)*/

// spread en objetos

//agregar o modificar elementos.

/*const curso = {
    id:10,
    nombre:'curso Javascript',
    precio:2000
};

const curso2 = {...curso};
//console.log(curso2)

const curso3 = {
    ...curso, 
    nombre: 'curso ReactJS'
    precio: 2400,
    duracion: '2 meses'

};

console.log(curso3)*/







