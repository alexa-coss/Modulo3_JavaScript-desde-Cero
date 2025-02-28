/*
  📌 Práctica 8. Proyecto Final (dom)
  Seguimiento de Libros
*/


/*
Crear una caja de comentarios donde los usuarios puedan escribir y agregar comentarios que se muestran en la página.
Este proyecto ayudará a los estudiantes a manejar eventos de formularios y modificar el contenido de una página.

• Crea una página con un formulario que tenga un campo de texto para el comentario y un botón para agregarlo.
• Cuando el usuario haga clic en el botón, el comentario debe aparecer en la página debajo del formulario.
• Los comentarios deben aparecer junto con la fecha y hora de publicación.
• Los estudiantes pueden agregar un botón para eliminar comentarios si lo desean.
*/


// Clase Producto
class Libro {
    constructor(titulo, autor, anio, estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado;
        this.datos = new Date(); // Almacena fecha y hora de creación.
    }

    // Método para mostrar información del producto
    mostrarInfo() {
        const opciones = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false // Formato 24 horas.
        };
        const fechaFormateada = this.datos.toLocaleString('es-MX', opciones);
        return `Libro: ${this.titulo} <br> Autor: ${this.autor} <br> Año: ${this.anio} <br> Estado: ${this.estado} <br><br> <span class="fecha">${fechaFormateada}</span>`;
    }
}


// Capturar el formulario del DOM
const formulario = document.getElementById("libro-form");
const listaLibros = document.getElementById("lista-libros");


// Evento para manejar la adición de productos
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario (que se refresque la pantalla).
    console.log(event);
    
    // Obtener valores del formulario
    const titulo = document.getElementById("titulo").value; // .value -> solo obtengo el valor (lo que está dentro del input).
    const autor = document.getElementById("autor").value; // parseFloat para verlo como número y por si tiene decimales.
    const anio = document.getElementById("anio").value;
    const estado = document.getElementById("estado").value;

    // Crear un elemento de lista y agregarlo al DOM
    const item = document.createElement("li");
    let nuevoLibro = new Libro(titulo, autor, anio, estado);

    // Agregar clases según el estado
    if (estado === "Disponible") {
        item.classList.add("green");
    } else if (estado === "Prestado") {
        item.classList.add("blue");
    } else if (estado === "No hay en existencia") {
        item.classList.add("red");
    }
    
    // Desplegar la información del producto en el html
    item.innerHTML = nuevoLibro.mostrarInfo();

    // Añadir el libro (sin el botón) a la lista
    listaLibros.appendChild(item);

    // Crear un contenedor para el botón fuera del cuadrado
    const contenedorBoton = document.createElement("div");
    contenedorBoton.classList.add("contenedor-boton");

    // Crear el botón de eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("boton-eliminar");

    // Evento para eliminar el comentario
    botonEliminar.addEventListener("click", function() {
        listaLibros.removeChild(item); // Eliminar el comentario de la lista
    });

    // Agregar el botón al contenedor
    contenedorBoton.appendChild(botonEliminar);
    
    // Agregar el contenedor del botón dentro del item
    item.appendChild(contenedorBoton);
    
    // Añadir el item (comentario y botón) a la lista
    listaLibros.appendChild(item);
    
    // Limpiar formulario
    formulario.reset();
});