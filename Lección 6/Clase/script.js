// Intro a DOM en JavaScript


/*
  📌 Herencia
*/


// Paso 1. Creación de la clase principal (clase padre, super padre). 
class Persona {
    constructor(nombre, edad){
        // En el constructor inicializamos atributos de la clase.
        this.nombre = nombre
        this.edad = edad
    }
    
    // Métodos de la clase
    saludar(nombrePersona){
        console.log("Hola", nombrePersona);
    }
}