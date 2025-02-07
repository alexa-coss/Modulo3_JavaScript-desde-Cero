/*
    Estructura de control IF en Javascript
    - Permite ejecutar código solo si cumple una condición.
    - Puede usarse con operadores de comparación y lógicos.
*/


let edad = 18
let tieneINE = true


    // Condicional simple
// if(edad >= 18 && tieneINE == true) // Es redundante.
if(edad >= 18 && tieneINE){
    console.log("Tienes los requisitos para votar 👍")
}


    // Condicional con else
if(edad >= 18 && tieneINE){
    console.log("Tienes los requisitos para votar 👍")
}else{
    console.log("Uno o más requisitos no se cumplen, verifica tu información 😢")
}


    // Condicional con else if
if(edad < 13){
    console.log("Eres un niño")
}else if(edad < 18){
    console.log("Eres un adolescente")
}else{
    console.log("Eres un adulto")
}


let tieneEntrada = false
if(!tieneEntrada){
    console.log("Debes comprar una entrada")
}


console.log("Fin de la ejecución")