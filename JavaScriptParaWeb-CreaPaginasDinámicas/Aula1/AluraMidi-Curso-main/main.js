function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;
while(contador < 9){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];  // claslist -> class=[tecla] [tecla_puff]  
    //console.log(instrumento);

    const idAudio = `#sonido_${instrumento}`;  // id="sonido_tecla_pom"
    //console.log(idAudio);

    tecla.onclick = function(){//  funcion generica
        playSonido(idAudio);
    };
    contador = contador + 1;
    //console.log('Vuelta ' + contador);
}

// listaDeTeclas[1].onclick = playSonidoPom; */
//document.querySelector('.tecla_pom').onclick = playSonidoPom;