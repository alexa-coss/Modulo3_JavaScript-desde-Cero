/*
  📌 Práctica 3. Arreglos y ciclos en JavaScript
  Clasificación de Frutas
*/


    // • Declara un arreglo llamado frutas con varios tipos de frutas.
let frutas = ['blueberry', 'mango', 'sandía', 'frambuesa', 'fresa', 'cereza', 'sandía', 'blueberry', 'frambuesa', 'zarzamora', 'limón', 'limón', 'elote', 'frambuesa', 'blueberry', 'blueberry']; // Prueba: 'blueberry', 'mango', 'fresa', 'cereza', 'sandía', 'elote', 'frambuesa', 'zarzamora', 'limón'
console.log(frutas);


    // • Crea un objeto para almacenar la cantidad de cada tipo de fruta.
let cantidadFrutas = {};


    // • Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
for(let i=0; i<frutas.length; i++){
    if (cantidadFrutas[frutas[i]]) { // True si está la fruta | false si no está la fruta.
        cantidadFrutas[frutas[i]]++;
    } else {
        cantidadFrutas[frutas[i]] = 1;
    }
}


    // • Imprime en la consola la cantidad de cada tipo de fruta.
console.log("La cantidad de cada fruta es: ", cantidadFrutas);

/*
    // • Opcional: intenta implementar la solución con el otro ciclo también (for/while).
let i = 0;
while(i<frutas.length){
    if (cantidadFrutas[frutas[i]]) { // True si está la fruta | false si no está la fruta.
        cantidadFrutas[frutas[i]]++;
    } else {
        cantidadFrutas[frutas[i]] = 1;
    }
    i++
}

    // • Imprime en la consola la cantidad de cada tipo de fruta.
console.log("La cantidad de cada fruta es: ", cantidadFrutas);
*/