// =============================================================
// Nossa História — carta interativa
// Preencha o campo `src` de cada música com o caminho do MP3.
// Ex.: src: "songs/morena-flor.mp3"
// Coloque os arquivos dentro da pasta "songs/".
// =============================================================

const SONGS = [
  { title: "Morena Flor",                        artist: "Diogo Nogueira",   src: "" },
  { title: "Te Vi",                              artist: "Ana Vilela",       src: "" },
  { title: "Parece Destino",                     artist: "Rashid",           src: "" },
  { title: "Esse Seu Jeito",                     artist: "Ferrugem",         src: "" },
  { title: "Aqueles Olhos",                      artist: "Djavan",           src: "" },
  { title: "Meu Abrigo",                         artist: "Melim",            src: "" },
  { title: "Ela Só Quer Paz",                    artist: "Projota",          src: "" },
  { title: "Quando Bate Aquela Saudade",         artist: "Belo",             src: "" },
  { title: "Pensando em Mim",                    artist: "Ferrugem",         src: "" },
  { title: "Você",                               artist: "Tim Maia",         src: "" },
  { title: "Ninguém Me Ensinou",                 artist: "Ferrugem",         src: "" },
  { title: "Amar Como Você",                     artist: "Melim",            src: "" },
  { title: "Meu Lugar",                          artist: "Arlindo Cruz",     src: "" },
  { title: "Deusa",                              artist: "Vitor Kley",       src: "" },
  { title: "Bonita",                             artist: "Vitor Kley",       src: "" },
  { title: "Deixa Eu Dizer",                     artist: "Ivete Sangalo",    src: "" },
  { title: "Preciso Dizer Que Te Amo",           artist: "Cazuza",           src: "" },
  { title: "Nuestra Canción",                    artist: "Monsieur Periné",  src: "" },
  { title: "Só Nós Dois",                        artist: "Sandy & Junior",   src: "" },
  { title: "A Dama e o Vagabundo",               artist: "Ferrugem",         src: "" },
  { title: "Final Feliz",                        artist: "Jorge & Mateus",   src: "" },
  { title: "Brilhe",                             artist: "Melim",            src: "" },
  { title: "Escolhi Você",                       artist: "Anavitória",       src: "" },
  { title: "Como É Grande o Meu Amor por Você",  artist: "Roberto Carlos",   src: "" },
  { title: "Eu Amo Você",                        artist: "Tim Maia",         src: "" },
  { title: "Pretin",                             artist: "Ana Castela",      src: "" },
  { title: "Forever",                            artist: "Chris Brown",      src: "" },
];

const SONG_MAP = new Map(SONGS.map((s) => [s.title, s]));
const SONG_INDEX = new Map(SONGS.map((s, i) => [s.title, i]));

