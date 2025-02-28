/*
Ejemplo práctico de Programación Orientada a Objetos en JavaScript con manipulación del DOM

Este ejemplo amplía el sistema de gestión de productos para incluir una interfaz gráfica simple.
Los alumnos aprenderán a:
- Crear y manejar clases en JavaScript.
- Usar el DOM para agregar elementos dinámicamente.
- Capturar eventos de formularios y actualizar la interfaz.
*/

// Clase Producto
class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    // Método para mostrar información del producto
    mostrarInfo() {
        // Las comillas invertidas (``) me ayudan a implementar la sintaxis de template string
        // Este tipo de cadenas de texto me permite envever cadenas de caracteres con variables
        // Para agregar una variable a la cadena de texto usamos la sintaxis ${nombre_variable}
        return `Producto: ${this.nombre} | Categoría: ${this.categoria} | Precio: $${this.precio}`;
    }
}

// Clase ProductoConDescuento que hereda de Producto
class ProductoConDescuento extends Producto {
    constructor(nombre, precio, categoria, descuento) {
        super(nombre, precio, categoria);
        this.descuento = descuento; // Descuento en porcentaje
    }

    // Método para calcular el precio con descuento
    calcularPrecioFinal() {
        return this.precio - (this.precio * this.descuento / 100);
    }

    // Sobreescribir el método mostrarInfo para incluir el descuento
    // Podemos sobreescribir el método mostrarInfo de la clase padre para ajustar la acción del método
    // a lo que la clase hija
    mostrarInfo() {
        return `Producto: ${this.nombre} | Categoría: ${this.categoria} | Precio original: $${this.precio} | Precio con descuento (${this.descuento}%): $${this.calcularPrecioFinal()}`;
    }
}

/*
// Pruebas
let refri = new Producto("Refrigerador", 12000, "Electrónica")
console.log(refri.mostrarInfo());

let termo = new ProductoConDescuento("Termo 13oz", 700, "Cocina", 20)
console.log(termo.mostrarInfo());
*/


// Capturar el formulario del DOM
const formulario = document.getElementById("producto-form");
const listaProductos = document.getElementById("lista-productos");


// Evento para manejar la adición de productos
// .addEventListener es un método que me ayuda a "escuchar" cuando se dispara un evento en prticular
// (onClick, onSubmit, etc.).
// Este método recibe como parámetros dos valores:
// Primer atributo: nombre del evento que tiene que escuchar (click, submit, etc.).
// Segundo atributo: función que se va a ejecutar cuando se escuche el evento.
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario (que se refresque la pantalla).
    console.log(event);
    
    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value; // .value -> solo obtengo el valor (lo que está dentro del input).
    const precio = parseFloat(document.getElementById("precio").value); // parseFloat para verlo como número y por si tiene decimales.
    const categoria = document.getElementById("categoria").value;
    const descuento = parseFloat(document.getElementById("descuento").value);

    // Crear un elemento de lista y agregarlo al DOM
    const item = document.createElement("li");

    let nuevoProducto;
    if (descuento > 0) {
        nuevoProducto = new ProductoConDescuento(nombre, precio, categoria, descuento);
        // Le asigno una clase al elemento que acabo de crear con el valor de "descuento".
        item.classList.add("descuento"); // Le doy color (rojo) en CSS.
    } else {
        nuevoProducto = new Producto(nombre, precio, categoria);
    }

    
    // Despliego la información del producto en el html
    item.textContent = nuevoProducto.mostrarInfo();
    listaProductos.appendChild(item);

    // Limpiar formulario
    formulario.reset();
});