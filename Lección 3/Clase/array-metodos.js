let frutas = ["Manzana"] // Creamos el arreglo
let otrasFrutas = ["Uva", "Aguacate"] // Creamos el arreglo


// Métodos comunes en arreglos


// .push(<nuevoElemento>) -> Agrega un elemnto al FINAL del arreglo
frutas.push("Pera")
frutas.push("Guayaba")
frutas.push("otrasFrutas") // -> length = 4 porque agrega todo el arreglo completo en la última posición
console.log("Después de push", frutas);
// frutas[3][0] -> [3] posición 3 de frutas (arreglo otrasFrutas) | [0] posición 0 de otrasFrutas.

// .pop() -> Elimina el último elemnto del arreglo
console.log(frutas.pop()); // Obtengo el último elemento y lo saco de la estructura
console.log("Después de pop", frutas);

// .unshift(<nuevoElemento>) -> Agregamos un elemento al INICIO del arreglo
frutas.unshift("Melón");
console.log("Después de unshift", frutas);

// .shift() -> Eliminar el primer elemento del arreglo
console.log(frutas.shift()); // 
console.log("Después de shift", frutas);


// .map() -> CREA un nueevo arreglo transformando cada elemento de mi arreglo
/*
    .map() recorre cada delemento del arreglo originaly devuelve un nuevo arreglo con los elementos transformados. El arreglo original no se modifica.
*/

// Ejemplo 1: Multiplicamos nada elemento (item) del arreglo por dos.
let numeros = [1,2,3]
let numerosPorDos = numeros.map( (numero) => numero * 2)

console.log("Numeros multiplicados por dos", numerosPorDos);

// Ejemplo 2: Convertir cada fruta en mayúsculas.
let frutasEnMayuscula = frutas.map((fruta) => fruta.toUpperCase()) //  convierte caracteres en mayúsculas.

console.log("Frutas en mayúscula", frutasEnMayuscula);

"CADENA".toLocaleLowerCase() // Convierte caracteres en minúsculas.

// let frutasEnMinuscula = frutasEnMayusculas.map((frutas) => frutasEnMayuscula.toLocaleLowerCase()) -> Me devulve error porque trato de convertir en minúsculas un arreglo
// console.log("Ejercicio 1.1", )

let frutasEnMinusculas = frutas.map((fruta) => fruta.toLocaleLowerCase())
console.log("Ejercicio 1.2", frutasEnMinusculas)


// .sort() -> Ordena los elementos del arreglo en orden alfabético
/*
    .sort() cambia el orden de los elementos del arreglo original de manra alfabética o numérica si se proporciona una FUNCIÓN de comparación.. Este método MODIFICA el arreglo ORIGINAL.
*/
let verduras = ["Espinaca", "Zanahoria", "Calabaza"]
console.log("Verduras ordenadas A-Z", verduras.sort()); // Ordena el arreglo de manera alfabética si no colocamos ningún argumento.
console.log("Verduras ordenadas Z-A", verduras.reverse()); // Revertimos los elementos del arreglo.

// .sort() con números -> IMPORTANTE que si usamos sort directamente con números, los ordenará como texto
let numerosOrdenadosIncorrectamente = [11,2,9,98,21,6,55]
console.log("Números ordenados incorrectamente", numerosOrdenadosIncorrectamente.sort());

// Para ordenar correctamente número, debemos proporcionar una FUNCIÓN de comparación
let numerosOrdenadosCorrectamente = [11,2,9,98,21,6,55]
console.log("Números ordenados correctamente", numerosOrdenadosCorrectamente.sort((num1, num2)=>num1-num2));

/*
    La función de comparación toma dos números (num1, num2)
    - Si num1 es MENOR que num2, la resta da un número NEGATIVO, entonces num1 va ANTES que num2.
    - Si num1 es MAYOR que num2, la resta da un número POSITIVO, entonces num1 va DESPUÉS que num2.
    - Si num1 es IGUAL que num2, la resta da CERO, entonces su orden no cambia.

    Nota: estas opciones se repetiran en cada iteración hasat que los números estén ordenados (todo da cero).
*/

let numerosOrdenadosMayorMenor = [11,2,9,98,21,6,55]
console.log("Números ordenados de mayor a menor", numerosOrdenadosMayorMenor.sort((num1, num2)=>num2-num1));
