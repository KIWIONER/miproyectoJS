//CLASE 1- Conceptos generales:sintaxis y variables
//sintaxis y codigo
//Codigo JavaScript: JS tiene sus propias reglas para la sintaxis, aunque respeta los estádares de muchos
//lenguajes de programacion logicos. 
//Nuestro codigo JS se asocia al archivo HTML que se carga en el navegador. 
//Tenemos dos maneras de escribir codigo JavaScript en nuestras aplicaciones web.

//¿Como escribir codigo JS?
//Dentro de un archivo HTML, entre medio de las etiquetas <script>
//Ejemplo
/*<script>
    //Aqui se escribe el codigo JS
</script>

//En un archivo con extension .js
//Ejemplo: main.js
//Se vincula con la etiqueta <script> y el atributo "src". recuerda no utilizar espacios ni 
//mayusculas en los nombres de archivo
<script src="js/main.js"></script>

/*Sintaxis
Reglas básicas:
-No se tienen en cuenta los espacios en blanco y las nuevas lineras ( al igual que html).
-Case sensitive: se distingue mayusculas de minusculas.
-Se puede incluir bloques de comentarios.*/
<script>
    // comentario simple: una linera
    /* comentario de mas de una linea Ingeresa
       Comentario de más de una linea II */
</script>

//Palabras reservadas se utilizan para construir sentencias de JS y que, por tanto no pueden ser utilizadas libremente//
break,case,catch,continue,default,let ,delete,do,else,finally,for,function
if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with
// Y MUCHAS MÁS

// VALORES Y VARIABLES
//variables: espacio reservado en la memoria que, puede cambiar de contenido a lo largo de la ejecuciuón de un programa//
//en las variables almacenamos diversos tipos de datos que utilizamos en la aplicación//
<script>
  //declaracion de variable ES5.
    var nombre = "Jhon";

    declaracion de variable ES6.
    let apellido = "Doe";
    const CURSO= "JavaScript"
</script>
//DECLARACION: declarar una variable significa crearla. Para esto usamos la palabra reservada var, let o const.
//escribimos una de estas palabras claves seguido del nombre de nuestra variable.
//Para los nombres no debemos utilizar ni espacios ni caracteres especiales.

//correcto
let apellido
let telefono
const anioNacimiento

//incorrecto
var año
var telefono movil.

//VALORES : 
//posemos asociar distintos valores a una variable en JS. Para empezar
//trabajaremos con los tipos de datos más comunes, los cuales son las cadenas de texto y los números:
//- number: un valor numérico puede ser entero o decimal.
//- string: un string o cadena de texto, es un valor compuesto por uno o más caracteres, definido entre comillas simples o dobles.
//declaración:
let edad
let nombre
let apellido
//asignacion
edad = 5
nombre = "Jhon R."
apellido = 'Doe' 

//INICIALIZAR VARIABLES
//Podemos declarar una variable y asignarle un valor inicial en el mismo proceso:
//variables inicializadas
let edad = 5
const nombre = "Jhon R."
const apellido = 'Doe'

//LET Y CONST
// las declaraciones con let y const tienen controles adicionales para las variables.
//principalmente impiden que se puedan crear dos variables con el mismo nombre.
//Una variable let puede recibir múltples asignaciones en el transcurso de la aplicación, es
//decir que puede cambiar de valor varias veces. Una constante const recibe una única asignación al momento de su declaración, impidiendo que 
// su valor se modifique luego.

let edad = 5 
edad = 34

const apellido = 'Doe'
// no es posible cambiarlo 
apellido = 'Trump'

// OPERACIONES BÁSICAS
//con variables de valores numericos podemos realizar operaciones matemáticas: sumas, restas, multiplicaciones, etc.
let numeroA = 1;
let numeroB = 2;
const NUMEROC = 3;
//suma de dos numeros (1 + 2 = 3)
let resultadoSUma = numeroA + numeroB;
//resta de dos numerosc (2 - 1 = 1)
let resultadoResta = numeroB - numeroA;
//producto de dos numeros (2 * 3 = 6)
let resultadoProducto = numeroB * NUMEROC;

//con variables de tipo string (texto) se puede concatenar los valores, es decir, combinarlas.
let textoA = "CODER";
let textoB = "HOUSE";
const BLANCO = " ";
//concatenar textaA y textoB ("CODER" + "HOUSE" = "CODERHOUSE")
let resultadoA = textoA + textoB;
//concatenar textoB y 1 ("HOUSE" + 1 = "HOUSE1")
let resultadoB = textoB + 1;
//concatenar textoA, BLANCO y textoB ("CODER" + " " + "HOUSE" = "CODER HOUSE")
let resultadoC = textoA + BLANCO + textoB;

//Prompt, consola y alert
//PROMPT: la sentencia prompt() mostrará un cuadro de dialogo para que el usuario ingrese un dato.
//se puede proporcionar un mensaje que se colocará sobre el campo de texto. El valor que devuelver es una cadena
//que representa lo que el usuario ingresó-
let nombreIngresado = prompt("Ingrese su nombre");

//CONSOLA: la sentencia console.log() muestra el mensaje que pasemos como parámetro a la llamada en la consola 
//JavaScript del Navegador web.
console.log("Mensaje de prueba");

let nombre = "Jhon Doe"
console.log(nombre)
//En Chrome, la consola del navegador está  disponible accediendo mediante: 
//Boton derecho sobre alguna parte de la web > Inspeccionar > Consola

//ALERT: La sentencia alert() mostrará una vewntana sobre la pagina web que estemos accediendo 
//mostrando el mensaje que se pase como parámetro a la llamada

alert("¡Hola Coder!");
// ejemplo de alert: en la pantalla del navegador, el usuario verá una ventana sobre la web que muestra un mensaje
//Al valor que mostramos al usuario como un resultado se lo conoce por el termino de salida.

//Ejemplo de un Script Completo de JS corriendo en un archivo HTML.
<!DOCTYPE html>
<html>
    <head>
        <title>Mi primer App - CoderHouse</title>
        <script>
            let entrada = prompt("Ingeresar una letra");
            let salida = entrada + " " + "ingresada";
            alert(salida);
        </script>
    </head>
    <body>
        <h2>Esta página contiene una app</h2>
    </body>
</html>