//Programación con funciones.
/* concepto de funcion.
/*ventajas
/*parametros
/*comprender que es el Scope y conocer variables globales y locales
/*definir y diferenciar funcion anonima y funcion flecha.*/
/*hablar de la primera preentrega.*/

/*FUNCION conjunto de instrucciones, que ayuda a resolver problemas especificos 
en nuestro codigo y no repetir muchas acciones o codigo.*/
/*ventajas
- principio DRY evitar instrucciones duplicadas.
- soluciona problemas complejos usando tareas sencillas principio KISS.
- focaliza tareas prioritarias para el programa principio YAGNI
- aporta ordenamiento y entendimiento al codigo
- aporta facilidad y rapidez para hacer modificaciones.*/
//DECLARACION 
/*function saludar(){
    console.log('Hola estudiantes');
}
//LLAMADO
saludar();

//Ejemplo practico*/

/*let nombre1 = prompt('Ingrese su nombre')
alert('El nombre ingresado es: '+nombre1)

let nombre2 = prompt('Ingrese su nombre')
alert('El nombre ingresado es: '+nombre2)

let nombre3 = prompt('Ingrese su nombre')
alert('El nombre ingresado es: '+nombre3)

//con funciones
function solicitarNombre() {
    let nombre =prompt ('Ingrese su nombre:')
    alert('El nombre ingresado es: '+nombre)
}
solicitarNombre();*/

//PARAMETROS
//sirven para pasar valores a la funcion como los numeros de una suma
//parametros = variables que solamente usamos dentro de la funcion.
//sumar dos numeros

//funcion para sumar dos numeros

/*let resultado = 0;
function sumar(primerNumero, segundoNumero){
    resultado = primerNumero + segundoNumero
};
function mostrarResultado(resultadoDeLaSuma){
    alert('El resultado de la suma es: '+ resultadoDeLaSuma)
}
sumar(10,40)
mostrarResultado (resultado)

console.log(resultado)*/


//RETURN
//ejemplo de calculadora

/*function calcularOperacion (primerNumero, segundoNumero, operacion){
    switch (operacion) {
        case '+':
            return primerNumero + segundoNumero
        case '-':
            return primerNumero - segundoNumero
        case '*':
            return primerNumero * segundoNumero
        case '/':
            return primerNumero / segundoNumero
        default:
            return 0         
    }
}
//let primerNumero = prompt('Ingrese un numero:')
//let segundoNumero = prompt('Ingrese otro numero')
//let operacion =prompt('ingresa la operacion a realizar')


let resultado = calcularOperacion(10, 5,'+')
//let resultado =calcularOperacion(primerNumero, segundoNumero, operacion)
console.log(resultado)*/

//SCOPE
/*ambito de una variable es la zona donde vive la variable o está definida*/
//global y local
//VARIABLES LOCALES

/*function sumar(primerNumero, segundoNumero){
    let resultado = primerNumero + segundoNumero
};
console.log(resultado) //esto da referenceError, la variable resultado solo vive en la funcion.

//let y const introducen el concepto de 'block scope'

//VARIABLES GLOBALES

let resultado = 0;

function sumar(primerNumero, segundoNumero){
    resultado = primerNumero + segundoNumero
};
sumar (10,5)
console.log(resultado)*/
/*se puede acceder al resultado porque let vive fuera de la funcion, no esta
declarada dentro de un bloque.*/

//ejemplo 1
//acceder a una variable antes de su inicializacion con LET

/*console.log(numero);
let numero = 5;//referenceError*/

//ejemplo2
// acceder a una variable antes de su inicializacion con VAR
/*console.log(otroNumero)
var otroNumero = 7; //undefined
 //investigar HOISTING en internet.


//ejemplo 3
function explainVar(){
    var a = 10;
    console.log(a)//10

    if(true){
        var a = 20;
        console.log(a)//20
    }
    console.log(a)//20
}
explainVar()*/

/*function explainLet(){
    let a = 10;
    console.log(a)//10
    if(true){
        let a = 20;
        console.log(a)//20
    }
    console.log(a)//10
}
explainLet()*/

// FUNCIONES ANONIMAS
/*funcion que se crea sin nombre*/

/*const suma = function (a,b){ return a + b}
const restar = function (a,b){ return a - b}
console.log (suma(2,5))
console.log(restar(10,5))*/

//funciones flecha
//funciones anonimas de sintaxis simplificada

/*const sumar = (a,b) => {return a + b};
/**
 * si es una funcion de una sola linea podemos usar el return implicito,
 * que es una caracteristica de las funciones flecha
 */

/*const restar = (a,b) => a - b;

console.log (sumar(2,5))
console.log(restar(10,5))*/

//ejemplo aplicado
/*const sumar = (a,b) => {return a + b};
const restar = (a,b) =>  a - b;

const calcularIva = x => x * 0.21;

let precioProducto = 500;
let precioDescuento = 50;

//calcular el (precioProducto + IVA) - PrecioDescuento
let nuevoPrecio = restar(sumar(precioProducto, calcularIva(precioProducto)), precioDescuento)

console.log(nuevoPrecio);*/

