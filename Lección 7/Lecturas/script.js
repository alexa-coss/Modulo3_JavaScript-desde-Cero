/*
  📌 Dominando el DOM en JavaScript
*/


/*
  📌 Ejercicio 1:
    Acceso y modificación de Contenido del DOM
    
    Utiliza las propiedades para lograr los siguientes objetivos en el DOM:
    • Cambiar el texto de un párrafo oculto.
    • Mostrar solo el contenido visible de un contenedor.
    • Reemplazar una etiqueta <div> con un mensaje personalizado.

*/

  // Cambiar texto de párrafo oculto
  const hiddenElement = document.querySelector(".hidden");
  hiddenElement.textContent = "Texto revelado";

  // Mostrar texto visible
  const container = document.querySelector(".container");
  console.log(container.innerText);

  // Reemplazar etiqueta completa
  const replaceElement = document.querySelector(".replace");
  replaceElement.outerText = "Etiqueta reemplazada";


/*
  📌 Ejercicio 2:
    Mostrar u ocultar un contenido
    
    Objetivo:
*/