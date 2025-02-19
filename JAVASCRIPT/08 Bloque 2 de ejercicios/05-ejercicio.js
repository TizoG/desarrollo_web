/**
 * Ejercicio 5
 * 
 * Muestra la suma y la media de los numeros introducidos
 * hasta introducir un numero negativo y ahi mostrar el resultado
 */

let numero = 0
let suma = 0
let contador = 0





while (numero >= 0) {
    alert(parseInt(prompt("Introduce un numero")))
    suma += numero
    contador++
    numero = parseInt(prompt("Introduce un numero"))
}

console.log(suma)
console.log(suma / contador)