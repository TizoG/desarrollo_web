/**
 * Ejercici o8
 * 
 * Tenemos una coleccion de numeros desde el 1 al 17
 * y el usuario tiene que adivinar cual es el elegido.
 * 
 * Haz un programa para que pueda adivinar el numero
 */

let elegido = parseInt(prompt("Introduce un numero"))
let min = 1
let max = 17
let random = parseInt(Math.random() * (max - min) + min)

while (elegido != random) {
    if (elegido < random) {
        alert("El numero buscado es mayor")
        elegido = parseInt(prompt("Introduce un numero"))
    } else if (elegido > random) {
        alert("El numero buscado es menor")
        elegido = parseInt(prompt("Introduce un numero"))
    } else {
        alert("Numero encontrado")
    }
}

console.log(random)