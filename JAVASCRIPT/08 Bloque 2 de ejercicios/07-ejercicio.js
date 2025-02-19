/**
 * Ejercicio 7
 * 
 * Mostrar todos los numeros impares que hay entre dos 
 * numeros que nos de el usuario
 */

let num1 = parseInt((prompt("Introduce el primer numero: ")))
let num2 = parseInt(prompt(("Introduce el segundo numero:")))

while (num1 < num2) {
    num1++
    if (num1 % 2 != 0) {
        console.log(num1)
    }
}