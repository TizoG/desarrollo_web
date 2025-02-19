// Condicional if
// Si a es igual a B entonces haz algo

let estado = false
if (estado == false) {
    console.log("Estado desactivado")
}

// if else

if (estado == true) {
    console.log("Estado activado")
} else {
    console.log("Estado desactivado")
}

// if else if

if (estado == true) {
    console.log("Estado activado")
} else if (estado == false) {
    console.log("Estado desactivado")
} else {
    console.log("Ningun estado encontradp")
}


// condicional y logica

let a = 5
if (estado == false && a == 5) {
    console.log("Estado desactivado y a es igual a 5")
} else if (estado == false || a == 5) {
    console.log("Estado desactivado o a es igual a 5")
} else {
    console.log("Ningun estado encontrado")
}

