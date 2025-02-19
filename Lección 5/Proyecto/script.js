/*
  📌 Práctica 5. Object en JavaScript
  Crear objeto a partir de un Libro
*/


/*
• Cada libro debe ser un objeto con las siguientes propiedades:
    titulo: (string) el título del libro
    autor: (string) el autor del libro
    anio: (number) el año de publicación
    estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.

• También debe tener un método describirLibro: (method) método para imprimir la información básica del libro.
    Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'

• Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.
*/


    // Usando clases (ES6)
class Libro {

    constructor(titulo, autor, anio, estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado; // 'disponible' o 'prestado'
        this.capitulos = []
    }

    describirLibro() {
        console.log(`📖 "${this.titulo}"
🖋️ ${this.autor}
📅 ${this.anio}
🔔 Estado actual: ${this.estado}.`);
    }

    mostrarCapitulos() {
        console.log(`📚 Capítulos: ${this.capitulos.join(", ")}.`);
    }

    agregarCapitulo(capitulo) {
          this.capitulos.push(capitulo);
          console.log(`Capítulo "${capitulo}" correctamente agregado ✔️`);
    }

    eliminarCapitulo(capitulo) {
      const index = this.capitulos.indexOf(capitulo);
      if (index !== -1) {
        this.capitulos.splice(index, 1); // Eliminar capítulo del arreglo.
        // index - índice del elemento a eliminar | 1 - cantidad de elementos a eliminar.
        console.log(`Capítulo "${capitulo}" correctamente eliminado ❌`);
      } else {
        console.log(`Capítulo "${capitulo}" no encontrado para eliminar ⚠️`);
      }
    }
}


    // Creación del/los objetos a partir de la clase
let libro1 = new Libro("Harry Potter y la piedra filosofal", "J.K. Rowling", "1997", "Disponible")
libro1.describirLibro();


    // Agregar capítulo
libro1.agregarCapitulo("El niño que vivió");
libro1.agregarCapitulo("El espejo de Oesed");
libro1.agregarCapitulo("El vidrio que se desvaneció");
libro1.agregarCapitulo("Las cartas de nadie");
libro1.mostrarCapitulos();


    // Eliminar capítulo
libro1.eliminarCapitulo("El espejo de Oesed");
libro1.mostrarCapitulos();


/*
    Pruebas

let libro2 = new Libro("Canción de hielo y fuego I, juego de tronos", "George R. R. Martin", "1996", "Prestado")
libro2.describirLibro();


    // Agregar capítulo
libro2.agregarCapitulo("Prólogo");
libro2.agregarCapitulo("Bran");
libro2.agregarCapitulo("Catelyn");
libro2.agregarCapitulo("Daenerys");
libro2.mostrarCapitulos();


    // Eliminar capítulo
libro2.eliminarCapitulo("El espejo de Oesed");
libro2.eliminarCapitulo("Prólogo");
libro2.mostrarCapitulos();
*/