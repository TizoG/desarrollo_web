/**
 * Ejercicio 6
 * 
 * Escribe un programa que muestre la tabla de multipicar del 
 * numero que te diga el usuario
 */

let numero = parseInt(prompt("Introduce un numero: ", 1))

let resultado = "Tabla del " + numero + " "
for (let i = 1; i <= 10; i++) {
    let multiplicacion = i * numero
    resultado += i + " x " + numero + " = " + multiplicacion
}

console.log(resultado)
alert(resultado)