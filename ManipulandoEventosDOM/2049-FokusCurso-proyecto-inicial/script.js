
//  cambiar de fondo al hacer click sobre los botones
// de enfoque, descanso corto y descanso largo 
const html = document.querySelector('html');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector(".app__title");
const botones = document.querySelectorAll('.app__card-button')
const inputEnfoqueMusica = document.querySelector('#alternar-musica')
const botonIniciarPausar = document.querySelector('#start-pause')
const textoIniciarPausar = document.querySelector('#start-pause span')
const iconoIniciarPausar = document.querySelector('app__card-primary-butto-icon')

const musica = new Audio('./sonidos/luna-rise-part-one.mp3');
const musicaplay = new Audio('./sonidos/play.wav');
const musicaPausa = new Audio('./sonidos/pause.mp3')
const musicaTiempoFinalizado = new Audio('./sonidos/beep.mp3')
const tiempoenPantalla = document.querySelector('#timer')


let tiempoTransEnSegundos = 1500;
let idIntervalo = null;

musica.loop = true;


inputEnfoqueMusica.addEventListener('change',()=>{
    if(musica.paused){
        musica.play();
    }else{
        musica.pause();
    }
})

botonEnfoque.addEventListener("click",()=>{
    tiempoTransEnSegundos = 1500;
    cambiarCotexto('enfoque')
    botonEnfoque.classList.add("active");

})

botonCorto.addEventListener('click',()=>{
    tiempoTransEnSegundos = 300;
    cambiarCotexto('descanso-corto');
    botonCorto.classList.add("active");
})


botonLargo.addEventListener("click",()=>{
    tiempoTransEnSegundos = 900;
    cambiarCotexto('descanso-largo')
    botonLargo.classList.add("active");

});

function cambiarCotexto(contexto){
    
    mostrarTiempo();
    botones.forEach(function(contexto){
        contexto.classList.remove('active');

    })


    html.setAttribute('data-contexto',contexto)
    banner.setAttribute('src',`./imagenes/${contexto}.png`)

    switch(contexto){
        case "enfoque":
            titulo.innerHTML = `
            Optimiza tu productividad,<br>
                <strong class="app__title-strong">sumérgete en lo que importa.</strong>
            `
            break;
        case "descanso-corto":
            titulo.innerHTML = `
            ¿Qué tal tomar un respiro?,<br>
                <strong class="app__title-strong">!Haz una pausa corta¡.</strong>
            `              
            break;
        case "descanso-largo":
            titulo.innerHTML = `
            Hora de volver a la superficie,<br>
                <strong class="app__title-strong">!Haz una pausa larga¡.</strong>
            `              
            break;        
        default:
            break;    
    }

}
////  fin  de cambio de fondo 

const cuentaRegresiva = () =>{
    if(tiempoTransEnSegundos <=0){
        musicaTiempoFinalizado.play();
        alert('Tiempo final');
        reiniciar()
        return
    }
    
    tiempoTransEnSegundos -= 1;
    mostrarTiempo();
    //console.log("Temporizador: " + tiempoTransEnSegundos);
}

botonIniciarPausar.addEventListener('click',iniciarPausar)

//  pausa el conteo 
function iniciarPausar(){ 
    if(idIntervalo){
        musicaPausa.play();
        reiniciar()
        return

    }
    musicaplay.play();
    idIntervalo = setInterval(cuentaRegresiva,1000)
     //iniciarPausar();
     textoIniciarPausar.textContent ="Pausar";
     iconoIniciarPausar.setAttribute('src', `/imagenes/pause.png`);

}

function reiniciar(){
    clearInterval(idIntervalo);
    idIntervalo = null;
    textoIniciarPausar.textContent = "Iniciar"; 


}


function mostrarTiempo(){
    const tiempo = new Date(tiempoTransEnSegundos *1000);
    const tiempoFormateado = tiempo.toLocaleTimeString('es-MX',{minute:'2-digit',second:'2-digit'});
    tiempoenPantalla.innerHTML = `${tiempoFormateado}`
}

mostrarTiempo();