const LETTER = `Minha (Morena Flor),

Às vezes eu fico pensando em como a vida consegue mudar completamente por causa de um único momento. Eu ainda lembro do instante em que (Te Vi). Naquela hora eu não fazia ideia de que aquele encontro mudaria tanta coisa dentro de mim. Hoje, olhando para trás, tudo realmente (Parece Destino).

Talvez eu nunca consiga explicar direito o que me fez me apaixonar. Talvez tenha sido (Esse Seu Jeito), talvez (Aqueles Olhos), talvez esse sorriso tão bonito... ou talvez tenha sido simplesmente porque você é você. A verdade é que, desde então, passei a enxergar o mundo de um jeito diferente.

Você é aquela pessoa que chega sem fazer esforço e transforma qualquer lugar em casa. E eu fui percebendo, pouco a pouco, que você se tornou (Meu Abrigo). Mesmo quando estamos longe, existe uma paz que só encontro em você, porque no fundo eu sei que (Ela Só Quer Paz), e tudo o que eu mais quero é ser alguém que possa oferecer exatamente isso.

Existem dias em que (Quando Bate Aquela Saudade), eu me pego (Pensando em Mim) apenas para perceber que, na verdade, estou pensando em nós. Nessas horas tudo o que eu queria era (Você), nem que fosse por alguns minutos, só para ouvir sua voz ou lembrar que existe alguém tão especial esperando por mim do outro lado da tela.

Você me ensinou coisas que (Ninguém Me Ensinou). Me mostrou que é possível amar com calma, com carinho, com respeito e com verdade. Foi com você que eu aprendi o verdadeiro significado de (Amar Como Você). E, sinceramente, acho que nunca vou conseguir agradecer por isso o suficiente.

Se hoje alguém me perguntasse quem é o meu lugar favorito no mundo, eu responderia sem pensar duas vezes que é onde você está. Porque você virou (Meu Lugar), meu porto seguro, meu descanso e a melhor parte dos meus dias.

Às vezes eu olho para você e penso: "Que (Deusa)." Outras vezes penso apenas em como você é (Bonita). Mas nenhuma dessas palavras consegue explicar completamente quem você é para mim. Talvez porque exista uma beleza que não está só no rosto, mas também na forma como você cuida de mim, na forma como me faz sorrir e na maneira como consegue iluminar qualquer momento.

Existem sentimentos que a gente guarda no coração por tanto tempo que chega um momento em que precisa colocar para fora. Então, (Deixa Eu Dizer): obrigado por me encontrar, por ficar, por acreditar na gente e por transformar meus dias em algo muito melhor.

E talvez eu nunca encontre palavras suficientes para explicar tudo que sinto. Mas eu ainda acredito que (Preciso Dizer Que Te Amo), hoje, amanhã e em todos os dias que ainda vierem.

Você virou a música da minha vida com sua voz linda. Toda lembrança bonita acaba me levando até você, como se existisse sempre a nossa (Nuestra Canción) tocando baixinho dentro do meu coração. E quando penso na nossa história, não consigo imaginar outro jeito de descrevê-la além de (Só Nós Dois), caminhando juntos, aprendendo juntos e sonhando juntos.

Talvez sejamos como (A Dama e o Vagabundo), diferentes em algumas coisas, parecidos em tantas outras, mas sempre encontrando um jeito de fazer dar certo. Porque o amor nunca foi sobre perfeição, sempre foi sobre escolher permanecer.

E se um dia eu pudesse fazer apenas um pedido, seria viver um (Final Feliz) ao seu lado. Um futuro cheio de pequenas lembranças, novas histórias, risadas sinceras, abraços demorados e sonhos realizados.

Enquanto esse futuro não chega, eu só quero continuar ao seu lado, vendo você crescer, sorrir, e quero que (Brilhe) cada vez mais. Sou alguém que sempre vai torcer por você, que vai estar presente nos seus dias bons e ruins, porque ver você feliz também faz parte da minha felicidade. E, sem perceber, eu já (Escolhi Você) há muito tempo.

E talvez eu nunca encontre palavras suficientes para explicar (Como É Grande o Meu Amor por Você). Então vou resumir do jeito mais simples que existe:

(Eu Amo Você).

No fim das contas, eu quero continuar sendo o seu (Pretin), quero te deixar louca de amor e criar, ao seu lado, uma história que dure todos os dias.

Porque depois de tudo que vivemos nesses 3 meses, de tudo que passamos e ainda vamos viver, eu só tenho um desejo:

Que isso dure (Forever).`;

// ---------- Estado ----------
const app = document.getElementById("app");
const audio = document.getElementById("audio");

let view = "cover"; // 'cover' | 'letter'
let playingTitle = null;
let isPlaying = false;

// ---------- Player DOM ----------
const pTitle  = document.getElementById("p-title");
const pSub    = document.getElementById("p-sub");
const pToggle = document.getElementById("p-toggle");
const pIcon   = document.getElementById("p-icon");
const pPrev   = document.getElementById("p-prev");
const pNext   = document.getElementById("p-next");
const pCur    = document.getElementById("p-cur");
const pDur    = document.getElementById("p-dur");
const pFill   = document.getElementById("p-fill");
const pTrack  = document.getElementById("p-track");

const ICON_PLAY  = '<path d="M8 5v14l11-7z"/>';
const ICON_PAUSE = '<rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/>';

// ---------- Render de telas ----------
function render() {
  const tplId = view === "cover" ? "tpl-cover" : "tpl-letter";
  const node = document.getElementById(tplId).content.cloneNode(true);
  app.innerHTML = "";
  app.appendChild(node);

  if (view === "cover") {
    document.getElementById("btn-open").addEventListener("click", () => {
      view = "letter";
      render();
    });
  } else {
    document.getElementById("btn-back").addEventListener("click", () => {
      view = "cover";
      render();
    });
    renderLetter();
    updateMiniCoverGlow();
  }
}

function renderLetter() {
  const el = document.getElementById("letter");
  el.innerHTML = "";
  const regex = /\(([^)]+)\)/g;
  let last = 0, m;
  while ((m = regex.exec(LETTER)) !== null) {
    if (m.index > last) el.appendChild(document.createTextNode(LETTER.slice(last, m.index)));
    const inner = m[1];
    if (SONG_MAP.has(inner)) {
      const span = document.createElement("span");
      span.className = "song-link" + (playingTitle === inner ? " is-playing" : "");
      span.setAttribute("role", "button");
      span.setAttribute("tabindex", "0");
      span.textContent = inner;
      if (playingTitle === inner) {
        const eq = document.createElement("span");
        eq.className = "eq"; eq.setAttribute("aria-hidden", "true");
        eq.innerHTML = "<span></span><span></span><span></span><span></span>";
        span.appendChild(eq);
      }
      span.addEventListener("click", () => onSongTap(inner));
      span.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onSongTap(inner); }
      });
      el.appendChild(span);
    } else {
      el.appendChild(document.createTextNode("(" + inner + ")"));
    }
    last = m.index + m[0].length;
  }
  if (last < LETTER.length) el.appendChild(document.createTextNode(LETTER.slice(last)));
}

