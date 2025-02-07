/*
    Diferencias entre var-let y const en Javascript
    -var: se puede registrar y redeclarar en cualquier parte del código.
    -let: se puede reasignar, pero NO se puede redeclarar en el mismo ámbito.
    -const: NO se puede reasignar ni redeclarar; es un valor constante.
*/

    // VAR
var nombre = "Jonathan" // Declaramos una variable con var
nombre = "Gilean" // Reasignamos el valor de nombre
var nombre = "Luis" // Redeclaro la variable sin problema
console.log(nombre);

    // LET
let apellido = "Villanueva" // Declarando una variable
apellido = "Corona" // Reasignamos el valor de apellido
// let apellido = "Parra" // Esto daría error porque no se puede redeclarar en el mismo ámbito

    // CONST
const gravedad = "9.81 m/s2" // Declaramos una constante con const
// gravedad = "10.1 m/s2" // Esto daría erroe porque no se pueden reasignar constantes
// const gravedad = "1.0 m/s2" // Esto daría error porque no se puede redeclarar unac constante en el mismo ámbito.
