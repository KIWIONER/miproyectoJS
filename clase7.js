// CLASE 7
//ABSTRACCIONES
/*Para meternos de lleno en el tema de hoy, antes necesitamos mirar un poco atrás.
Empecemos por analizar el siguiente código.
Se declara una variable que, a través de un iterador, va acumulando la suma del contador.

let total = 0 
for (let i = 1; i <= 10; i++){
    total += i
}
console.log (total) //55

//Ahora lo presentamos resumido en una funcion, y ocupa solo una linea de código.
console.log (sumarRango (1,10) ) //55

El segundo caso es lo que denominamos una abstraccion.
resumimos un grupo complejo de instrucciones bajo una palabra clave (funcion) que sugiere cual es el problema
a resolver por la misma.

Las abstracciones ocultan detalles sobre la operacion a resolver y nos permite 'hablar'
sobre los problemas en un nivel mas alto ( o mayor grado de asbtraccion)

El segundo ejemplo es mas corto y facil de interpretar, pero hay que tener mas
claro ciertos conceptos para poder aplicarlo afectivamente (funciones, parámetros,
return, etc.) y trabajar en un nivel de asbtraccion superior, lo cual nos ahorra tiempo 
de desarrollo y claridad de escritura.

si no entendemos como puede funcionar una funcion de este tipo, es comun que desconfiemos
de su versatilidad y caigamos en la declaracion paso a paso de la solucion, como en el primero ejemplo.

Como desarrolladores constantemente estamos creando funciones y abstracciones para pensar
en un nivel superior y poder construir soluciones complejas a los problemas que se nos presentan.

En javaScript hay muchos metodos nativos incorporados que, como abstracciones, nos ofrecen
soluciones a problemas recurrentes; sumando a la posibilidad de que nosotros podemos declarar
las nuestras.



// FUNCIONES DE ORDEN SUPERIOR
Es aquella que bien retorna una funcion, o recibe una funcion por parametro.
Este tipo de funciones nos permiten abstraernos sobre acciones y no solo valores. en 
esta clase, nos concentraremos mas en la segunda acepción.


//RETORNAR FUNCIONES
En el primer caso, podemos tener una funcion que retorna una funcion, los cual
nos permitirá crear funciones con un esquema superior.

function mayorQue(n) {
    return (m) => m > n
}
let mayorQueDiez = mayorQue (10)

console.log ( mayorQueDiez (12) ) //true
console.log ( mayorQueDiez (8)) // false

En este caso, mayorQue(n) retorna una funcion que compara un valoe contra n y retorna 
true o false (porque es el resultado de la comparación)

En mayorQueDiez se termina asignando la funcion que retorna el llamado de mayorQue(10)
. Al ser llamada con el valor de 10, la asignacion se resuleve de la siguiente forma:
let mayorQueDiez = (m) => m > 10

function asignarOperacion (op){
    if (op == 'sumar'){
        return (a, b) => a + b
    }else if (op == 'restart'){
        return (a, b) => a-b
    }
}
let suma = asignarOperacion ('sumar')
let resta = asignarOperacion ('restar')

console.log (suma(4, 6) ) // 10
console.log (resta(5, 3) ) // 2

En este ejemplo, segun el parametro op se termina asignando un return de funcion u otro 
a las variables declaradas.*/


//RECIBIR FUNCIONES POR PARAMETRO

