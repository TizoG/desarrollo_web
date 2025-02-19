/**
 * Ejercicio 13
 * 
 * Tenemos que despegar con un cohete al espacio y 
 * necesitamos una cuenta regresiva de 10
 * Hazlo con el bucle for
 */

let cuentaAtras = 10
for (let i = cuentaAtras; i >= 0; i--) {
    if (i == 0) {
        console.log("Despegue")
    } else {

        console.log("Quedan " + i + " segundos")
    }

}