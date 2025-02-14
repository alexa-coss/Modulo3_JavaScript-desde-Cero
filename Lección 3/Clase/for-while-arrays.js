// Combinando while y for con arreglos


// Ejemplo 1: recorrer un arreglo con while
let frutas = ["Manzana", "Uva", "Fresa", "Cereza", "Pera"]
let index = 0

while(index < frutas.length){
    console.log("(While) Fruta ", index, ":", frutas[index]);
    index++
}


// Ejemplo 2: recorrer un arreglo con for

for(let index = 0; index <= frutas.length - 1; index++){
    console.log("(For) Fruta ", index, ":", frutas[index]);
}