/**
 * Ejercicio 9
 * 
 * Muestra todos los numeros divisores de un numero
 * introducido en un prompt
 */

let numero = parseInt(prompt("Introduce un numero: "))
let resultado = 0
for (let i = 0; i <= numero; i++) {
    if (numero % i == 0) {
        alert(i)
    }
}

