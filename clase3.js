//Ciclos en javaScript
/*Los ciclos, tambien conocidos como bucles o iteraciones son un medio rapido y sencillo
para hacer algo repetidamente.
Si tenemos que hacer alguna operacion mas de una vez en el programa, de forma consecutiva,
usaremos las estructuras de bucles de JavaScript: for, while, do...while.

TIPOS DE BUCLES

CICLOS POR CONTEO:
Repiten un bloque de código un numero de veces especifica. Estructura for.

CICLOS CONDICIONALES:
Repiten un bloque de codigo mientras la condicion evaluada es verdadera. 
Estructuras while y do...while.


FOR
El "desde" es la zona en la que se establecen los valores iniciales de las variables que controlan el ciclo.
El "hasta" es el unico elemento que decide si se repite o se detiene de ciclo.
La "actualizacion" es el nuevo valor que se asigna despues de cada repetición a las variables que controlan 
la repeticion

for(desde, hasta,actualización) {
    ...//lo que se escriba acá se ejecutará mientras dure el ciclo
}
Ejemplo práctico:
En el siguiente ejemplo utilizamos un for para contar de 0 a 9*/
for(let i=0; i < 10; i++){
    alert (i);
}
//AHora usamos for para contar de 1 a 10
for (let i = 1; i < 10; i++){
    alert(i);
}
//Ejemplo práctico FOR(1): tablas
//Algoritmo para calcular la tabla de multiplicar de un número

//solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt('INgresar numero'));
//En cada repetición, claculamos el numero ingresado x el numero de repetición (i)
for(let i = 1; i <= 10; i++){
    let resultado = ingresarNumero * i ;
    alert (ingresarNumero +' x '+ i +' = '+ resultado);
}

//Ejemplo práctico FOR(2): Turnos
//Algoritmo para dar turno del 1 al 20 a los nombres ingresados

for (let i = 1; i <= 20; i++){
    //En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt('Ingresar nombre');
    //Informamos el turno asignado usando el numero de repetición (i).
    alert('Turno Nº'+ i +' Nombre: '+ ingeresarNombre);
}

/* SENTENCIA BREAK
Aveces, cuando escribimos una estructura for, necesitamos que bajo cierta condicion el ciclo se 
interrumpa. para eso utilizamos la sentencia break.
Al escribir esa línea dentro de un ciclo for, el mismo se interrumpirá como si hubiera finalizado*/

for (let i = 1; i <= 10; i++){
    //Si la variable i es igual 5 interrumpo for.
    if(i == 5){
        break;
    }
    alert (i);
}
/* SENTENCIA CONTINUE
A veces, cuando escribimos una estructura for, necesitamos que bajo cierta condición, el ciclo saltee
esa repetición y siga con la próxima. Para eso se utiliza la sentencia continue.*/
for (let i = 1; i <= 10; i++){
    //si la variable i es 5, no se interpreta la repetición
    if ( i ==5){
        continue;
    }
    alert(i);
}

/* WHILE
La estructura while permite crear bucles que se ejecutan cero o más veces, dependiendo de 
la condicion indicada.
El funcionamiento del bucle while se resume en : mientras se cumpla la condicion indicada, 
repite las instrucciones incluidas dentro del bucle.
Cuando usamos while, asumimos que en algun momento la repetición va a finalizar; si la comparación no 
se realiza adecuadamente podemos generar el llamado "bucle infinito":*/

let repeat = true;
while(repetir){
    console.log('Al infinito y ...!Más allá!');
}
//Ejemplo aplicado de while: ESC
//Algoritmo que solicita una entrada al usuario hasta que ingresa "ESC
let entrada = prompt('Ingresar un dato');
//Repetimos con while hasta que el usuario ingresa "ESC"
while (entrada != "ESC"){
    alert ('El usuario ingresó'+ entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt ('Ingresar otro dato');
}

/*DO...WHILE
La estructura do...while permite crear bucles que se ejecutan una o más veces, dependiendo
de la condicion indicada.
A diferencia de while, garantiza que el bloque de código se interpreta al menos una vez, porque
la condicion se evalua al final.*/

let repetir = false;
do{
    console.log('!Solo una vez!');
}while(repetir)

//Ejemplo aplicado DO...WHILE:Nº
//Algoritmo que solicita una entrada y se detiene cuando NO es un número.

let numero = 0;
do{
    //repetimos con do...while mientras el usuario ingresa un nº.
    numero = prompt('Ingresar número');
    console.log(numero);
    //si el parseo no resulta un número se interrumpe el bucle.
}while(parseInt(numero));

/*SWITCH
La estructura dwitch está especialmente diseñada para manejar de forma sencilla multiples condiciones 
sobre la misma variable (técnicamente se podría resolver con un if,
pero esl uso de switch es más ordenado).
Su definición formal puede parecer confusa, pero veamos un ejemplo para entender su simpleza.*/
switch (numero) {
    case 5:
        //...
        break;
    case 8:
        //...
        break;
    case 20:
        //...    
        break;
    default:
        //...
        break;
}
/*Cada condicion se evalua y, si se cumple, se ejecuta lo que esté indicado dentro de cada case.
Normalmente, despues de las instrucciones de cada case se incluye la sentencia break para 
terminar la ejecucion del switch, aunque no es obligatorio.
¿Qué sucede si ningun valor de la variable del switch coincide con los valores definidos en los case?
En este caso, se utiliza el valor default para indicar las instrucciones que se ejecutan 
cuando ninguna condicion anterior se cumplió */

//Ejemplo aplicado: WHILE Y SWITCH
//algoritmo que hace la operación segun la entrada, pero ignora la ejecucion de bloque 
//si la entrada es en "ESC".
let entrada = prompt('Ingresar un nombre');
//Repetimos hasta que se ingrese "ESC"
while (entrada != 'ESC'){
    switch (key) {
        case ANA:
            alert('HOLA ANA');
            break;
        case JOSE:
            alert('HOLA JOSE');   
            break;
        case PEDRO:
            alert('HOLA PEDRO');
            break;
        default:
            alert('¿QUIÉN SOS?')

            break;
    }
    entrada  = prompt ('Ingresar un nombre');
}


