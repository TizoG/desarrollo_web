/**
 * Ejercicio 2
 * 
 * Programa que pida dos números y que nos diga cual es el mayor, el menor y si son iguales
 * PLUS: Si los números no son un numero o son menores o iguales a cero, 
 * nos lo vuelve a pedir.
 */

let inputNum = parseInt(prompt("Introduzca el primer numero: "))
let inputNum2 = parseInt(prompt("Introduzca el segundo número: "))


while (inputNum <= 0 || inputNum2 <= 0 || isNaN(inputNum) || isNaN(inputNum2)) {
    inputNum = prompt("Introduzca el primer numero: ")
    inputNum2 = prompt("Introduzca el segundo número: ")
}

if (inputNum > inputNum2) {
    alert(`El número ${inputNum} es mayor a ${inputNum2}`)
} else if (inputNum < inputNum2) {
    alert(`El número ${inputNum} es menor ${inputNum2}`)
} else {
    alert(`Los números ${inputNum} y ${inputNum2} son iguales`)
}