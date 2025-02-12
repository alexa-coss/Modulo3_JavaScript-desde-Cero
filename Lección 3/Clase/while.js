    // While

// Ejemplo 1: contador simple

let contador = 1;
    
while(contador <= 5){
    console.log("El contador está en el ciclo: ", contador);
    contador++ // <- es equivalente a contador = contador + 1, o contador += 1
}


// Ejemplo 2: contador en reversa

let cuentaRegresiva = 10;
    
while(cuentaRegresiva >= 0){
    console.log("Cuenta regresiva: ", cuentaRegresiva);
    cuentaRegresiva--
}


// Ejemplo 3: solicitar confirmación hasta que el usuario acepte

let confirmacion = true // Confirmaciones de true or false las solemos conocer también como banderas o flags.

while(confirmacion){
    // Otras tareas dentro del ciclo.
    confirmacion = confirm("(¿Quieres realizar otra operación?") // confirm devuelve true or false.
    console.log("Confirmacion recibida", confirmacion)

}