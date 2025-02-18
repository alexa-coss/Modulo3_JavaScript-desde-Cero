/*
  📌 Práctica 4. Funciones en JavaScript
  Seguimiento de Libros
*/


    // • Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
let librosLeidos = [];

function agregarLibro(titulo){
    librosLeidos.push(titulo); // Agrega un libro al final del arreglo
}


    // • Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.

// Recorrer el arreglo pra imprimirlo con for
function mostrarLibrosLeidosFor(){
    if (librosLeidos.length === 0) {
        console.log("Aún no hay libros leídos.");
    } else {
        console.log("Libros leídos: ");
        for (let i = 0; i < librosLeidos.length; i++) { // Recorre el arreglo e imprime uno por uno.
            console.log(i+1 + "." + librosLeidos[i]); // En lista numéricamente los libros.
        }
    }
}

// Recorrer el arreglo pra imprimirlo con método .forEach()
function mostrarLibrosLeidos(){
    if (librosLeidos.length === 0) {
        console.log("Aún no hay libros leídos.");
    } else {
        console.log("Libros leídos: ");
        librosLeidos.forEach((libro, i) => { // .forEach() -> Recorre el arreglo en orden alfabético | libro - valor de cada elemento (título del libro) | i - índice del libro en el arreglo.
            console.log(i+1 + "." + libro); // En lista numéricamente los libros.
        })
    }
}


// Ningún libro leído.
mostrarLibrosLeidos();

// Agregar libros leídos.
agregarLibro("Harry Potter I");
agregarLibro("Eternos");
agregarLibro("Deseos");
agregarLibro("Canción de hielo y fuego I");
agregarLibro("Canción de hielo y fuego II");

// Mostrar libros leídos.
mostrarLibrosLeidos();


/*
    Pruebas

// Ningún libro leído.
mostrarLibrosLeidosFor();
mostrarLibrosLeidos();

// Agregar libros leídos.
agregarLibro("Eternos");
agregarLibro("Deseos");
agregarLibro("Canción de hielo y fuego I");
agregarLibro("Canción de hielo y fuego II");

// Mostrar libros leídos.
mostrarLibrosLeidosFor();
mostrarLibrosLeidos();
*/