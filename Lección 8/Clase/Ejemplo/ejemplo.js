const buscador = document.getElementById("buscador");
const listaFruta = document.getElementById("lista");
const frutas = listaFruta.getElementsByTagName("li");

buscador.addEventListener("input", ()=>{
  const filtro = buscador.value.toLowerCase();

  for(let fruta of frutas){

    const textoFruta = fruta.textContent.toLowerCase();
    
    if (textoFruta.includes(filtro)){
      fruta.classList.remove("hidden");
    }else{
      fruta.classList.add("hidden");}
  }});