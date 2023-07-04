botonDerecha.addEventListener("click",slides)
botonizquierda.addEventListener("click",slidesIzq)
let slider =  document.querySelector("#carrusel")
let sliderIndividual = document.querySelectorAll("#foto")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 2000;
let boton= document.querySelector(".botonizquiera");
let botonDcha= document.querySelector(".botonDerecha");
let cantidadFotos = document.getElementById("#cantidad");


setInterval(function(){slides();},intervalo)

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