/*Clase 2 - Control de flujos.
Glosario:
//JavaScript: es un lenguaje de programación que se utiliza
principalment para aportar dinamismo  los sitios web.

//Variable: es un espacio reservado en la memoria que, como su nombre inidica,
puede cambiar de contenido a lo largo de la ejecución de un programa.
Podemos almacenar un numero, texto, un listado de numeros, etc.

//Algoritmo: en programación, es un conjunto de procedimientos o funciones
que se necesitan para realizar cierta operación o acción.

//Operadores lógicos: permiten agrupar expresiones logicas. Las expresiones logicas
son todas aquellas expresiones que obtienen como resultado verdadero o 
falso. los operadores logicos son aquellos que hacen de nexo de este tipo de expresiones.

//Anidar: en programacion, se refiere a escribir una sentencia junto a una 
subsiguiente dentro de la misma estructura sintáctica. Es decir, que no hay
salto de linea en el medio.

//Parsear: es una palabra devengada del ingles "parse". Refiere en programación
a una actividad que consiste en el analisis de texo para determinar si cumple o no reglas o patrones
y en base a esto, tomar alguna determinación.

//Script: un script es una secuencia de instrucciones que realizan una o mas tareas.
se puede usar para comenzar o final la clase, segun sea mas conveniente.

CONDICIONALES EN JS

//Condicionales
Cuando en programacion hablamos de condicionales, hablamos de una estructura 
sintáctica que sirve para tomar una decision a partir de una condicion.
si <condicion> entonces <operacion>

//Control de flujos
Hasta ahora todas las instrucciones que escribimos se ejecutan en linea recta, una 
sentencia después de la otra.
La idea del control de flujos es marcar puntos en nuestra aplicación donde, a partir de
alguna evaluacion, nuestro programa pueda tomar varios caminos posibles de acción.
Usar para slides de texrto o imagenes. Sino no alcanza, no sobrecargar, usar otra con el mismo tiulo
para indicar que continua el mismo modulo.

//Valores Booleanos
Para generar estos controles empezamos a trabajar con los valores booleanos. Estos pueden tomar dos valores
posibles, true o false, verdadero o falso.
Así, para que nuestro programa tome un camino u otro le vamos a decir que resuelva alguna evaluacion/complicacion.
Si es verdadera(true) tomará un camino, y si es falsa(false) tomará otro.
Usdar para slides de texto. Si no alcanza, no sobrecargar, usar otra con el mismo titulo para que continue al mismo modulo.

//Estructura IF
La estructura más utilizada en la mayoria de los lenguajes, y por ende tambien en JS, es la estructura if.
//si-condicion*/
if(true){
    //bloque de codigo a ejecutrar
    console.log("vas a ver este mensaje");
}
/*Si la condiciones se cumple (es decir, si su valor es true) se ejecutan todas las instrucciones que se encuentran dentro 
de {...}. Si la condiciones no se cumple (es decir, si su valor es false) no se ejecuta
ninguna instruccion contenida en {...} y el programa continu ejecutando el resto de instrucciones del script.*/
if (false){
    console.log("no vas a ver este mensaje");
}
/*
//Comparación
Cuando utilizamos operadores matematicos entre dos valores numericos, estos resuelven un nuevo tipo de valor numerico
que es el resultado de la operacion. Cuando comparamos dos valores a traves de un operador de comparacion,
esta operacion siempre se resuelven en true o false, es decir la comparacion es verdadera o falsa.
El primer operador de comparacion es el operador de equivalencia ==.

//Ejemplo de Condicionales
En este ejemplo, las comparaciones se realizan entre el valor de la variable unNumero y el valor numerico.
En el primer condicional, como los valores coinciden, la igualdad se cumple, y por lo tanto la condicion es cierta; su valor
es true, y se ejecutan las instruciones contenidas en el bloque del if.*/

let unNumero = 5
// Con (unNumero == 5) comparamos si unNumero es igual a 5
if (unNumero == 5){
    console.log("vas a ver este mensaje");
}
//con (unNumero == 6) comparamos si unNumero es igual a 6
if (unNumero == 6){
    console.log("no vas a ver este mensaje");
}

