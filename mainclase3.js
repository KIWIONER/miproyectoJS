//CICLOS en javascript
// son un medio rapido para hacer algo rapidamente.

//tipos de bucles
/*ciclos por conteo(for) 
estructura FOR*/
/*for (/desde; hasta; actualizacion)
//tenemos que decirle cuantas veces se va a repetir, todo lo que está dentro de las llaves se repetira
//las veces que le diga.
desde->zona en la que se establecen los valores iniciales de las variables que controlan el ciclo.
hasta-> unico elemento que decide si se repite
*/
//ejemplo que utilizamos un for para contar de 0 a 9.
/*for (let i = 0; i < 10; i++){
    alert(i);
}
// ahora usamos for para contar  de 1 a 10.

for (let i = 1; i <= 10; i++){
    alert(i);

}*/
/*for (let i=0; i<5;i++){
    alert(i)
    //el incremento de i se hace siempre al final
}*/
/*for (let i=10; i>0;i--){
    alert(i)
}*/
/*//incrementa de dos en dos
for (let i=0; i<10; i+=2){
    alert(i)
}*/
//simular una tabla de multiplicar
/*let numeroIngresado = parseInt(prompt('Ingrese un numero: '))

for(let i=1; i<= 10; i++){
    let resultado = numeroIngresado * i
    alert(numeroIngresado+'  x  '+i+' =  '+resultado)
}*/
/*let nombreIngresado = ''
// reserva de turnos
for (let i=1; i <= 5; i++){
    nombreIngresado = prompt('Ingrese su nombre: ')
    alert('Turno N.-'+i+' Nombre: '+ nombreIngresado)

}*/
// sentencia break
/*for (let i=1; i<= 10; i++){
    if(i == 5){
        break
    }
    alert(i)

}*/
/*//sentencia continue: 
for (let i=1; i<= 10; i++){
    if(i == 5){
        continue
    }
    alert(i)
}*/

/*//ciclos condicionales(while y do...while)
while-> estructura, ciclo, que deja repetir instrucciones pero mientras que se cumpla una condicion
*///esto valdría para pedir una contraseña
/*let entrada = prompt('ingrese un dato:')

while (entrada != 'ESC'){
        alert('El usuario ingresó: '+entrada)
        entrada = prompt('ingrese un dato:')

    }
alert('el ciclo se termino')*/

//do while-> permite ejecutar  por lo menos una accion una o más veces

//confirmar el correo electrónico

/*let userEmail =''
let confirmUserEmail = ''
let askAgain = true;
do {
    userEmail = prompt('Ingrese su correo: ')
    confirmUserEmail = prompt('confirme su correo: ')

    if(userEmail === conrfirmUserEmail){
        alert('El correo '+userEmail+'ha sido guardado con éxito')
        askAgain = false
    }else{
        alert('los correos deben ser iguales!')
    }
} while (Askagain) o (userEmail != conrfirmUserEmail);*/

//SWITCH: ayuda a evaluar varias condiciones sobre una misma variable.

/*let nombre = prompt('Ingrese un nombre:').toUpperCase();

while(nombre !='ESC'){
    switch (nombre) {
        case 'ANA':
            alert('Hola Ana!')
            break;
            case 'JUAN':
            alert('Hola Juan!')
            break;
            case 'JOSE':
            alert('Hola Jose!')
            break;
        default:
            alert('¿Quién eres?')
            break;
    }
    nombre = prompt('Ingrese un nombre:').toUpperCase();
}*/



