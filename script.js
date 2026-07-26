/* =================================================

   NOSSA HISTÓRIA

   JAVASCRIPT DEFINITIVO

   PARTE 1
   Configuração
   Estado
   Elementos

================================================= */





"use strict";





/* =========================

   CONFIGURAÇÃO PRINCIPAL

========================= */



const APP = {


    album:{


        title:"Nossa História",


        artist:"Ryhan",


        year:"2026",


        description:"27 faixas • 3 meses de amor",


        cover:"assets/album-cover.jpg"


    },





    songs:{


        "Morena Flor":{


            title:"Morena Flor",


            artist:"Seu Jorge",


            audio:"songs/morena-flor.mp3",


            cover:"assets/music-covers/morena-flor.jpg"


        },



        "Te Vi":{


            title:"Te Vi",


            artist:"Piso 21",


            audio:"songs/te-vi.mp3",


            cover:"assets/music-covers/te-vi.jpg"


        },



        "Forever":{


            title:"Forever",


            artist:"The Little Dippers",


            audio:"songs/forever.mp3",


            cover:"assets/music-covers/forever.jpg"


        }


    },






    memories:[],






    settings:{


        autoplay:false,


        animations:true


    }




};









/* =========================

   ELEMENTOS

========================= */


const DOM = {


    app:
    document.getElementById("app"),



    albumScreen:
    document.getElementById("albumScreen"),



    letterScreen:
    document.getElementById("letterScreen"),





    openLetter:
    document.getElementById("openLetter"),



    backAlbum:
    document.getElementById("backAlbum"),






    albumCover:
    document.getElementById("albumCover"),





    miniCover:
    document.getElementById("miniCover"),






    letterContainer:
    document.getElementById("letterContainer"),





    memoriesContainer:
    document.getElementById("memoriesContainer"),







    player:
    document.getElementById("player"),



    playerCover:
    document.getElementById("playerCover"),



    playerTitle:
    document.getElementById("playerTitle"),



    playerArtist:
    document.getElementById("playerArtist"),






    playPause:
    document.getElementById("playPause"),




    previous:
    document.getElementById("previous"),




    next:
    document.getElementById("next"),





    progressBar:
    document.getElementById("progressBar"),





    currentTime:
    document.getElementById("currentTime"),





    duration:
    document.getElementById("duration"),





    audio:
    document.getElementById("audioPlayer")



};









/* =========================

   ESTADO DA APLICAÇÃO

========================= */



const STATE = {



    currentSong:null,



    isPlaying:false,



    currentIndex:0,



    songsList:
    Object.keys(APP.songs)



};









/* =========================

   FUNÇÕES AUXILIARES

========================= */



function formatTime(seconds){



    if(!seconds || isNaN(seconds)){


        return "0:00";


    }





    const minutes =
    Math.floor(seconds / 60);



    const remaining =
    Math.floor(seconds % 60);



    return `${minutes}:${remaining
    .toString()
    .padStart(2,"0")}`;


}

/* =================================================

   NOSSA HISTÓRIA

   PARTE 2
   Renderização da Carta
   Sistema de músicas
   Memórias

================================================= */






/* =========================

   TEXTO DA CARTA

========================= */



