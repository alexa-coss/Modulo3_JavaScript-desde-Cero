/*
    TIPOS DE DATOS DE JAVASCRIPT
*/

// Tipo: Number
var edad = 25
var precop = 100.50
var puntos = 0
var temperatura = -19

// Tipo: String (Texto)
var nombre = "Valery" // Con comilllas dobles
var saludo = 'Hola, ¿Cómo estás?' // Con comillas simples
var character = "a"
var edadCadena = "25"

// Tipo: Boolean
var esMayor = true // Verdadero
var tienePermiso = false // false

// Tipo: Symbol (Identificador único)
var identificador1 = Symbol("id")
var identificador2 = Symbol("id")

// Tipo: BigInt (Número muy grandes)
var numeroGrande = 347485734583490584390n // Notar la "n" al final

/*
    NULL, UNDEFINED y NaN en JavaScript
*/

// Tipo: Null (Valor vacío INTENCIONALMENTE)
var vacio = null

// Tipo: Undefined (Valor NO asignado)
var sinDefinir

// Tipo: Nan (Not a Number - Un no número, esto pasa cuando una operación no es un número)
var resultadoInvalido = "Hola" * 10


/*
    ¿Qué es console.log?
    console.log se usa para mostrar valores en la consola del navegador,
    Es útil para depurar y entender como funcionan las variables en el código.
*/

console.log(edad)
console.log(nombre)

/*
    ¿Qué es typeof?
    typeof nos permite conocer el tipo de dato de una variable,
    Es útil para depuración y validación 
*/

console.log(typeof edad)
console.log(typeof edadCadena)