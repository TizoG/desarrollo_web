/**
 * Ejercicio 1
 * 
 * Clacula cúantas horas le llevaria llegar a la luna a una nave espacial y
 * guarda el resultado en una variable.
 * 
 * La distancia desde la tierra hasta la luna es de 384.400 kilometros.
 * 
 * La velocidad de la nave es de 1225 kilometros por hora.
 */

let distancia = 384400
let velocidad = 1225
let tiempo = distancia / velocidad


console.log("El tiempo que tarda en llegar a la luna es de " + Math.ceil(tiempo) + " horas")
// Match.ceil() retorna el entero mas cercano