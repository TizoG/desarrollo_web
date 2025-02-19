/**
 * Ejercicio 11
 * 
 * Calculadora:
 * -    Pida dos numeros por pantalla
 * -    Si metemos uno mal que nos lo vuelva a pedir
 * -    En una alerta y por la consola el resultado 
 * sumar, restar, multiplicar, dividir, esas dos cifras
 */


let n1
let n2

while (n1 < 0 || n2 < 0 || isNaN(n1) || isNaN(n2)) {
    n1 = parseInt(prompt("Introduce un numero"))
    n2 = parseInt(prompt("Introduce un numero"))
}

let resultado = `
suma: ${n1 + n2}
resta: ${n1 - n2}
multiplicacion: ${n1 * n2}
division: ${n1 / n2}
`


alert(resultado)
console.log(resultado)