
let slider =  document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 2000;
let boton= document.querySelector(".boton");
let botonDcha= document.querySelector(".botonDcha");
setInterval(function(){slides();
},intervalo)

botonDcha.addEventListener("click",slides)
boton.addEventListener("click",slidesIzq)

function sleep(ms){

  return new Promise(resolve => setTimeout(resolve,ms))
}

function slidesIzq(){
  console.log("HOLANDA");
  clearInterval
    slider.style.transform = "translate("+(-width*contador)-"px)"
    slider.style.transition = "transform .6s"
    contador--;

  if(contador == sliderIndividual.length){
    setTimeout(function(){
        slider.style.transform = "translate(0px)"
        slider.style.transition = "transform 0s"
        contador=1;
    },15)
  }
}

function slides(){
  console.log("HOLANDA");
  clearInterval
  sleep(9000);
    slider.style.transform = "translate("+(-width*contador)+"px)"
    slider.style.transition = "transform .8s"
    contador++;

  if(contador == sliderIndividual.length){
    setTimeout(function(){
        slider.style.transform = "translate(0px)"
        slider.style.transition = "transform 0s"
        contador=0;
    },1500)
  }

}