const LETTER = [

{

text:

`Minha <song>Morena Flor</song>,`

},



{

text:

`Às vezes eu fico pensando em como a vida consegue mudar completamente por causa de um único momento. Eu ainda lembro do instante em que <song>Te Vi</song>. Naquela hora eu não fazia ideia de que aquele encontro mudaria tanta coisa dentro de mim. Hoje, olhando para trás, tudo realmente <song>Parece Destino</song>.`

},



{

text:

`Talvez eu nunca consiga explicar direito o que me fez me apaixonar. Talvez tenha sido <song>Esse Seu Jeito</song>, talvez <song>Aqueles Olhos</song>, talvez esse sorriso tão bonito... ou talvez tenha sido simplesmente porque você é você. A verdade é que, desde então, passei a enxergar o mundo de um jeito diferente.`

},



{

text:

`Você é aquela pessoa que chega sem fazer esforço e transforma qualquer lugar em casa. E eu fui percebendo, pouco a pouco, que você se tornou <song>Meu Abrigo</song>. Mesmo quando estamos longe, existe uma paz que só encontro em você, porque no fundo eu sei que <song>Ela Só Quer Paz</song>, e tudo o que eu mais quero é ser alguém que possa oferecer exatamente isso.`

},



{

text:

`Existem dias em que <song>Quando Bate Aquela Saudade</song>, eu me pego <song>Pensando em Mim</song> apenas para perceber que, na verdade, estou pensando em nós.`

},



{

text:

`Nessas horas tudo o que eu queria era <song>Você</song>, nem que fosse por alguns minutos, só para ouvir sua voz ou lembrar que existe alguém tão especial esperando por mim do outro lado da tela.`

},



{

text:

`Você me ensinou coisas que <song>Ninguém Me Ensinou</song>. Me mostrou que é possível amar com calma, com carinho, com respeito e com verdade. Foi com você que eu aprendi o verdadeiro significado de <song>Amar Como Você</song>.`

},



{

text:

`Se hoje alguém me perguntasse quem é o meu lugar favorito no mundo, eu responderia sem pensar duas vezes que é onde você está. Porque você virou <song>Meu Lugar</song>, meu porto seguro, meu descanso e a melhor parte dos meus dias.`

},



{

text:

`Às vezes eu olho para você e penso: "Que <song>Deusa</song>." Outras vezes penso apenas em como você é <song>Bonita</song>. Mas nenhuma dessas palavras consegue explicar completamente quem você é para mim.`

},



{

text:

`Então, <song>Deixa Eu Dizer</song>: obrigado por me encontrar, por ficar, por acreditar na gente e por transformar meus dias em algo muito melhor.`

},



{

text:

`Eu ainda acredito que <song>Preciso Dizer Que Te Amo</song>, hoje, amanhã e em todos os dias que ainda vierem.`

},



{

text:

`Você virou a música da minha vida com sua voz linda. Toda lembrança bonita acaba me levando até você, como se existisse sempre a nossa <song>Nuestra Canción</song> tocando baixinho dentro do meu coração.`

},



{

text:

`Quando penso na nossa história, não consigo imaginar outro jeito de descrevê-la além de <song>Só Nós Dois</song>, caminhando juntos, aprendendo juntos e sonhando juntos.`

},



{

text:

`Talvez sejamos como <song>A Dama e o Vagabundo</song>, diferentes em algumas coisas, parecidos em tantas outras, mas sempre encontrando um jeito de fazer dar certo.`

},



{

text:

`E se um dia eu pudesse fazer apenas um pedido, seria viver um <song>Final Feliz</song> ao seu lado.`

},



{

text:

`Eu quero continuar ao seu lado, vendo você crescer, sorrir, e quero que <song>Brilhe</song> cada vez mais. Sou alguém que sempre vai torcer por você, porque ver você feliz também faz parte da minha felicidade. E, sem perceber, eu já <song>Escolhi Você</song> há muito tempo.`

},



{

text:

`Talvez eu nunca encontre palavras suficientes para explicar <song>Como É Grande o Meu Amor por Você</song>. Então vou resumir do jeito mais simples que existe: <song>Eu Amo Você</song>.`

},



{

text:

`No fim das contas, eu quero continuar sendo o seu <song>Pretin</song>, quero criar, ao seu lado, uma história que dure todos os dias.`

},



{

text:

`Porque depois de tudo que vivemos nesses 3 meses, de tudo que passamos e ainda vamos viver, eu só tenho um desejo: que isso dure <song>Forever</song>.`

}

];









/* =========================

   TRANSFORMAR MÚSICAS
   EM ELEMENTOS CLICÁVEIS

========================= */



function convertSongs(text){


    return text.replace(

        /<song>(.*?)<\/song>/g,


        function(match, songName){



            return `

            <span

            class="song"

            data-song="${songName}">

            (${songName})

            </span>

            `;


        }

    );


}









/* =========================

   RENDER DA CARTA

========================= */



