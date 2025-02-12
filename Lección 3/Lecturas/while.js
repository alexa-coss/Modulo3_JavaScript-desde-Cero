/*
  📌 While, for y arrays
*/



/*
  📌 While
    Intenta practicar el uso de este ciclo con los siguientes ejercicios:
    • Crea un ciclo while que cuente del 10 al 1 y lo imprima en la consola.
    • Modifica el ciclo para que imprima solo los números pares.
*/

    // Imprimir del número 10 al 1.
let contador = 10;

while(contador > 0){
    console.log(contador);
    contador --;
}


    // Imprimir número pares del número 10 al 1.
contador = 10;

while(contador > 0){
    if(contador % 2 == 0){
        console.log(contador);
    }
    contador --;
}



/*
  📌 For
    Intenta practicar el uso de este ciclo con los siguientes ejercicios:
    • Contador Inverso: Crea un programa que cuente del 10 al 1 y lo imprima en la consola.
    • Suma de Pares: Modifica el ciclo para que solo sume los números pares del 1 al 20 y muestre el resultado.

*/

    // Imprimir del número 10 al 1.
for(let i = 10; i>0; i--){
    console.log(i);
}


    // Imprimir la suma de número pares del número 10 al 1.
suma = 0;

for(i = 10; i>=0; i--){
    if(i % 2 == 0){
        suma += i;
    }
}

console.log(suma); // 30



/*
  📌 Array
    1. Crear un Array: Crea un array llamado colores con al menos cuatro colores diferentes.
    let colores = ['rojo', 'verde', 'azul', 'amarillo'];
    2. Imprimir el Segundo Color: Imprime el segundo color del array.
    console.log(colores[1]); // Imprime: verde
    3. Modificar el Tercer Color: Cambia el tercer color a otro color de tu elección.
    colores[2] = 'naranja'; // Cambia 'azul' a 'naranja'
    4. Añadir un Nuevo Color: Añade un nuevo color al final del array.
    colores.push('violeta');
    5. Eliminar el Primer Color: Elimina el primer color del array y muestra el resultado.
    colores.shift();
    console.log(colores); // Muestra el array modificado
*/

    // 1. Crear Array "colores".
let colores = ['rojo', 'verde', 'azul', 'amarillo'];
console.log(colores); // ['rojo', 'verde', 'azul', 'amarillo']

    // 2. Imprimir el Segundo Color.
console.log(colores[1]); // verde

    // 3. Modificar el Tercer Color.
colores[2] = 'negro'; // ['rojo', 'verde', 'negro', 'amarillo']

    // 4. Añadir un Nuevo Color.
colores.push('violeta');
console.log(colores); // ['rojo', 'verde', 'negro', 'amarillo', 'violeta']


    // 5. Eliminar el Primer Color.
console.log(colores);
console.log(colores); // ['verde', 'negro', 'amarillo', 'violeta']