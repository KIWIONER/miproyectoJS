/* control de flujos */
/* CONDICIONALES*/
/*OPERADORES LÓGICOS*/
//entender que es un objetivo
//comprender como JS evalua un valor como verdadero o Falso
//identificar operadores logicos

/* condicionales
estructura sintáctic que sirve para tomar decisiones
ej: si llueve, entonces me quedo en casa viendo peliculas

/* control de flujos
como estructuramos nuestro proyecto
son estructuras que se ejecutan en linea recta. interpreta y evalua linea por linea.

valores booleanos ( true or false)
2=2 true
2=3 false
si 2=2 TRUE, hago esto
sino, hago esto otro.*/
// si - condicion
/*if (true){
     //bloque de codigo a ejecutar
    console.log("vas a ver este mensaje")
}
if (false){
    console.log("no vas a ver este mensaje")
}*/
//operadores de comparación ==
/*el primer operador de comparacion es el operador de equivalencia ==
2 == 2 ( dos es igual a dos) true
2 == 8 (dos es igual a ocho) false.*/

/*let numero = 2;

//console.log(numero == 2); false

/*if(numero == 2){
    console.log("esto es verdadero")
} else{
    console.log("esto es falso")
}*/

/*let stock = 0;

if(stock==0){
    alert('Nesecitamos nuevo stock de este producto');
}*/
 //if... else
//condiciones anidadas if...else if

// operador de igualdad débil (loose equality): ==
//coerción de tipos
/*if (2 == '2'){
    console.log('èsto es correcto');
}*/

//operador de igualdad estricta(strict equality): ===
//compara valores y tipos de datos

/*if (2 === '2'){//recomendado usar igualdad estricta.
    console.log('èsto no se va a mostrar');
}else{
    console.log('Los tipos son ...')
}*/

//valores boolean tru or false



// ejemplo if else

/*let nombreDeUsuario = prompt('Ingrese su nombre de usuario');

if(nombreDeUsuario == ''){
    alert('No ingresaste el nombre de usuario')
}else{
    alert('nombre de usuario ingresado: '+nombreDeUsuario);
}*/

// true y false
/*let numero = 10;
let esMayor = (numero > 5);
console.log(esMayor)

if(esMayor){//if(>){}
    alert('efectivamente'+ numero+' es mayor que 5');
}else{
    alert(numero+'no es mayor que 5');
}*/
//operadores lógicos

//AND
/*let nombreIngresado =prompt('Ingresar nombre:')
let apellidoIngresado = prompt('Ingresar apellido')

if(( nombreIngresado !='') && (apellidoIngresado !='')){
    alert('nombre: '+nombreIngresado+'Apellido: '+apellidoIngresado);
}else{
    alert('falta ingresar nombre y apellido')
}*/


//OR
/*let nombreIngresado = prompt('ingrese su nombre:').toUpperCase();toLowerCase();

if((nombreIngresado == 'ANA')||(nombreIngresado =='ana')||(nombreIngresado =='Ana')){
    alert('El nombre ingresado es Ana');
}else{
    alert('El nombre ingresado no es Ana');
}*/



//combinar operadores AND OR


//crear un algoritmo con un condicional
/*let numeroIngresado = parseInt o Number(prompt ('dame un numero grande: '));
if(numeroIngresado > 1000){
    alert('Conseguiste que sea mayor a mil, felicidades')
}else {
alert ('Fallaste, prueba con 10 x 100 + 1')
}*/

/*let dimeHola =  prompt('me saludas?');
if (dimeHola == 'Hola'){
    console.log('Lo conseguiste');*/