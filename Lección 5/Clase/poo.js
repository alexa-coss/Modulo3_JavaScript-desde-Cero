// Intro a Object en JavaScript


/*
  📌 Visto en la consola
*/

    // Objeto literal

let personaObjetiLiteral = {
    nombre : "Luis",
    edad : 22,
    estatura : 1.50,
    numero_telefono : 4342432423,
    dirección : "Siempre alegre 9",
    "segundo nombre" : "Gerardo",
    esMayorEdad: true,
    listaDeDirecciones : ["Dirección1", "Dirección2"]
}

// personaObjetiLiteral.nombre → Luis
// personaObjetiLiteral.edad → 22


let personaDosObjetiLiteral = {
    nombre : "Luis",
    edad : 22,
    estatura : 1.50,
    numero_telefono : 4342432423,
    dirección : "Siempre alegre 9",
    "segundo nombre" : "Gerardo",
    esMayorEdad: true,
    listaDeDirecciones : ["Dirección1", "Dirección2"],
}

// personaDosObjetiLiteral."segundo nombre" → Error
// personaDosObjetiLiteral.segundo nombre → Error
// personaDosObjetiLiteral."segundo_nombre" → Undefined
// personaDosObjetiLiteral["segundo nombre"] → Gerardo
// personaDosObjetiLiteral["nombre"] → Luis
// personaDosObjetiLiteral{"segundo nombre"} → Luis



/*
  📌 POO

  - CLASE: Es una plantilla para crear objetos. Define atributos y métodos.
    Se define con la palabra reservada class seguido del nombre empezando con mayúscula y en singular.
  - OBJETO: Es la instancia de una clase, con sus propios valores para los atributos definidos en la clase.
  - ATRIBUTO: Son las características o propiedades de una clase.
  - METODOS: Son las funciones dentro de una clase que definen el comportamiento de los objetos.
  - CONSTRUCTOR: Es un método especial de una clase que se ejecuta automáticamente al crear un objeto.
    Sirve para inicializar los atributos de la clase.
*/


// Paso 1. Definición de una clase con sus atributos y métodos
class Persona { // Mayúscula y singular

    // Atributos dentro del constructor
    constructor(nombre, edad, nacionalidad) {
        this.nombre = nombre
        this.edad = edad
        this.nacionalidad = nacionalidad
    }

    // Métodos de la clase
    saludar(){
        console.log("Hola, mi nombre es", this.nombre, "tengo", this.edad, "años, soy", this.nacionalidad); // Si solo ponemos "nombre", ¿Qué nombre?
        // → Hola, mi nombre es Pedro tengo 23 años, soy Mexicano
    }

        // Nota: los métodos pueden tener incluídos parámetros para utilizarlos dentro de su implementación.
    despedir(nombreAmigo){
        console.log("Hasta luego", nombreAmigo);
    }
}


// Paso 2. Creación del/los objetos a partir de la clase
let persona0 = new Persona()
console.log(persona0); // → Object { } (cuando constructor()) → Persona {nombre: undefined, edad: undefined, nacionalidad: undefined}

let persona1 = new Persona("Pedro", 23, "Mexicano")
console.log(persona1); // → Persona {nombre: 'Pedro', edad: 23, nacionalidad: 'Mexicano'}


// Paso 3. 
persona1.saludar()
persona1.despedir("Fernando")



/*
  📌 Ejercicio 1: crear un objeto a aprtir de la clase persona con los datos de nombre = Lucia
  edad = 30 y nacionalidad = Canadiense
*/

// New es una palabra reservada que me ayuda a ejecutar el método CONSTRUCTOR que me ayuda a darle
// valores a los atributos de mi nuevo objeto

let persona2 = new Persona("Lucia", 30, "Canadiense")



/*
  📌 Ejercicio 2: Lucia se despide de Mario
*/
persona2.despedir("Mario")