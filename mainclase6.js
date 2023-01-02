/*ARRAY

tipo de dato que ayuda a almacenar valores.
Los valores mas importantes van a ser objetos que se almacenan y tambien numeros booleanos...etc
y tambien arrays dentro de otro.
Los elementos del array van a tener una posicion y acada una le vamos a llamar indice.
el primer elemento tiene valor 0, el segundo 1... etc.
son objetos iterables= se pueden recorrer.
Declaracion de arrays []*/

/*const numeros =[1,2,3,4,5,6,7];

let resultado1 = numeros [2] + numeros [5];

console.log(resultado1)*/


//recorrido del array

/*const numeros =[5,4,1,7,90];

for (let i = 0; i<5; i++){
    alert (numeros[i])
}*/

//METODOS Y PROPIEDADES
//LENGTH
/*sirve para obtener el largo de un Array, es decir, para identificar cuantos 
elementos tiene.*/

/*const numeros =[5,4,1,7,90,33,21,1,5,6,8,9,4,54,3515,651,1,656];

for (let i = 0; i< numeros.length; i++){
    alert (numeros[i])
}

//PUSH

const miArray = ['marca', 3, 'palabra']

miArray.push ('otro elemento', 'dato', 3, 'hola')

console.log(miArray)*/

//UNSHIFT

/*const miArray = ['marca', 3, 'palabra']

miArray.unshift ('otro elemento')

console.log(miArray)*/

// shift()  = liminar el primer elemento de un array

//pop()-> elimina el ultimo elemento

//splie -> permitir eliminar uno o mas elementos de un array en cualquier
//posicion. recibe dos argumentos
//primero indice donde va a empezar a trabajar
//el segundo indica la cantidad de elementos a eliminar.

/*const nombres = ['ana', 'pedro', 'maria', 'carlos', 'Juan']

nombres.splice(2,3)
console.log(nombres)*/

//metodo join
//ayuda a convertir a string un array y poder separar cada elemento del array 
//por un caracter
/*const nombres = ['ana', 'pedro', 'maria', 'carlos', 'Juan']

console.log(nombres.join('\n'))*/

//CONCAT sirve para concatenar arrays

/*const miArray = ['ford, 45'];
const otroArray = ['hola',22,'mundo'];
const nuevoArray = miArray.concat (otroArray);

console.log(nuevoArray)*/

/*SLICE devuelve una parte del array que recorremos o una copia del array
dentro de un nuevo array*/

//indexOf el indice de un elemento en un array

// indexOf() / includes()

/*const usuarios = ['ana', 'pedro', 'maria', 'carlos', 'Juan'];
-------includes
let nuevoUsuario = ''
do {
    if(nuevoUsuario !==''){
        alert('el nombre de usuario ya existe, ingrese uno nuevo!')
    }
    nuevoUsuario = prompt ('Ingrese un nombre de usuario para registrar: ')
    
} while (usuarios.includes(nuevoUsuario));

usuarios.push(nuevoUsuario)
alert('El nombre de usuario'+nuevoUsuario+'se creo con éxito')*/
/*---------indexOf
const usuarios = ['ana', 'pedro', 'maria', 'carlos', 'Juan'];

let nuevoUsuario = ''
do {
    if(nuevoUsuario !==''){
        alert('el nombre de usuario ya existe, ingrese uno nuevo!')
    }
    nuevoUsuario = prompt ('Ingrese un nombre de usuario para registrar: ')
    
} while (usuarios.indexOf(nuevoUsuario)!== -1);

usuarios.push(nuevoUsuario)
alert('El nombre de usuario'+nuevoUsuario+'se creo con éxito')*/


//REVERSE invertir el orden de los elementos dentro del array
//tambien modifica el array original.

//ARRAY DE OBJETOS
/*posibilidad de almacenar varios objetos dentro de un array*/

/*const objeto1 = {id:1, nombre: 'arroz'};
const array = [objeto1, { id:2, nombre: 'fideos'}]

array.push({id:1, nombre: 'pan'})

console.log(array)*/


//for of

const productos = [ { id:1, nombre: 'fideos', precio: 200},
                    { id:2, nombre: 'arroz',precio: 300},
                    { id:3, nombre: 'pan',precio: 400},
                    { id:4, nombre: 'leche',precio: 500} ];

for (const producto of productos){
    console.log(producto)
    console.log(producto.id)
    console.log(producto.nombre)
    console.log(producto.precio)
}


//Ejemplo con OBJETOS

/*class producto{
    constructor(nombre,precio){
        this.nombre = nombre.toUpperCase();
        this.precio = Number (precio);
        this.vendido = false;
    }

    sumarIva(){
    this.precio = this.precio *1.21;
    }
}

// declaramos un array de producto para almacenar objetos
const productos = []

const producto1 = new producto('arroz, 125');
const producto2 = new producto('aceite, 525');

productos.push(producto1, producto2);

//vamos a iterar sobre el array productos
for(const producto of productos){
producto.sumarIva();

}

console.log(productos)*/