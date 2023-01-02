
/*let color = 'verde'
    if (color == prompt('ingrese color')){
        alert('el color es correcto');
    }else{
        alert('este color no es el correcto')
    }


let nombre = 'pedro';

    if (nombre == prompt('ingrese nombre')){
        alert('el nombre es correcto');
            
    }else {
        alert('el nombre NO es correcto')
    }

let numero = 30;

    if (numero == parseInt(prompt('ingrese su edad'))){
        alert('La edad es correcta');
    }else{
        alert('La edad NO es correcta');
    }


let numero1 = 10;
let numero2 = 100;
const resultado = numero1 + numero2;

    if (resultado == parseInt(prompt('¿cuanto es 100 + 10?'))){
        alert('el resultado es correcto')
    }else{
        alert ('el resultado NO es correcto')
    }


//este condicional sirve para buscar numeros mayores que 10 
let numero3 = 10;

    if(numero3 < parseInt(prompt('ingresa un numero mayor que 10'))){
        alert('el numero esta dentro del rango')
    } else{
        alert('el numero está fuera de rango')
    }*/


    //pedir nombre y apellidos, pedir correo, pedir contraseña y confirmar contraseña

/*let nombre1 = 'matias';
let apellido = 'idiart';

if ((nombre1 == prompt('ingrese su nombre')) && (apellido == prompt('ingrese apellido'))){
        let email = prompt('ingrese el correo electronico')
        let password = prompt('ingrese contraseña')
        let confirmarPassword = prompt('confirme la contraseña')
            if(password === confirmarPassword ){
                confirm ('¿Este es cu correo?: '+ email)
                alert('ha ingresado: '+'\nNombre: '+nombre1+'\nApellido: '+apellido+'\nCorerectamente')
            }else{
                alert('La contraseña no es correcta')
            }
}else{
        alert('necesita ingresar el mismo nombre')
    }*/
    

//FOR ejemplos:
//contamos de de 0 a 9 
/*for ( let i=0; i < 10; i++){
    alert (i);
}
//contamos de 1 a 10
for ( let i= 1; i < 10; i++){
    alert (i);
}*/

// calcular tabla de multiplicar
/*let ingresarUnNumero = parseInt(prompt('ingresar un numero'))

    for (let i=0; i <10; i++){
        let resultado = ingresarUnNumero * i ;
        alert (ingresarUnNumero+' x '+i+'  = '+ resultado);
    }*/

// algoritmo para dar turno del 1 al 20 a los nombres ingresados (TURNOS)

/*for (let i=1; i <= 20; i++){
    let ingresarNombre = prompt('Ingrese un nombre');
    if (i == 3){break}
    alert ('El turno nº: '+i+' ha sido añadido para: '+ingresarNombre)
}*/

//WHILE
//permite crear bucles que se ejecutan cero o más veces.

/*let repeat = true;
let nombre = prompt('ingresa un nombre')
while (nombre != 'ESC'){
    alert ('Has ingresado '+ nombre);
    nombre = prompt('ingresa otro nombre')
}*/

//do...while: permite crear bucles que se ejecutan una o mas veces,  dependiendo de la condicion indicada.
/*let numero = 0;
do{
    numero = prompt('ingrese un numero');
    console.log(numero);
}while(parseInt(numero));*/

// SWITCH
/* maneja de forma sencilla multiples condiciones sobre la misma variable.*/
/*switch (numero) {
    case 5:
        
        break;
    case 8:
        
        break;
    case 20:
        
        break;
    default:

        break;
}*/

/*ejemplo aplicado con : while y switch*/

//et nombre = prompt('Ingresa un nombre');
// repetimos hasta que se ingrese 'ESC'
/*do {
        switch (nombre) {
            case 'ANA':
                alert ('HOLA ANA');
                break;
            case 'JOSE':
                alert ('HOA JOSE');
                break;
            case 'PEDRO':
                alert ('HOLA PEDRO');
                break;
            default:
                alert('¿Quien eres?')
                break;
            }   
        nombre = prompt('Ingresa un nombre');
    }while (nombre != 'ESC')*/


/*const productos =[
        {
            id: 1,
            nombre: 'sudadera',
            tipo: 'sudadera',
            descripcion: 'sudadera kiwi con paisaje',
            precio: 69.99,
            talla: 'M',
            cantidad: 0
        },
        {
            id: 2,
            nombre: 'chaqueta',
            tipo: 'chaqueta',
            descripcion: 'sudadera kiwi con animales',
            precio: 69.99,
            talla: 'L',
            cantidad: 0
        },
        {
            id: 3,
            nombre: 'camiseta',
            tipo: 'camiseta',
            descripcion: 'sudadera kiwi con graffitty',
            precio: 24.99,
            talla: 'M',
            cantidad: 0
        },  
        {
            id: 4,
            nombre: 'zapatillas',
            tipo: 'zapatilas',
            descripcion: 'zapatillas kiwi color verde',
            precio: 54.99,
            talla: '39.5',
            cantidad: 0
        },  
    ]*/
const productos = [ 
        { id:1, nombre: 'fideos', precio: 200},
        { id:2, nombre: 'arroz',precio: 300},
        { id:3, nombre: 'pan',precio: 400},
        { id:4, nombre: 'leche',precio: 500} 
    ]

    let comprar = prompt('¿que quieres comprar?:\n fideos\n arroz\n pan\n leche')
    do{

    switch (productos) {
        case productos.findIndex: 
        alert (productos.precio) 
        break;

        default:
            break;
    }
}while(productos)
productos()


