/*
  📌 Intro a DOM en JavaScript
*/


/*
  📌 Ejercicio 1:
    Cambiar el contenido de una página con un botón
    
    Objetivo:
    Crear una página donde el contenido de un título y un párrafo cambie cuando el usuario haga clic en un botón.

    Instrucciones:
    • Crea una página HTML con un título <h1>, un párrafo <p>, y un botón <button>.
    • El título y el párrafo deben tener un contenido inicial.
    • Cuando el usuario haga clic en el botón, el contenido del título y el párrafo debe cambiar.
        El título puede decir algo como "¡Bienvenido a mi página!" y el párrafo debe decir "Este es el contenido inicial".
    • Después de hacer clic, el título debe decir "¡Contenido actualizado!" y el párrafo debe decir "El contenido ha sido cambiado".

    Pistas:
    • Usa el método getElementById() para seleccionar el título y el párrafo.
    • Usa innerHTML para cambiar el contenido de estos elementos.
    • Usa addEventListener para manejar el evento del clic del botón.
*/


/*
  📌 Ejercicio 2:
    Mostrar u ocultar un contenido
    
    Objetivo:
    Crear una página que tenga un párrafo oculto por defecto. Al hacer clic en un botón, el párrafo debe aparecer, y al hacer clic nuevamente, el párrafo debe desaparecer.

    Instrucciones:
    • Crea una página HTML con un párrafo y un botón.
    • El párrafo debe estar inicialmente oculto (puedes usar la propiedad display: none; en CSS).
    • Cuando el usuario haga clic en el botón, el párrafo debe aparecer si está oculto, o desaparecer si ya está visible.
    • El texto del botón debe cambiar cada vez que el usuario haga clic: si el párrafo está oculto, el botón debe decir "Mostrar contenido", y si está visible, debe decir "Ocultar contenido".

    Pistas:
    • Usa getElementById() para seleccionar el párrafo y el botón.
    • Para cambiar la visibilidad del párrafo, usa style.display.
    • Cambia el texto del botón usando la propiedad textContent.
*/