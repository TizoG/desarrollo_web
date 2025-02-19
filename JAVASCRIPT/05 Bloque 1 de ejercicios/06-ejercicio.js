/**
 * Ejercicio 6
 * 
 * En mi tienda de videojuegos tenemos una oferta
 * Si compramos un juego de 50 euros o más, te hacemos un 20% de descuento.
 * Si un cliente compra el Tekken 15 que cuenta 50 euros ¿en cuanto se le queda?
*/
let juego = 50
let descuento = 20
let resultado = juego * descuento / 100
let total = juego - resultado
console.log(total)