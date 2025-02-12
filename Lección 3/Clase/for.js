    // For

// Ejemplo 1: contador simple

for(let contador = 1; contador <= 5; contador++){
    console.log("El contador está en el ciclo: ", contador);
}


// Ejemplo 2: contador en reversa

for(let cuentaRegresiva = 10; cuentaRegresiva > 0; cuentaRegresiva--){
    console.log("Cuenta regresiva: ", cuentaRegresiva);
}


// Ejemplo 3: saltarnos los pares

for(let impar = 1; impar <= 10; impar += 2){
    console.log("Número impar: ", impar);
}


    // Solución de un compañero

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Nos ayuda a saltarnos el código después de if.
    }
    console.log(i);
}