/* En el segundo caso unNumero no es igual a 6; su valor es false, y no se ejecutan las instrucciones 
contenidas en el bloque if*/
let unNumero = 5
//Con (unNumero == 5) comparamos si unNumero es igual a 5
if(unNumero == 5){
    console.log("vas a ver este mensaje");
}
// con (unNumero == 6) comparamos si unNumero es igual a 6
if (unNumero == 6){
    console.log("no vas a ver este mensaje");
}

/* La comparacion del ejemplo suele ser el origen de muchos errores de programacion, al
confundir los operadores == y =. Las comparaciones siempre se realizan con el operador ==, ya que = sirve para
asignar valores.

//if...else
En ocasiones, las decisiones que se deben realizar no son del tipo <<si se cumple la condiciones, hazlo;
si no se cumplen, no hagas nada>>. Normalmente las condiciones suelen ser del tipo 
<<si se cumple esta acción, hazlo; si no se cumple, haz esto otro>>.*/

let unColor = "Rojo"
//Con (unColor == "Rojo") comparamos si unColor es igual a "Rojo"
if (unColor == "Rojo"){
    console.log("el color es rojo");
}else{
    //La instruccion se interpreta cuando unColor No es "Rojo"
    console.log("el color No es Rojo");
}
// Ejemplo de if...else
let nombreUsuario = prompt("Ingresar nombre de usuario");

if(nombreUsuario == " "){
    alert("No ingresar el nombre de usuario");
}
else{
    alert("Nombre de usuario ingresado" + nombreUsuario);
}

//Condicionales anidadas if...else if
let precio = 100.5;
if(precio < 20){
    alert("El precio es menor que 20");
}
else if (precio < 50){
    alert ("El precio es menor que 50");
}
else if(precio < 100){
    alert("El precio es menor que 100");
}
else{ 
    alert("El precio es mayor que 100");
}

/*VARIABLES BOOLEAN
TRUE or FALSE
Las variables booleanas son las que solo tienen dos valores,true or false. Pueden recibir
el valor a partir de una evaluación booleana sobre otras variables:*/

let numero = 10;
let esMayor5 = ( numero > 5); //su valor será true

if (esValida) {
    alert ("Es boolean true");
}

/* Operadores lógicos
Operadores en JS
En JS, disponemos de los operadores logicos habituales en lenguajes de programación como son: es igual, es distinto
menor, menor o igual, mayor, mayor o igual, and(y), or (o) y not (no).
La sintaxis se basa en simbolos, como veremos a continuación.
Cabe destacar que hay que prestar atención a no confundir '==' con '=' porque implican distintas cosas.
OPERADORES LÓGICOS Y RELACIONALES 
// == Es igual  (a==b)
// === Es estrictamente igual  (a===b)
// != Es distinto  (a!=b)
// !== Es estrictamente distinto (a!==b)
// <,<=,>,>= Menor, menor o igual, mayor, mayor o igual (a<=b)
// && Operador and (y) a&&b
// || operador or (o) (a||b)
// ! operador not (o) (!a)*/

/*Ante una combinacion de operadores && (AND) será requisito que todas las comparaciones sean 
verdaderas para que la condicion compuesta sea verdadera.*/

let nombreIngresado = prompt ("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if ((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado + "\nApellido: "+apellidoIngresado);
}else{
    alert("Error:Ingresar nombre y apellido");
}
/* En caso de utilizar || (OR), será requisito que al menos una de las comparaciones sea verdadera
para que la condicion compuesta sea verdadera.*/

let nombreIngresado = prompt("Ingresar nombre");

if((nombreIngresado == "ANA")|| (nombreIngresado =="ana")){
    alert("El nombre ingresado es Ana");
}else{
    alert("El nombre ingresado NO ES Ana");
}
/*Tambien es posible combinar || (OR) y && (AND) para hacer comparaciones cada vez más complejas*/

let nombreIngresado = prompt("Ingresar nombre");

if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))){
    alert("Hola Ema");
}else{
    alert("Error: Ingresar nombre valido");
}
/*Ya que las expresiones logicas son evaluadas de izquierda a derecha, es necesario agrupar las 
operaciones para asegurar que se cumnplan como uno lo desea. El cambio de agrupación con los parentesis produce
resultados diferentes.
no es lo mismo*/
if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (NOMBREINGRESADO =="ema"))){
//que
if(((nombreIngresado != "") && (nombreIngresado == "EMA")) || (nombreIngresado == "ema")){