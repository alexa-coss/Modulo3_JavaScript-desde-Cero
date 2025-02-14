/*
  📌 Funciones en JavaScript
*/


/*
  📌 Ejercicio 1: Calculadora Simple
    Crea una calculadora simple que permita realizar operaciones matemáticas básicas: suma, resta, multiplicación y división.
Requisitos:
    • Define cuatro funciones: sumar, restar, multiplicar, y dividir, cada una de las cuales toma dos parámetros y devuelve el resultado de la operación correspondiente.
    • En el programa principal, llama a cada función con diferentes pares de números y muestra el resultado en la consola.
*/

function sumar(a, b) {

    return a + b;

}

function restar(a, b) {

    return a - b;

}

function multiplicar(a, b) {

    return a * b;

}

function dividir(a, b) {

    if (b === 0) {

        return "Error: División por cero";

    }

    return a / b;

}

// Llamadas a las funciones

console.log("Suma: " + sumar(5, 3));

console.log("Resta: " + restar(5, 3));

console.log("Multiplicación: " + multiplicar(5, 3));

console.log("División: " + dividir(5, 0));



/*
  📌 Ejercicio 2: Conversor de Temperaturas
    Crea una función que convierta temperaturas entre grados Celsius y Fahrenheit.
Requisitos:
    • Define dos funciones: celsiusAFahrenheit y fahrenheitACelsius.
    • celsiusAFahrenheit debe tomar una temperatura en Celsius y devolver la temperatura equivalente en Fahrenheit.
    • fahrenheitACelsius debe tomar una temperatura en Fahrenheit y devolver la temperatura equivalente en Celsius.
    • En el programa principal, llama a ambas funciones con ejemplos de temperaturas y muestra los resultados en la consola.
*/

function celsiusAFahrenheit(celsius) {

    return (celsius * 9/5) + 32;

}

function fahrenheitACelsius(fahrenheit) {

    return (fahrenheit - 32) * 5/9;

}

// Llamadas a las funciones

console.log("20°C en Fahrenheit es: " + celsiusAFahrenheit(20));

console.log("68°F en Celsius es: " + fahrenheitACelsius(68));