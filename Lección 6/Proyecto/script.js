/*
  📌 Práctica 6. Intro al DOM en JavaScript
  Caja de Comentarios (Simple Comment Box)
*/


/*
Crear una caja de comentarios donde los usuarios puedan escribir y agregar comentarios que se muestran en la página.
Este proyecto ayudará a los estudiantes a manejar eventos de formularios y modificar el contenido de una página.

Instrucciones para resolver el problema:
•	Crea una página con un formulario que tenga un campo de texto para el comentario y un botón para agregarlo.
•	Cuando el usuario haga clic en el botón, el comentario debe aparecer en la página debajo del formulario.
•	Los estudiantes pueden agregar un botón para eliminar comentarios si lo desean.
•	Los comentarios deben aparecer junto con la fecha y hora de publicación. (opcional)
*/


// Clase Comentario
class Comentario {
  constructor(comentario) {
      this.comentario = comentario;
      this.datos = new Date(); // Almacena fecha y hora de creación.
  }

  // Método para mostrar información del comentario
  mostrarInfo() {
    // Formatear la fecha y hora en un formato legible
    const opciones = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false // Formato 24 horas.
  };
  const fechaFormateada = this.datos.toLocaleString('es-MX', opciones);
      return `${this.comentario} | ${fechaFormateada}.`;
  }
}


// Capturar el formulario del DOM y lista donde se mostrarán los comentarios
const formulario = document.getElementById("comentario-form");
const listaComentarios = document.getElementById("lista-comentarios");


// Evento para manejar la adición de comentarios
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario (que se refresque la pantalla).
    
    // Obtener valores del formulario
    const comentario = document.getElementById("comentario").value;

    // Crear un nuevo comentario
    let nuevoComentario;
    nuevoComentario = new Comentario(comentario);

    // Crear un elemento de lista y agregarlo al DOM
    const item = document.createElement("li");
    
    // Despliego la información del comentario en el html
    item.textContent = nuevoComentario.mostrarInfo();
    listaComentarios.appendChild(item);

    // Crear un botón de eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("boton-eliminar");

    // Evento para eliminar comentario
    botonEliminar.addEventListener("click", function() {
        listaComentarios.removeChild(item); // Eliminar el comentario de la lista
    });

    // Agregar botón al elemento 'li'
    item.appendChild(botonEliminar); // Agregar el botón al elemento de lista

    // Limpiar formulario
    formulario.reset();
});