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


        title:"Ainda Lembro",


        artist:"Ryhan",


        year:"2026",


        description:"24 faixas • 3 meses de amor",


        cover:"assets/album-cover.jpg"


    },





    songs:{

    "Morena Flor":{
        title:"Morena Flor",
        artist:"Toquinho",
        audio:"songs/morena-flor.mp3",
        cover:"assets/music-covers/morena-flor.jpg"
    },

    "Te Vi":{
        title:"Te Vi",
        artist:"Piso 21",
        audio:"songs/te-vi.mp3",
        cover:"assets/music-covers/te-vi.jpg"
    },

    "Te Encontrar":{
        title:"Te Encontrar",
        artist:"ModestiaParte",
        audio:"songs/te-encontrar.mp3",
        cover:"assets/music-covers/te-encontrar.jpg"
    },

    "Parece Destino":{
        title:"Parece Destino",
        artist:"Pibara",
        audio:"songs/parece-destino.mp3",
        cover:"assets/music-covers/parece-destino.jpg"
    },

    "Cachos Encaracolados":{

    title:"Cachos Encaracolados",

    artist:"Viniciusss",

    audio:"songs/cachos.mp3",

    cover:"assets/music-covers/cachos.jpg"

},

    "Aqueles Olhos":{
        title:"Aqueles Olhos",
        artist:"Dom M",
        audio:"songs/aqueles-olhos.mp3",
        cover:"assets/music-covers/aqueles-olhos.jpg"
    },

    "Meu Abrigo":{
        title:"Meu Abrigo",
        artist:"Melim",
        audio:"songs/meu-abrigo.mp3",
        cover:"assets/music-covers/meu-abrigo.jpg"
    },

    "Ela Só Quer Paz":{
        title:"Ela Só Quer Paz",
        artist:"Projota",
        audio:"songs/ela-so-quer-paz.mp3",
        cover:"assets/music-covers/ela-so-quer-paz.jpg"
    },

    "Quando Bate Aquela Saudade":{
        title:"Quando Bate Aquela Saudade",
        artist:"Rubel",
        audio:"songs/quando-bate-aquela-saudade.mp3",
        cover:"assets/music-covers/quando-bate-aquela-saudade.jpg"
    },

    "Pensando em Mim":{
        title:"Pensando em Mim",
        artist:"Matchola",
        audio:"songs/pensando-em-mim.mp3",
        cover:"assets/music-covers/pensando-em-mim.jpg"
    },

    "Você":{
        title:"Você",
        artist:"Tim Maia",
        audio:"songs/voce.mp3",
        cover:"assets/music-covers/voce.jpg"
    },

    "Amar Como Você":{
        title:"Amar Como Você",
        artist:"Rebecca Sugar",
        audio:"songs/amar-como-voce.mp3",
        cover:"assets/music-covers/amar-como-voce.jpg"
    },

    "Deusa":{
        title:"Deusa",
        artist:"Venere Vai Venus",
        audio:"songs/deusa.mp3",
        cover:"assets/music-covers/deusa.jpg"
    },

    "Bonita":{
        title:"Bonita",
        artist:"L7NNON",
        audio:"songs/bonita.mp3",
        cover:"assets/music-covers/bonita.jpg"
    },

    "Nuestra Canción":{

    title:"Nuestra Canción",

    artist:"Monsieur Periné",

    audio:"songs/nuestra-cancion.mp3",

    cover:"assets/music-covers/nuestra-cancion.jpg"

},

    "Eternamente":{
        title:"Eternamente",
        artist:"Gal Costa",
        audio:"songs/eternamente.mp3",
        cover:"assets/music-covers/eternamente.jpg"
    },

    "A Dama e o Vagabundo":{
        title:"A Dama e o Vagabundo",
        artist:"Oriente",
        audio:"songs/a-dama-e-o-vagabundo.mp3",
        cover:"assets/music-covers/a-dama-e-o-vagabundo.jpg"
    },

    "Escolhi Você":{
        title:"Escolhi Você",
        artist:"ALMAR",
        audio:"songs/escolhi-voce.mp3",
        cover:"assets/music-covers/escolhi-voce.jpg"
    },

    "Final Feliz":{
        title:"Final Feliz",
        artist:"Jorge Vercillo",
        audio:"songs/final-feliz.mp3",
        cover:"assets/music-covers/final-feliz.jpg"
    },

    "Brilhe":{
        title:"Brilhe",
        artist:"Roberto Garcia",
        audio:"songs/brilhe.mp3",
        cover:"assets/music-covers/brilhe.jpg"
    },

    "Como É Grande o Meu Amor por Você":{
        title:"Como É Grande o Meu Amor por Você",
        artist:"Roberto Carlos",
        audio:"songs/como-e-grande-o-meu-amor-por-voce.mp3",
        cover:"assets/music-covers/como-e-grande-o-meu-amor-por-voce.jpg"
    },

    "Eu Amo Você":{
        title:"Eu Amo Você",
        artist:"Tim Maia",
        audio:"songs/eu-amo-voce.mp3",
        cover:"assets/music-covers/eu-amo-voce.jpg"
    },

    "Pretin":{
        title:"Pretin",
        artist:"Flora Matos",
        audio:"songs/pretin.mp3",
        cover:"assets/music-covers/pretin.jpg"
    },

    "Can't Help Falling in Love":{

    title:"Can't Help Falling in Love",

    artist:"Elvis Presley",

    audio:"songs/love.mp3",

    cover:"assets/music-covers/love.jpg"

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

`Às vezes eu fico pensando em como a vida consegue mudar completamente por causa de um único momento. Eu ainda lembro do instante em que <song>Te Vi</song> na Nerdeste, que infelizmente não foi muito. Mas naquela hora eu não fazia ideia de que aquele encontro mudaria tanta coisa dentro de mim.`

},


{

text:

`E até hoje eu acho incrível pensar que, em meio a tantas pessoas no mundo, eu consegui <song>Te Encontrar</song>. O jeito que a gente se aproximou, a hora, o dia e como tudo foi acontecendo fazem eu olhar para trás e perceber que tudo realmente <song>Parece Destino</song>.`

},


{

text:

`Talvez eu nunca consiga explicar direito o que me fez me apaixonar. Talvez tenha sido seus <song>Cachos Encaracolados</song>, talvez <song>Aqueles Olhos</song> grandes, talvez seja o teu sorriso tão bonito... ou talvez seja porque você é você.`

},


{

text:

`A verdade é que, desde então, passei a enxergar o mundo de um jeito diferente.`

},


{

text:

`Você é aquela pessoa que chega sem fazer esforço e transforma qualquer momento em algo especial. E eu fui percebendo, pouco a pouco, que você se tornou <song>Meu Abrigo</song>.`

},


{

text:

`Mesmo quando estamos longe, existe uma paz que só encontro em você, porque no fundo eu sei que <song>Ela Só Quer Paz</song>, e tudo que eu mais quero é ser alguém que consiga trazer essa paz para sua vida também.`

},


{

text:

`Existem dias em que <song>Quando Bate Aquela Saudade</song>, eu me pego <song>Pensando em Mim</song> apenas para perceber que, na verdade, estou pensando em nós.`

},


{

text:

`Nessas horas, tudo que eu queria era estar perto de <song>Você</song>, nem que fosse por alguns minutos, só para ouvir sua voz, te fazer cafuné ou só para ficar bem pertinho sentindo sua pele.`

},


{

text:

`Com você eu descobri que é possível amar com calma, com carinho, com respeito e com verdade.`

},


{

text:

`Foi com você que eu aprendi uma forma diferente de sentir, uma forma de <song>Amar Como Você</song>. E, sinceramente, acho que nunca vou conseguir agradecer por tudo que você trouxe para minha vida.`

},


{

text:

`Às vezes eu olho para você e penso: "Que <song>Deusa</song>."`

},


{

text:

`Outras vezes penso apenas em como você é <song>Bonita</song>. Mas nenhuma dessas palavras consegue explicar completamente tudo que você é para mim.`

},


{

text:

`Porque a beleza que eu vejo em você não está apenas no que aparece por fora, mas também na forma como você cuida de mim, na maneira como me faz sorrir e nesse seu jeito tão único.`

},


{

text:

`Você virou uma das partes mais bonitas da minha história. Cada conversa, cada música, cada momento em que você conseguiu me fazer sorrir acabou se transformando em pequenas lembranças que eu vou guardar comigo.`

},


{

text:

`E, no meio de tudo isso, a gente acabou encontrando <song>Nuestra Canción</song>, que guarda um pouco da nossa história, dos nossos sentimentos e de tudo aquilo que vivemos juntos.`

},


{

text:

`Algumas coisas talvez pareçam simples, mas para mim carregam um significado enorme e vão permanecer comigo <song>Eternamente</song>.`

},


{

text:

`Você me mostrou que duas pessoas diferentes podem encontrar um jeito de combinar.`

},


{

text:

`Talvez a gente pareça como <song>A Dama e o Vagabundo</song>, com suas diferenças, mas parecidos em tantas outras, e mesmo assim sempre encontrando um jeito de fazer dar certo.`

},


{

text:

`Porque o amor nunca foi sobre sermos iguais, mas sobre escolher ficar.`

},


{

text:

`E entre tantas pessoas no mundo, entre tantos caminhos possíveis, existe uma certeza que eu tenho todos os dias: eu <song>Escolhi Você</song>.`

},


{

text:

`E se um dia eu pudesse fazer apenas um pedido, seria viver um <song>Final Feliz</song> ao seu lado.`

},


{

text:

`Um futuro cheio de pequenas lembranças, novas histórias, risadas sinceras, abraços demorados e sonhos realizados.`

},


{

text:

`Enquanto esse futuro não chega, eu só quero continuar ao seu lado, vendo você crescer, sorrir e conquistar tudo aquilo que merece.`

},


{

text:

`Quero que você <song>Brilhe</song> cada vez mais, porque ver você feliz também faz parte da minha felicidade.`

},


{

text:

`E talvez eu nunca encontre palavras suficientes para explicar <song>Como É Grande o Meu Amor por Você</song>.`

},


{

text:

`I <song>Can't Help Falling in Love</song> with you.`

},

{

text:

`Então vou resumir do jeito mais simples que existe:`

},

{

text:

` <song>Eu Amo Você</song>.`

},

{

text:

`No fim das contas, eu quero continuar sendo o seu <song>Pretin</song>, quero criar, ao seu lado, uma história que dure todos os dias.`

},


{

text:

`Porque depois de tudo que vivemos nesses 3 meses, de tudo que passamos e de tudo que ainda vamos viver, eu só tenho um desejo: que isso dure <song>Forever</song>.`

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

${songName}

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



    },1500);



    setTimeout(()=>{


        DOM.app.classList.remove(
            "opening-letter"
        );



    },1700);



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

