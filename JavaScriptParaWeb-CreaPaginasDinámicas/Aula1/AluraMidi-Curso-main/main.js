function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');


for(let contador = 0 ; contador < listaDeTeclas.length ; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];  // claslist -> class=[tecla] [tecla_puff]  
    const idAudio = `#sonido_${instrumento}`;  // id="sonido_tecla_pom"
 
    tecla.onclick = function(){//  funcion generica
        playSonido(idAudio);
    };
    tecla.onkeydown = function(evento){
        
        if(evento.code ==='Space' || evento.code === 'Enter'){
            tecla.classList.add('activa')
        }        
    }
    
    tecla.onkeyup = function(){
        tecla.classList.remove('activa')
    }
}