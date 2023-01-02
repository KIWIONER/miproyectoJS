//paradigma funcional
/*se centra en las funciones llamadas puras. tratan de no cambiar 
no mutables. siempre deberia de devolver la misma estructura de datos


ABSTRACCION:
poder aislar ciertos comportamientos en cuanto a las funcionalidades que vayamos creando.
ejemplo: 
*/

//funciones de orden superior
//filter

/*const nombres = ["Ana", "Ema", "Juan", "Elia"];
//Filtrar nombre que incluyen la letra "n" Encuentra ["Ana","Juan"]
const filtro = nombres.filter(elemento => elemento.length > 4)
const filtro2 = nombres.filter(elemento => elemento.includes('n'))
console.log(filtro2)*/

/*const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const nombres = cursos.map(curso => curso.nombre)
// console.log(nombres)

// Ejemplo 3

const precioConDescuento = cursos.map(curso => {
    if(cursos.categoria === 'libreria')
        return {
            nombre: curso.nombre,
            precio: curso.precio * 0.80
        }
})

console.log(precioConDescuento)*/