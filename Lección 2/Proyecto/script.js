/*
  📌 Práctica 2. Comparaciones y decisiones en JavaScript
  Evaluador de Notas con Mensajes Personalizados
*/


let nota = 92; //Valores a probar: -5, 0, 18, 70, 75, 100, 106
console.log(nota);


if(nota < 0){
    console.log("Error ⚠. La nota es menor a cero.");
}else if(nota >= 0 && nota < 60){
    console.log("Insuficiente ❌ No aprueba.");
}else if(nota >= 60 && nota < 75){
    console.log("Suficiente ❗");
}else if(nota >= 75 && nota < 90){
    console.log("Bien ❕");
}else if(nota >= 90 && nota <= 100){
    console.log("Excelente ✔");
}else{
    console.log("Error ⚠. La nota excede el puntaje de 100.");
}
