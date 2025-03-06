/*
  📌 Práctica 7. Dominando el DOM en JavaScript
  Generador de Passwords
*/


/*
    Objetivo

El objetivo es crear un sitio que nos permita generar una contraseña segura, basado en el proyecto de frontend mentor:
 
• Apartir de la imagen propocionada maqueta y genera el formulario necesario para generar el html
• El sitio debe ser capaza de generar una contraseña diferente de mas de 8 palabras usando simbolos, letras y numéros
• Imagina las diferentes opciones que puedes implementar en tu página
*/


// Evento para generar contraseña
document.addEventListener("DOMContentLoaded", () => {
  // Capturar los elementos del DOM
  const lengthInput = document.getElementById("length"); // Slider de longitud.
  const lengthValue = document.getElementById("length-value"); // Número de caracteres.
  const strengthText = document.getElementById("strength"); // Nivel de contraseña.
  const passwordInput = document.getElementById("password"); // Campo mostrar contraseña.
  const generateButton = document.getElementById("generate"); // Botón generar contraseña.
  const copyButton = document.getElementById("copy"); // Botón copiar contraseña.

  // Capturar opciones (checkboxes)
  const checkboxes = {
      uppercase: document.getElementById("uppercase"),
      lowercase: document.getElementById("lowercase"),
      numbers: document.getElementById("numbers"),
      symbols: document.getElementById("symbols")
  };

  // Función para generar contraseña aleatoria
  function generatePassword() {
    const length = parseInt(lengthInput.value); // Longitud de contraseña
    // Inicializar variables
    let characters = ""; // Al seleccionar opciones, se va llenando con los caracteres.
    let password = ""; // Acumular contraseña generada de forma aleatoria.

    // Agregar las opciones seleccionadas
    if (checkboxes.uppercase.checked) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (checkboxes.lowercase.checked) characters += "abcdefghijklmnopqrstuvwxyz";
    if (checkboxes.numbers.checked) characters += "0123456789";
    if (checkboxes.symbols.checked) characters += "!@#$%^&*()_+[]{}|;:,.<>?";

    // Validar al menos una opción esta seleccionada
    if (characters.length === 0) {
        passwordInput.value = "Select at least one option!";
        return;
    }

    // Generar contraseña
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    // Mostrar contraseña
    passwordInput.value = password;
  }

  // Evento para copiar contraseña
  copyButton.addEventListener("click", () => {
    const password = passwordInput.value;
    if (password) {
      navigator.clipboard.writeText(password)
        .then(() => {
          alert("Password copied to clipboard!");
        })
        .catch(err => {
          alert("Failed to copy password: " + err);
        });
    }
  });

  // Función para calcular fuerza de contraseña
  function updateStrength() {
      let strength = 0;

      // Sumar un punto por cada tipo de carácter
      if (checkboxes.uppercase.checked) strength++;
      if (checkboxes.lowercase.checked) strength++;
      if (checkboxes.numbers.checked) strength++;
      if (checkboxes.symbols.checked) strength++;

      // Fuerza según longitud
      if (lengthInput.value < 10) strength--; // Longitud corta, baja fuerza.
      if (lengthInput.value >= 14) strength++; // Longitud corta, aumenta fuerza.

      // Determinar categoría de fuerza
      let strengthLabel = "WEAK";
      if (strength >= 2) strengthLabel = "MEDIUM"; // 2 < x < 4
      if (strength >= 4) strengthLabel = "STRONG"; // 4 < x

      // Cambiar nivel de "Strength"
      strengthText.textContent = strengthLabel;
  }

  // Evento para cambiar número de caracteres al mover el slider
  lengthInput.addEventListener("input", () => {
    lengthValue.textContent = lengthInput.value; // Actualizar valor
    updateStrength(); // Actualizar fuerza
  });

  // Evento para actualizar fuerza cuando se cambian opciones
  Object.values(checkboxes).forEach(checkbox => {
      checkbox.addEventListener("change", updateStrength);
  });

  // Evento para generar contraseña cuando se presiona el botón
    generateButton.addEventListener("click", generatePassword);

  // Actualizar fuerza inicial
  updateStrength();
});