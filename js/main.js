// Variables

let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;

function menus(){
    let Desplazamiento_Actual = window.pageYOffset;

    if(Desplazamiento_Actual <= 300){
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        menu.style.top = '80px';
        abrir.style.color = '#fff';
    }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '100px';
        abrir.style.color = '#000';
    }
}

function apertura(){
    if(cerrado){
        menu.style.width = '70vw';
        cerrado = false;
    }else{
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}

window.addEventListener('load', function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});
window.addEventListener('click',function(e){
    console.log(e.target);
    if(cerrado==false){
        let span = document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});
window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
    menus();
});
window.addEventListener('resize', function(){
    if(screen.width>= 700){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});
abrir.addEventListener('click', function(){
    apertura();
});
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