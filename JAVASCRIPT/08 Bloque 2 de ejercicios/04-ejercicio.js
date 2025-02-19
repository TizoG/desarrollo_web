/**
 * Ejercicio 4
 * 
 * Un DJ no sabe que genero de musica poner en la fiesta
 * Preguntale al usuario que genero quiere ( pop, rock, o rap)
 * Segun lo que prefiera devuelve un mensaje diferente
 */


let input = prompt(("Introduce el tipo de musica que quieres escuchar (pop, rock o rap")).toLowerCase()
switch (input) {
    case "pop":
        alert("Estamos escuchando algo de Pop")
        break
    case "rock":
        alert("Para los amantes del Rock...")
        break
    case "rap":
        alert("Rap, rap, rapeando")
        break
    default:
        alert("Introduce un estilo de musica valido")
        break
}