// Intro a Object en JavaScript


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

let persona1 = new Persona("Pepe", 30)
console.log(persona1);
// console.log(persona1.obtenerMaterias()); → Me devuelve error por que la superclase NO hereda los métodos y atributos de su clase hijo.



// Paso 2. Crear una subclase
class Estudiante extends Persona{
    constructor(nombre, edad, materias){
        // Para poder heredar los atributos de la clase padre, tengo que llamar primero al super constructor.
        super(nombre, edad)
            // Herencia → this.nombre = nombre
            // Herencia → this.edad = edad
        this.materias = materias
    }

    // saludar(nombrePersona){...} → Herencia.

    obtenerMaterias(){
        return this.materias
    }
}

let estudiante1 = new Estudiante("María", 23, ["Español", "Matemáticas"])
console.log(estudiante1);

let estudiante2 = new Estudiante("Luis", 28, ["Inglés", "Letras"])
console.log(estudiante2);


class EstudianteMusica extends Estudiante{
    // Llamo al constructor de la clase padre de EstudianteMusica, que en este caso es Estudiante
    constructor(nombre, edad, materias, instrumento){
        super(nombre, edad, materias)
        this.instrumento = instrumento
    }

    // Métodos 
}

let estudianteMusica = new EstudianteMusica("Mariana", 25, ["Historia", "Piano"], "Guitarra")
console.log("Estudiante de música", estudianteMusica);
console.log("Estudiante de música", estudianteMusica.saludar("Felipe")); // Estudiante de música undefined → por que saludar() no tiene return.
estudianteMusica.saludar("Felipe");