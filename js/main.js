let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let Contador =1;
let width  = sliderIndividual[0].clientWidth;
let intervalo =3000;

window.addEventListener
("resize", function() 
{
let width  = sliderIndividual[0].clientWidth;
})
setInterval(function()
{
    slides();
},intervalo)

function slides()
{
    slider.style.transform = "translate("+(-width*Contador)+"px)";
    slider.style.transition = "transform .8s";
    Contador++;

    if (Contador == sliderIndividual.length)
    {
        setTimeout(function()
        {
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform .0s";
            Contador=1;
        },1500)
    }
}