/*
    TIPOS DE DATOS DE JAVASCRIPT
*/


    // Actividad
console.log(typeof 42); // Number
console.log(typeof 'Veinticinco'); // String
console.log(typeof -666); // Number
console.log(typeof true); // Boolean
console.log(typeof 0); // Number
console.log(typeof ''); // String
console.log(typeof null); // Object
console.log(typeof undefined); // Undefined
console.log(typeof FALSE); // Undefined (Debe ser con minúsculas)


    // Ejemplos extra

// Variables

// Tipo: Number
var edad = 7
var temperatura = -2

// Tipo: String (Texto)
var nombre = "Lily"
var sobrenombre = 'Bebé'
var edadCadena = "25"

// Tipo: Boolean
var esPequeña = true // Verdadero
var esHumana = false // false

// Tipo: Symbol (Identificador único)
var identificadorKatherine = Symbol("kc")

// Tipo: BigInt (Número muy grande)
var numeroGrande = 2109199920101996172021

// Tipo: Null (Valor vacío INTENCIONALMENTE)
var Ausencia = null

// Tipo: Undefined (Valor NO asignado)
var PorDefinir

// Tipo: Nan (Not a Number - Un no número, esto pasa cuando una operación no es un número)
var resultadoInvalido = "Azul" * 100

// Mostrar tipo de dato

// Number
console.log(typeof edad);
console.log(typeof temperatura);
// String
console.log(typeof nombre);
console.log(typeof sobrenombre);
console.log(typeof edadCadena);
// Boolean
console.log(typeof esPequeña);
console.log(typeof esHumana);
// Symbol
console.log(typeof identificadorKatherine);
// BigInt
console.log(typeof numeroGrande); // Number
// Null
console.log(typeof Ausencia); // Object
// Undefined
console.log(typeof PorDefinir);
// Nan
console.log(typeof resultadoInvalido); // Number

console.log(typeof Lily); // Undefined