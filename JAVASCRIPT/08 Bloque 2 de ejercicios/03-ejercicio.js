/**
 * Tengo un canguro que salta 3 metros cada vez.
 * Haz un programa que me diga cuantos saltos ha dado el canguro...
 * y cual es la distancia total recorida tras 17 saltos
 */

let distanciaSalto = 3
let saltos = 17
let distanciaRecorrida = 0
for (let contador = 0; contador <= saltos; contador++) {
    distanciaRecorrida += distanciaSalto
    console.log(`El canguro a saltado ${contador} saltos y a recorrido ${distanciaRecorrida} metros`)
}