// ---------- Áudio ----------
function loadSong(title, autoplay) {
  const song = SONG_MAP.get(title);
  if (!song) return;
  playingTitle = title;
  updatePlayerMeta();

  if (!song.src) {
    audio.pause();
    audio.removeAttribute("src");
    audio.load();
    isPlaying = false;
    updatePlayIcon();
    updateProgress(0, 0);
    if (view === "letter") renderLetter();
    updateIntensity();
    return;
  }

  audio.src = song.src;
  audio.currentTime = 0;
  if (autoplay) audio.play().catch(() => {});
  if (view === "letter") renderLetter();
}

function onSongTap(title) {
  if (playingTitle === title) {
    if (!SONG_MAP.get(title)?.src) return;
    if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
    return;
  }
  loadSong(title, true);
}

function togglePlayer() {
  const song = playingTitle ? SONG_MAP.get(playingTitle) : null;
  if (!song?.src) return;
  if (audio.paused) audio.play().catch(() => {});
  else audio.pause();
}

function skip(delta) {
  if (!playingTitle) return;
  const idx = SONG_INDEX.get(playingTitle);
  const next = idx + delta;
  if (next < 0 || next >= SONGS.length) return;
  loadSong(SONGS[next].title, isPlaying);
}

// ---------- Player UI ----------
function updatePlayerMeta() {
  const song = playingTitle ? SONG_MAP.get(playingTitle) : null;
  if (!song) {
    pTitle.textContent = "Nossa História";
    pSub.textContent = "Toque uma música da carta";
    pToggle.disabled = true;
    pPrev.disabled = true;
    pNext.disabled = true;
    return;
  }
  pTitle.textContent = song.title;
  pSub.textContent = song.src ? song.artist : (song.artist + " · em breve");
  pToggle.disabled = !song.src;
  const idx = SONG_INDEX.get(song.title);
  pPrev.disabled = idx <= 0;
  pNext.disabled = idx >= SONGS.length - 1;
}

function updatePlayIcon() {
  pIcon.innerHTML = isPlaying ? ICON_PAUSE : ICON_PLAY;
  pToggle.setAttribute("aria-label", isPlaying ? "Pausar" : "Tocar");
}

function fmt(s) {
  if (!isFinite(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return m + ":" + String(sec).padStart(2, "0");
}

function updateProgress(cur, dur) {
  pCur.textContent = fmt(cur);
  pDur.textContent = fmt(dur);
  const pct = dur > 0 ? (cur / dur) * 100 : 0;
  pFill.style.width = pct + "%";
}

function updateIntensity() {
  document.documentElement.style.setProperty(
    "--song-intensity",
    playingTitle && isPlaying ? "1" : "0"
  );
}

function updateMiniCoverGlow() {
  const el = document.getElementById("mini-cover");
  if (!el) return;
  el.classList.toggle("is-lit", isPlaying && !!playingTitle);
}

// ---------- Áudio events ----------
audio.addEventListener("timeupdate", () => updateProgress(audio.currentTime, audio.duration || 0));
audio.addEventListener("loadedmetadata", () => updateProgress(audio.currentTime, audio.duration || 0));
audio.addEventListener("ended", () => { isPlaying = false; updatePlayIcon(); updateProgress(0, audio.duration || 0); updateIntensity(); updateMiniCoverGlow(); if (view === "letter") renderLetter(); });
audio.addEventListener("play", () => { isPlaying = true; updatePlayIcon(); updateIntensity(); updateMiniCoverGlow(); if (view === "letter") renderLetter(); });
audio.addEventListener("pause", () => { isPlaying = false; updatePlayIcon(); updateIntensity(); updateMiniCoverGlow(); if (view === "letter") renderLetter(); });

// ---------- Player buttons ----------
pToggle.addEventListener("click", togglePlayer);
pPrev.addEventListener("click", () => skip(-1));
pNext.addEventListener("click", () => skip(1));
pTrack.addEventListener("click", (e) => {
  if (!audio.duration) return;
  const rect = pTrack.getBoundingClientRect();
  const pct = (e.clientX - rect.left) / rect.width;
  audio.currentTime = pct * audio.duration;
});

// ---------- Boot ----------
updatePlayerMeta();
updatePlayIcon();
updateProgress(0, 0);
render();