function renderLetter(){



    DOM.letterContainer.innerHTML="";




    LETTER.forEach(paragraph => {



        const p =
        document.createElement("p");



        p.innerHTML =
        convertSongs(paragraph.text);



        DOM.letterContainer.appendChild(p);



    });



}









/* =========================

   SISTEMA DE MÚSICAS DA CARTA

========================= */



function setupSongButtons(){



    const songs =
    document.querySelectorAll(".song");




    songs.forEach(song => {



        song.addEventListener(

            "click",

            ()=>{


                const name =
                song.dataset.song;



                playSong(name);


            }

        );


    });


}









/* =========================

   MEMÓRIAS FUTURAS

========================= */



function renderMemories(){



    if(APP.memories.length === 0){



        DOM.memoriesContainer.classList.remove(
            "visible"
        );


        return;


    }






    DOM.memoriesContainer.innerHTML="";




    APP.memories.forEach(memory => {



        const item =
        document.createElement("div");



        item.className =
        "memory";



        item.innerHTML=`

            <h3>${memory.title}</h3>

            <span>${memory.date}</span>

            <p>${memory.text}</p>

        `;




        DOM.memoriesContainer.appendChild(item);



    });





    DOM.memoriesContainer.classList.add(
        "visible"
    );



}

/* =================================================

   NOSSA HISTÓRIA

   PARTE 3
   Player de Áudio

================================================= */





/* =========================

   CARREGAR MÚSICA

========================= */


function loadSong(songName){



    const song =
    APP.songs[songName];



    if(!song){

        console.warn(
            "Música não encontrada:",
            songName
        );

        return;

    }





    STATE.currentSong =
    songName;




    DOM.audio.src =
    song.audio;




    DOM.playerTitle.textContent =
    song.title;




    DOM.playerArtist.textContent =
    song.artist;




    DOM.playerCover.src =
    song.cover;




    DOM.miniCover.src =
    song.cover;



    updateActiveSong(songName);



}









/* =========================

   TOCAR MÚSICA

========================= */



function playSong(songName){



    loadSong(songName);



    DOM.audio.play()

    .then(()=>{



        STATE.isPlaying=true;



        updatePlayerState();



    })

    .catch(error=>{


        console.warn(
            "Não foi possível reproduzir:",
            error
        );


    });


}









/* =========================

   PAUSAR

========================= */



function pauseSong(){



    DOM.audio.pause();



    STATE.isPlaying=false;



    updatePlayerState();



}









/* =========================

   PLAY / PAUSE

========================= */



function togglePlay(){



    if(!STATE.currentSong){



        const firstSong =
        STATE.songsList[0];



        playSong(firstSong);



        return;


    }






    if(STATE.isPlaying){



        pauseSong();



    }

    else{


        DOM.audio.play();



        STATE.isPlaying=true;



        updatePlayerState();



    }


}









/* =========================

   ESTADO VISUAL

========================= */



function updatePlayerState(){



    if(STATE.isPlaying){



        DOM.playPause.textContent =
        "Ⅱ";



        DOM.player.classList.add(
            "playing"
        );



        DOM.miniCover.classList.add(
            "playing"
        );



    }

    else{



        DOM.playPause.textContent =
        "▶";



        DOM.player.classList.remove(
            "playing"
        );



        DOM.miniCover.classList.remove(
            "playing"
        );



    }



}









/* =========================

   DESTACAR MÚSICA ATIVA

========================= */



function updateActiveSong(songName){



    const songs =
    document.querySelectorAll(".song");



    songs.forEach(song=>{


        song.classList.remove(
            "active"
        );


        if(song.dataset.song === songName){



            song.classList.add(
                "active"
            );



        }


    });


}









/* =========================

   PROGRESSO

========================= */



function updateProgress(){



    if(!DOM.audio.duration){

        return;

    }




    const progress =

    (DOM.audio.currentTime /
    DOM.audio.duration) * 100;




    DOM.progressBar.value =
    progress;




    DOM.currentTime.textContent =
    formatTime(
        DOM.audio.currentTime
    );



    DOM.duration.textContent =
    formatTime(
        DOM.audio.duration
    );



}









/* =========================

   ALTERAR POSIÇÃO

========================= */



