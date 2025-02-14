    // Array


// Ejemplo 1: crear un arreglo simple
let frutas = ["Uva", "Manzana", "Pera", "Mango", "Fresa", "Aguacate"]
console.log("Lista de frutas: ", frutas);


// Ejemplo 2: acceder a elementos de un arreglo
console.log("Primera fruta: ", frutas[0]);
console.log("Segunda fruta: ", frutas[1]);
console.log("--------------------------------------");
console.log("Fruta en la posición 19: ", frutas[19]); // Me da como resultado indefinido porque no hay una fruta dentro de ese índice.
console.log("Fruta en la posición -1: ", frutas[-1]);// Misma situación que en caso anterior.
console.log("Última fruta: ", frutas[5]);
console.log("Última fruta: ", frutas[frutas.length - 1]); // frutas.length se refiere a al NÚMERO de elementos que se encuentran dentro del arreglo, es decir, su longitud.


// Ejemplo 3: modificar un elemento del arreglo
frutas[4] = "Guayaba"
console.log("Frutas actualizadas: ", frutas);