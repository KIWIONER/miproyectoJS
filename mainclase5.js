//paradigma = tecnica para escribir codigo en un determinado lenguaje
//funcional->react
//orientado a objetos ->

/*OBJETO = estructura o coleccion de datos con la que vamos a poder generar 
una colicion de datos, que tienen una relacion entre sí 
ayuda a poder agrupar y guardar todos los datos juntos*/
/*objeto literal: se define directamente entere llaves*/

// objeto literal

/*const persona1 = {
    nombre: 'Homero',
    edad: 39,
    calle: 'Av. siempreviva 742'
};*/

//propiedades, atributo, característica
//propiedad : valor
// clave : valor

//los objetos son una estructura de datos

/*console.log(persona1.nombre)
console.log(persona1.edad)
console.log(persona1.calle)
console.log(persona1)*/

//asignar valores a las propiedades
/*const persona1 = {
    nombre: 'Homero',
    edad: 39,
    calle: 'Av. siempreviva 742'
};
console.log(persona1)

persona1.nombre = 'Marge'
persona1.edad = 36
console.log(persona1)*/

//objetos constructores

//new: instanciamos (creamos) un objeto 
/*this: hace referencia a cada uno 
de los objetos que se crean en la funcion constructora.*/

// funciones constructoras()

/*function Persona (nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}

const nombre = prompt('Ingrese su nombre: ')
const edad = parseInt(prompt('Ingrese su edad: '))
const calle = prompt('Ingrese su calle: ')

const persona1 = new Persona ('Homer',39, 'Av. Siempreviva 742' );
const persona2 = new Persona ('Marge',36, 'Av. Siempreviva 742' );
const persona3 = new Persona ('Bart',19, 'Av. Siempreviva 742' );

console.log(persona1)
console.log(persona2)
console.log(persona3)*/

/*function Product (name, price, year){
    this.name = name;
    this.price = price;
    this.year = year;
}*/

//Metodo <> funcion

//metodos en funciones constructoras

/*function Persona (nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;

    this.hablar = function(){
        alert('Hola soy '+ this.nombre)
    }
}

const persona1 = new Persona ('Marge',36, 'Av. Siempreviva 742' );
const persona2 = new Persona ('Homer',39, 'Av. Siempreviva 742' );

persona1.hablar();*/

//operador IN y FOR IN

//IN
/*const persona1 = {
    nombre: 'Homero',
    edad: 39,
    calle: 'Av. siempreviva 742'
};

//console.log('nombre' in persona1) //true
//console.log('altura' in persona1) //false*/

//recorremos todas las propiedades del objeto persona1 FOR
/*
for(const propiedades in persona1) //accedemos a las propiedades
console.log(persona1[propiedades])//accedemos a los valores*/

//CLASES

//ejemmplo aplicado

/*class Producto {
    constructor(nombre, precio, ) {
        this.nombre = nombre.toUpperCase();
        this.precio = Number(precio);
        this.cantidad = Number(cantidad);
        this.vendido = false;
    }

    sumarIva() {
        this.precio = this.precio * 1,21;  
    }
vender() {
    this.vendido = true;
    }
    actualizarStock(){
        this.cantidad = this.cantidad -1;
    }
}

const producto1 = new Producto('Arroz, 125');
const producto2 = new Producto('Fideos, 225');

producto1.sumarIva();
producto1.vender()
producto2.sumarIva();

console.log(producto1)
console.log(producto2)*/