function changeProgress(){



    if(!DOM.audio.duration){

        return;

    }





    const time =

    (DOM.progressBar.value / 100)
    *
    DOM.audio.duration;




    DOM.audio.currentTime =
    time;



}









/* =========================

   PRÓXIMA MÚSICA

========================= */



function nextSong(){



    let index =
    STATE.songsList.indexOf(
        STATE.currentSong
    );



    index++;




    if(index >= STATE.songsList.length){


        index=0;


    }




    STATE.currentIndex=index;



    playSong(
        STATE.songsList[index]
    );



}









/* =========================

   MÚSICA ANTERIOR

========================= */



function previousSong(){



    let index =
    STATE.songsList.indexOf(
        STATE.currentSong
    );



    index--;




    if(index < 0){


        index =
        STATE.songsList.length - 1;


    }





    STATE.currentIndex=index;



    playSong(
        STATE.songsList[index]
    );


}









/* =========================

   FINAL DA MÚSICA

========================= */



function songEnded(){



    nextSong();



}

/* =================================================

   NOSSA HISTÓRIA

   PARTE 4
   Eventos
   Inicialização
   Proteções

================================================= */





/* =========================

   TRANSIÇÃO ÁLBUM → CARTA

========================= */



function openLetter(){



    if(!DOM.app){

        return;

    }





    DOM.app.classList.add(
        "opening-letter"
    );





    setTimeout(()=>{


        DOM.albumScreen.classList.remove(
            "active"
        );



        DOM.letterScreen.classList.add(
            "active"
        );



        DOM.app.classList.remove(
            "opening-letter"
        );



    },1400);



}









/* =========================

   VOLTAR AO ÁLBUM

========================= */



function backToAlbum(){



    DOM.letterScreen.classList.remove(
        "active"
    );



    DOM.albumScreen.classList.add(
        "active"
    );



}









/* =========================

   EVENTOS

========================= */



function setupEvents(){



    /*
       Abrir carta
    */


    DOM.openLetter?.addEventListener(
        "click",
        openLetter
    );






    /*
       Voltar álbum
    */


    DOM.backAlbum?.addEventListener(
        "click",
        backToAlbum
    );








    /*
       Player
    */


    DOM.playPause?.addEventListener(
        "click",
        togglePlay
    );



    DOM.next?.addEventListener(
        "click",
        nextSong
    );



    DOM.previous?.addEventListener(
        "click",
        previousSong
    );








    /*
       Barra de progresso
    */


    DOM.progressBar?.addEventListener(
        "input",
        changeProgress
    );








    /*
       Atualização do tempo
    */


    DOM.audio?.addEventListener(
        "timeupdate",
        updateProgress
    );






    /*
       Quando carregar duração
    */


    DOM.audio?.addEventListener(
        "loadedmetadata",
        updateProgress
    );








    /*
       Final da música
    */


    DOM.audio?.addEventListener(
        "ended",
        songEnded
    );





    /*
       Play manual do navegador
    */


    DOM.audio?.addEventListener(
        "play",
        ()=>{


            STATE.isPlaying=true;


            updatePlayerState();


        }
    );






    /*
       Pause manual
    */


    DOM.audio?.addEventListener(
        "pause",
        ()=>{


            STATE.isPlaying=false;


            updatePlayerState();


        }
    );



}









/* =========================

   ATUALIZAR INFORMAÇÕES
   DO ÁLBUM

========================= */



function renderAlbum(){



    document.getElementById(
        "albumTitle"
    ).textContent =
    APP.album.title;





    document.getElementById(
        "albumArtist"
    ).textContent =
    APP.album.artist;





    document.getElementById(
        "albumDescription"
    ).innerHTML =

    `Álbum • ${APP.album.year}
    <br>
    ${APP.album.description}`;





    DOM.albumCover.src =
    APP.album.cover;



}









/* =========================

   INICIALIZAÇÃO

========================= */



function init(){



    renderAlbum();



    renderLetter();



    setupSongButtons();



    renderMemories();



    setupEvents();



}









/* =========================

   INICIAR APLICAÇÃO

========================= */



document.addEventListener(

    "DOMContentLoaded",

    init

);