/*Significa escribir funciones que puedan recibir funciones por parámetro.
Empecemos con un ejemplo

function porCadaUno (arr, fn) {
    for (const el of arr){
        fn(el)
    }
}

Supongamos que quiero correr un array y hacer algo con cada uno de sus elementos.
Esta funcion recibe un array por primer parámetro y una funcion por el segundo.
Recorre el array y , por cada elemento, hace un llamado a la funcion mencionada
enviando dicho elemento por parámetro.

const numero = [1, 2, 3, 4]

porCadaUno (numeros, console.log)
//1 
//2
//3
//4

//CONSOLE.LOG
Enviando console.log por parametero, se ejecuta esa funcion con cada elemento del array.
Podemos enviar funciones diferentes en distintos llamados y ejecutar distintas acciones sobre los
elementos del array, todo como una funcion:

let total = 0 

function acumular (num) {
    total +=num
}

porCadaUno (numeros, acumular)
console.log (total) // 10

//ARROW FUNCTION

Es usual definir la funcion directamente sobre el parametro como una funcion anonima, aprovechando
la sintaxis de arrow function.
Esto permite definir acciones más dinamicas

const duplicado = []

porCadaUno (numeros, (el) => {
    duplicado.push (el * 2)
})
console.log (duplicado) // [2, 4, 6, 8]

//METODOS DE BUSQUEDA Y TRANSFORMACION
PARA RECORDAR
JavaScript incorpora nativamente varias funciones de orden superior. Existen metodos para operar sobre
arrays que trabajan con esta logica.
Los siguietes, funcionan siempre iterando sobre el array correspondiente. Reciben una funcion
por parametro, la cual recibe a la vez el elemento del array que se está iterando.

1- forEach() // 2-find() // 3-filter() // 4-some() // 5-map() // 6-reduce() // 7-sort()

Cada uno de estos metodos estan pensados para solucionar problemas recurrentes con los arrays.

1-FOR EACH
el metodo forEach() es similar al ejemplo porCadaUno anterio. Itera sobre el array y por cada elemento
ejecuta la funcion que enviemos por parametro, la cual recibe a su vez el elemento del array
que se está recorriendo

const numero = [1, 2, 3, 4, 5, 6]

numeros.forEach ((num)=>{
    console.log (num)
})

2-FIND
El metodo find() recibe una funcion de comparacion por parametro.
Captura el elemento que se está recorriendo y retorna true o false segun la comparacion ejecutada.
el metodo retorna el primer elemento que cumpla con esa condicion.

const cursos = [
    {nombre: 'JavaScript, precio: 15000},
    {nombre: 'ReactJS, precio: 22000},
]

const resultado = cursos.find ( (el) => el.nombre === 'ReactJS ) 
const resultado2 = cursos.find ( (el) => el.nombre === 'DW' )

console.log(resultado) // {nombre: 'reactJS', precio: 22000}
console.log(resultado2) // undefined

Notese que el find() retorna el primer elemento del array que cumpla con la condicion enviada,
de ahí que podemos almacenarlo en una variable o usarlo de referencia para otro proceso. Si no
hay ninguna condicion en el array, el metodo find retorna undefined.

3-FILTER
El metodo filter() recibe, al igual que find(), una funcion comparadora por parametro, y retorna
un nuevo array con todos los elementos que cumplan esa condicion. Si no hay coincidencias,
retornará un array vacío.

const cursos = [
    {nombres: 'JavaScript', precio: 15000}
    {nombres: 'ReactJS', precio: 22000}
    {nombres: 'AngularJS', precio: 22000}
    {nombres: 'Desarrollo Web', precio: 16000}
]

const resultado = cursos.filter ((el) => el.nombre.includes('JS'))
const resultado = cursos.filter ((el) => el precio < 14000)

console.log(resultados)
/* [
    {nombre: 'ReactJS', precio:22000},
    {nombre: 'Angular', precio:22000}
] */
//console.log(resultado2) // []
/*

4-SOME

El metodo some() funciona igual que find(), recibiendo una funcion de busqueda. En vez de retornar
el elemento encontrado, some() retorna true o false segun el resultado de la iteración de búsqueda.

console.log (cursos.some ((el) => el.nombre == 'Desarrollo web'))
true

console.log (cursos.some((el) => el.nombre == 'Vue.JS))
false

5-MAP
El metodo map() crea un nuevo array con todos los elementos del original transformados segun 
las operaciones de la funcion enviada por parámetro. Tiene la misma cantidad de elementos pero 
los almacenados son el return de la funcion

const cursos = [
    {nombres: 'JavaScript', precio: 15000}
    {nombres: 'ReactJS', precio: 22000}
    {nombres: 'AngularJS', precio: 22000}
    {nombres: 'Desarrollo Web', precio: 16000}    
]

const nombres = cursos.map((el) => el.nombre)
console.log (nombres)

// [ 'JavaScript', 'ReactJS', 'AngularJS', 'Desarrollo web' ]

En el ejemplo, la funcion reotrna la propiedad nombre de cada elemento y eso es lo que se almacena
en el nuevo array nombres. Map() se utiliza mucho para transformaciones de array.
Si quisiera aumentar el precio de todos los cursos en este ejemplo, puedo mapear y retornar una
copia de los elementos con el precio modificado:

const actualizado = cursos.map ((el) =>{
    return{
        nombre: el.nombre,
        precio: el.precio * 1.25
    }
})

console.log (actualizado)
    [
    {nombres: 'JavaScript', precio: 15000}
    {nombres: 'ReactJS', precio: 22000}
    {nombres: 'AngularJS', precio: 22000}
    {nombres: 'Desarrollo Web', precio: 16000} 
    ]

6- REDUCE
El metodo reduce() nos permite obtener un unico valor tras iterar sobre el array. Funciona 
como un metodo que resume el array a un unico valor de retorno.

Ejemplos de aplicación:
- Cuando queremos acumular la suma de alguna propiedad de los elementos.
- O cuando deseamos obtener algun resultado general sobre todo el array.

A diferencia de los metodos anteriores, el metodo reduce recibe dos parámetros:

- El primero es la funcion que ordena qué queremos resumir del array. Recibe un parámetro
que funciona como acumulador, y el elemento del array que iteramos.
- El segundo es el valor inicial del acumulador.

const numeros = [1, 2, 3, 4, 5, 6]
const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(total) //21

En este ejemplo, en el acumulador sumamos cada elemento del array y al terminar la iteracion 
nos devuelve ese resultado. El segundo parametro del reduce, que aqui se ve como 0, es el 
valor inicial del acumulador.

Con este caso podría, pensando por ejemplo en un simulacro de compra, sumar el precio de 
todos los productos elegidos:

const numeros = [1, 2, 3, 4, 5, 6]
const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(total) //21

7- SORT
El elemento sort() nos permite reordenar un array segun un criterio que definamos.
