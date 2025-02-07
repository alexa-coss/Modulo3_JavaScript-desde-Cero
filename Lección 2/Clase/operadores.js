/*
    Operadores de Javascript

    Tipos:
    -Matemáticos: para realizar cálculos.
*/

    // Operadores matemáticos

let suma = 5 + 3
let resta = 6 - 2
let multiplicacion = 4 * 7
let division = 6 / 2
let modulo = 10 % 3
let exponente = 2 ** 3

console.log(suma, resta, multiplicacion, division, modulo, exponente)

/*
    Jerarquía de operadores matemáticos
    1. Paréntesiss ()
    2. Exponentes **
    3. Multiplicación y División /
    4. Suma + y Resta -
*/

// Ejemplos de jerarquía
let operacion1 = 10 + 5 * 2 // 10 + (5 * 2) = 20
let operacion2 = (10 + 5) * 2 // 15 * 2 = 30

console.log(operacion1, operacion2)

    // Operadores de comparación
let mayor = 10 > 5 // Mayor que
let menor = 3 < 8 // Menor que
let igual = 5 == "5" // Comparación de VALOR (true)
let estrictamenteIgual = 5 === "5" // Comparación estricta de VALOR y TIPO DE DATO (False)
let diferente = 5 != "5" // Diferente (True) 
let estrictamenteDiferente = 5 !== "5" // Estrictamente diferente (Ture)

console.log(mayor, menor, igual, estrictamenteIgual, diferente, estrictamenteDiferente)


    // Operadores lógicos
let and = (10 > 5) && (3 > 8) // AND (False)
let or = (10 > 5) || (3 > 8) // OR (True)
let or2 = false || (3 > 8) // 0R (False)
let not = !(10 > 5) // NOT (False)

console.log(and, or, or2, NodeList)

/*
    Jerarquía de operadores lógicos
    1. NOT (!) -> se evalúa primero
    2. AND (&&) -> se evalúa segundo
    3. OR (||) -> se evalúa al final

    Nota: siempre se evalúa lo que haya entre parentesiss primero.
*/

// Ejemplo de jerarquía de operadores lógicos
var logico1 = true || false && false // Primero evalúo AND = true || false = true
var logico2 = (true || false) && false // (true) && false = false


/*
    Operadores para probar en la consola
*/

    // Operadores básicos
let numero = 10 // Asignación
numero = numero + 3; // Asignación y matemático
numero += 3 // Combinados
numero -= 3
numero *= 3
numero - 3 // Solo quiero ver cuanto el resultado de esa operación, no asignarlo.


    // Operadores de comparación
var cinco = 5
var cincoCadena = "5"
cinco == cincoCadena // True
4 + cincoCadena // "45"
cincoCadena * 4 // 20
cinco === cincoCadena // False
