// local storage: la informacion persiste en el servidor

// set -> guardar
//get-> obtener

//estoy guardando informacion en el local storage
//localStorage.setItem('clave', 'valor')

//para obtener informacion del localstorage
//let mensaje = localStorage.getItem('valor')

//usamos el dato almacenado
//alert(mensaje)


//sessionStorage:  una vez cerrada la pestaña se borra la informacion
//sessionStorage.setItem('clave','valor')
//sessionStorage.setItem('seleccionados',[1,2,3]);

//let array = sessionStorage.getItem('seleccionados').split(',')
// split() separa a los elementos del array ''array'' con una coma.
//console.log(array)


//RECORRIENDO EL STORAGE

/*for(let i = 0; i < localStorage.length; i++){
    let clave = localStorage.key(i)

    console.log(i +'clave: '+ clave)
    console.log(i+ 'valor: '+ localStorage.getItem(clave))

}*/

//eliminar elementos del storage

//removeItem: elimina elementos de forma individual
//localStorage.removeItem('clave')

//clear: elimina todos los elementos del storage
//localStorage.clear()
//sessionStorage.clear()



//Almacenar objetos en el storage

const producto = { id:1, nombre:'arroz'}
const enJSON = JSON.stringify(producto);
console.log(enJSON)


//guardamos un objeto en formato jason
localStorage.setItem('producto1',producto);//[object,object]error
localStorage.setItem('producto1',enJSON);

//obtenemos un objeto en formato JSON
const producto1= JSON.parse(localStorage.getItem('producto1'))
console.log(producto1)

