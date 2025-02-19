/*
  📌 Intro a Object en JavaScript
*/


/*
  📌 Ejercicio 1:
    Crear un objeto "auto" con propiedades como marca, modelo, año, y un método mostrarInfo que imprima la información del auto.
*/


    // Sintaxis de objeto literal
const auto1 = {
    marca: "Dodge",
    modelo: "Attitude",
    año: 2017,

    mostrarInfo() {
        console.log(`Auto: ${this.marca} ${this.modelo} ${this.año}.`);
    }
}
// Imprimir
auto1.mostrarInfo()


    // Usando el constructor Object
const auto2 = new Object();
auto2.marca = "Chevrolet ";
auto2.modelo = "Cavalier";
auto2.año = 2004;

auto2.mostrarInfo = function() {
    console.log(`Auto: ${this.marca} ${this.modelo} ${this.año}.`);
}
// Imprimir
auto2.mostrarInfo()


    // Usando clases (ES6)
class auto3 {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  mostrarInfo() {
    console.log(`Auto: ${this.marca} ${this.modelo} ${this.año}.`);
  }
}
const mustang  = new auto3 ("Ford", "Mustang", 2021);
// Imprimir
mustang.mostrarInfo(); // Auto: Chevrolet Cavalier 2004.



/*
  📌 Ejercicio 2:
    Modela cualquier otro objeto del mundo real que prefieras con JS de manera similar.
*/


    // Sintaxis de objeto literal
const celularAle = {
    marca: "Apple",
    modelo: "iPhone 15 Plus",
    color: "azul",
    año: 2024,
    sistema: "iOS 17",
    resistencia: "IP68 (agua y polvo)",
    seguridad: "Face ID",

    mostrarInfo() {
        console.log(`Celular Ale: ${this.marca}, ${this.modelo}, ${this.modelo}, ${this.año}, sistema operativo ${this.sistema}, resistencia ${this.resistencia} y seguridad ${this.seguridad}.`);
    }
}
// Imprimir
celularAle.mostrarInfo();


    // Usando el constructor Object
const celularPablo = new Object();
celularPablo.marca = "Apple ";
celularPablo.modelo = "iPhone 15 Plus";
celularPablo.color = "negro";
celularPablo.año = 2024;
celularPablo.sistema = "iOS 17";
celularPablo.resistencia = "IP68 (agua y polvo)";
celularPablo.seguridad = "Face ID";

celularPablo.mostrarInfo = function() {
    console.log(`Celular Pablito: ${this.marca}, ${this.modelo}, ${this.modelo}, ${this.año}, sistema operativo ${this.sistema}, resistencia ${this.resistencia} y seguridad ${this.seguridad}.`);
}
// Imprimir
celularPablo.mostrarInfo()


    // Usando clases (ES6)
class celular {
  constructor(marca, modelo, color, año, sistema, resistencia, seguridad) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.año = año;
    this.sistema = sistema;
    this.resistencia = resistencia;
    this.seguridad = seguridad;
  }

  mostrarInfo() {
    console.log(`Celular: ${this.marca}, ${this.modelo}, ${this.modelo}, ${this.año}, sistema operativo ${this.sistema}, resistencia ${this.resistencia} y seguridad ${this.seguridad}.`);
  }
}
const iPhone  = new celular ("Apple", "iPhone 15 Plus", "amarillo", 2023, "iOS 17", "IP68 (agua y polvo)", "Face ID");
// Imprimir
iPhone.mostrarInfo();