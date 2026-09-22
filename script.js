(function(){

  const WORDS = [
    ["OLIMPÍADAS","Grande evento esportivo mundial"],
    ["FUTEBOL","Esporte mais popular do Brasil  "],
    ["CARNAVAL","Festa tradicional brasileira"],
    ["CINEMA","Lugar onde assistimos filmes"],
    ["MÚSICA"," Pode ser ouvida e cantada"],
    ["FESTIVAL","Evento com várias atrações"],
    ["CULTURA","Costumes e tradições de um povo"],
    ["TURISMO","Atividade de conhecer lugares"],
    ["VIAGEM","Deslocamento para outro lugar"],
    ["MUSEU","Local que preserva objetos históricos"],
    ["LITERATURA","Arte feita com palavras"],
    ["TEATRO","Apresentação feita ao vivo"],
    ["PINTURA","Forma de expressão artística"],
    ["FOTOGRAFIA","Registro feito por uma câmera"],
    ["DANÇA","Movimento do corpo acompanhado ou não por música."],
    ["ESPORTE","Atividade física praticada seguindo determinadas regras."],
    ["ATLETISMO","Conjunto de modalidades como corrida, salto e lançamento."],
    ["MAMÃO","Fruta laranja com sementinhas pretas"],
    ["UVA","Pequena, redonda e vira vinho"],
    ["LIMÃO","Fruta azeda usada na caipirinha"],
    ["PROFESSORA","Ensina e transforma vidas na escola"],
    ["BOMBEIRO","Apaga incêndios e salva vidas"],
    ["ASTRONAUTA","Viaja para fora da Terra"],
    ["COZINHEIRO","Prepara pratos deliciosos"],
    ["VETERINÁRIO","Cuida da saúde dos animais"],
    ["PROGRAMADORA","Escreve código para criar programas"],
    ["DENTISTA","Cuida dos dentes dos pacientes"],
    ["ENGENHEIRO","Projeta pontes, prédios e máquinas"],
    ["JORNALISTA","Escreve e investiga notícias"],
    ["PINTOR","Cria obras com tintas e pincéis"],
    ["CARNAVAL","Festa de blocos, samba e confete"],
    ["FEIJOADA","Prato com feijão preto e carnes"],
    ["AMAZÔNIA","A maior floresta tropical do mundo"],
    ["PIRÂMIDE","Construção antiga com formato triangular, muito famosa no Egito."],
    ["FORRÓ","Dança e música típica do Nordeste"],
    ["CAIPIRINHA","Bebida feita com limão e cachaça"],
    ["SAMBA","Ritmo símbolo do carnaval brasileiro"],
    ["CORCOVADO","Monte no Rio com o Cristo Redentor"],
    ["PANTANAL","Maior área alagada do planeta"],
    ["NORDESTE","Região do forró e das dunas"],
    ["COMPUTADOR","Máquina usada para trabalhar e navegar"],
    ["TECLADO","Usado para digitar no computador"],
    ["INTERNET","Rede que conecta o mundo todo"],
    ["CELULAR","Telefone que cabe no bolso"],
    ["ROBÔ","Máquina programada para executar tarefas"],
    ["IMPRESSORA","Transforma arquivos digitais em papel"],
    ["FONE","Usado nos ouvidos para escutar música"],
    ["APLICATIVO","Programa usado no celular"],
    ["BATERIA","Guarda energia para os aparelhos"],
    ["TELEVISÃO","Aparelho usado para assistir programas"],
    ["VERMELHO","Cor do morango e do tomate"],
    ["AMARELO","Cor do sol e da banana"],
    ["AZUL","Cor do céu e do mar"],
    ["VERDE","Cor das folhas e da esperança"],
    ["LARANJA","Cor e também uma fruta cítrica"],
    ["ROXO","Cor da uva e da berinjela"],
    ["ROSA","Cor clara e também uma flor"],
    ["PRETO","Cor da noite sem luz"],
    ["BRANCO","Cor da neve e do leite"],
    ["CINZA","Cor das nuvens de chuva"],
    ["NATAÇÃO","Esporte praticado dentro da piscina"],
    ["VÔLEIBOL","Esporte jogado com uma rede alta"],
    ["BASQUETE","Esporte jogado com uma cesta alta"],
    ["CICLISMO","Esporte praticado sobre duas rodas"],
    ["SURFE","Esporte praticado em cima das ondas"],
    ["GINÁSTICA","Esporte de flexibilidade e equilíbrio"],
    ["MARATONA","Corrida muito longa"],
    ["XADREZ","Jogo de estratégia com rei e rainha"],
    ["ESCOLA","Lugar onde se aprende todos os dias"],
    ["CADERNO","Usado para fazer anotações nas aulas"],
    ["MOCHILA","Carrega os materiais escolares nas costas"],
    ["LÁPIS","Usado para escrever e também para apagar"],
    ["BIBLIOTECA","Lugar cheio de livros para ler"],
    ["RECREIO","Momento de descanso entre as aulas"],
    ["UNIFORME","Roupa usada para ir à escola"],
    ["PROVA","Momento de mostrar o que se aprendeu"],
    ["MONTANHA","Elevação enorme de terra e pedra"],
    ["CACHOEIRA","Água que despenca de uma altura"],
    ["DESERTO","Lugar seco e cheio de areia"],
    ["VULCÃO","Montanha que pode expelir lava"],
    ["FLORESTA","Área com muitas árvores e animais"],
    ["OCEANO","Extensão enorme de água salgada"],
    ["TROVÃO","Barulho forte que vem com a tempestade"],
    ["GALÁXIA","Conjunto enorme de estrelas"],
    ["FOGUETE","Usado para viajar até o espaço"],
    ["PLANETA","Corpo que gira ao redor do Sol"],
    ["ECLIPSE","Quando um astro encobre o outro"],
    ["TELESCÓPIO","Usado para observar as estrelas"],
    ["BICICLETA","Veículo de duas rodas movido a pedal"],
    ["AVIÃO","Voa alto transportando passageiros"],
    ["TREM","Anda sobre trilhos"],
    ["BARCO","Navega sobre a água"],
    ["FOGUEIRA","Fica acesa nas festas juninas"],
    ["PIPOCA","Estoura no fogo e vira lanche"],
    ["CHOCOLATE","Doce derretido que agrada quase todo mundo"],
    ["SORVETE","Gelado e refrescante, ótimo no calor"],
    ["PIZZA","Redonda, com recheio e vai ao forno"],
    ["HAMBÚRGUER","Sanduíche famoso com carne no meio"],
    ["SALADA","Prato leve feito com vegetais"],
    ["RISADA","Som que fazemos quando algo é muito engraçado."]
  ];

  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const MAX_LIVES = 6;

  function shuffle(arr){
    const a = arr.slice();

    for(let i = a.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }

    return a;
  }

  const deck = shuffle(WORDS);
  let index = 0;
  let score = 0;
  let word = "";
  let hint = "";
  let guessed = new Set();
  let wrongCount = 0;
  let over = false;

  const els = {
    rig: document.getElementById("rig"),
    word: document.getElementById("word"),
    hint: document.getElementById("hint"),
    keyboard: document.getElementById("keyboard"),
    wordNum: document.getElementById("wordNum"),
    wordTotal: document.getElementById("wordTotal"),
    scoreCount: document.getElementById("scoreCount"),
    overlay: document.getElementById("overlay"),
    modal: document.getElementById("modal"),
    modalTitle: document.getElementById("modalTitle"),
    modalText: document.getElementById("modalText"),
    nextBtn: document.getElementById("nextBtn")
  };

  els.wordTotal.textContent = deck.length;

  function normalize(str){
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  /* =========================================================
     CORREÇÃO DO SVG DA FORCA
     ========================================================= */
  function buildRig(){
    els.rig.innerHTML = `
      <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="150" x2="100" y2="150" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="40" y1="150" x2="40" y2="18" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="40" y1="18" x2="112" y2="18" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="40" y1="38" x2="62" y2="18" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="112" y1="18" x2="112" y2="34" stroke="#A78BFA" stroke-width="5" stroke-linecap="round"/>
        <circle id="part0" class="part" cx="112" cy="47" r="13" fill="none" stroke="#FFD23F" stroke-width="5"/>
        <line id="part1" class="part" x1="112" y1="60" x2="112" y2="96" stroke="#FF4D8D" stroke-width="5" stroke-linecap="round"/>
        <line id="part2" class="part" x1="112" y1="70" x2="97" y2="86" stroke="#FF4D8D" stroke-width="5" stroke-linecap="round"/>
        <line id="part3" class="part" x1="112" y1="70" x2="127" y2="86" stroke="#FF4D8D" stroke-width="5" stroke-linecap="round"/>
        <line id="part4" class="part" x1="112" y1="96" x2="99" y2="118" stroke="#06D6A0" stroke-width="5" stroke-linecap="round"/>
        <line id="part5" class="part" x1="112" y1="96" x2="125" y2="118" stroke="#06D6A0" stroke-width="5" stroke-linecap="round"/>
      </svg>`;
}

  function startWord(){

    if(index >= deck.length){
      showEndOfDeck();
      return;
    }

    const pick = deck[index];

    word = pick[0];
    hint = pick[1];

    guessed = new Set();
    wrongCount = 0;
    over = false;

    els.overlay.classList.remove("show");

    els.wordNum.textContent = index + 1;
    els.scoreCount.textContent = score;

    // Cria novamente o SVG
    buildRig();

    els.hint.textContent = "Dica: " + hint;

    renderWord();
    buildKeyboard();
  }

  function showEndOfDeck(){

    els.modal.className = "modal win";

    els.modalTitle.textContent =
      "Você completou todas as palavras! 🎉";

    els.modalText.innerHTML =
      "Placar final: <b>" +
      score +
      "</b> de <b>" +
      deck.length +
      "</b>";

    els.nextBtn.textContent = "Jogar novamente";

    els.overlay.classList.add("show");

    els.nextBtn.focus();

    launchConfetti();

    els.nextBtn.onclick = () => {
      index = 0;
      score = 0;
      startWord();
    };
  }

  function renderWord(){

    els.word.innerHTML = "";

    word.split("").forEach(ch => {

      if(ch === " "){

        const s = document.createElement("div");

        s.className = "letter-slot space";

        els.word.appendChild(s);

        return;
      }

      const slot = document.createElement("div");

      slot.className = "letter-slot";

      const normCh = normalize(ch);

      if(guessed.has(normCh)){

        slot.textContent = ch;

        slot.classList.add("reveal");
      }

      els.word.appendChild(slot);
    });
  }

  function buildKeyboard(){

    els.keyboard.innerHTML = "";

    const rows = [
      ALPHABET.slice(0,9),
      ALPHABET.slice(9,18),
      ALPHABET.slice(18,26).concat(["Ç"])
    ];

    rows.forEach(rowLetters => {

      const row = document.createElement("div");

      row.className = "kb-row";

      rowLetters.forEach(letter => {

        const btn = document.createElement("button");

        btn.className = "key";

        btn.textContent = letter;

        btn.addEventListener("click", () => {
          handleGuess(letter, btn);
        });

        row.appendChild(btn);
      });

      els.keyboard.appendChild(row);
    });
  }

  function handleGuess(letter, btnEl){

    if(over || guessed.has(letter)) return;

    guessed.add(letter);

    btnEl.disabled = true;

    const normWord = normalize(word);

    if(normWord.includes(letter)){

      btnEl.classList.add("correct");

      renderWord();

      checkWin();

    } else {

      btnEl.classList.add("wrong");

      const part = document.getElementById(
        "part" + wrongCount
      );

      if(part){
        part.classList.add("show");
      }

      wrongCount++;

      if(wrongCount >= MAX_LIVES){
        loseWord();
      }
    }
  }

  function checkWin(){

    const normWord = normalize(word);

    const allGuessed = normWord
      .split("")
      .every(ch =>
        ch === " " || guessed.has(ch)
      );

    if(allGuessed){
      winWord();
    }
  }

  function winWord(){

    over = true;

    score++;

    els.modal.className = "modal win";

    els.modalTitle.textContent =
      "Você acertou! 🎉";

    els.modalText.innerHTML =
      "A palavra era <b>" +
      word +
      "</b>";

    els.nextBtn.textContent =
      index + 1 >= deck.length
        ? "Ver placar final"
        : "Próxima palavra";

    els.overlay.classList.add("show");

    els.nextBtn.focus();

    disableKeyboard();

    launchConfetti();

    els.nextBtn.onclick = () => {
      index++;
      startWord();
    };
  }

  function loseWord(){

    over = true;

    els.modal.className = "modal lose";

    els.modalTitle.textContent =
      "Ah, não! 💥";

    els.modalText.innerHTML =
      "A palavra era <b>" +
      word +
      "</b>";

    els.nextBtn.textContent =
      index + 1 >= deck.length
        ? "Ver placar final"
        : "Próxima palavra";

    els.overlay.classList.add("show");

    els.nextBtn.focus();

    disableKeyboard();

    els.nextBtn.onclick = () => {
      index++;
      startWord();
    };
  }

  function disableKeyboard(){

    document
      .querySelectorAll(".key")
      .forEach(k => {
        k.disabled = true;
      });
  }

  function launchConfetti(){

    const colors = [
      "#FF4D8D",
      "#FFD23F",
      "#06D6A0",
      "#FF8C42",
      "#A78BFA"
    ];

    for(let i = 0; i < 40; i++){

      const piece = document.createElement("div");

      piece.className = "confetti";

      piece.style.left =
        Math.random() * 100 + "vw";

      piece.style.background =
        colors[
          Math.floor(
            Math.random() * colors.length
          )
        ];

      piece.style.animationDuration =
        (2 + Math.random() * 1.5) + "s";

      piece.style.animationDelay =
        (Math.random() * 0.4) + "s";

      document.body.appendChild(piece);

      setTimeout(() => {
        piece.remove();
      }, 4000);
    }
  }

  function findKey(letter){

    return Array
      .from(document.querySelectorAll(".key"))
      .find(b => b.textContent === letter);
  }

  document.addEventListener("keydown", (e) => {

    // Enter ou espaço avançam para a próxima palavra
    // quando o modal está aberto
    if(
      (e.key === "Enter" || e.key === " ") &&
      els.overlay.classList.contains("show")
    ){

      e.preventDefault();

      els.nextBtn.click();

      return;
    }

    const letter = e.key.toUpperCase();

    if(
      ALPHABET.includes(letter) ||
      letter === "Ç"
    ){

      e.preventDefault();

      const btn = findKey(letter);

      if(btn && !btn.disabled){

        btn.classList.add("key-pressed");

        handleGuess(letter, btn);
      }
    }
  });

  document.addEventListener("keyup", (e) => {

    const letter = e.key.toUpperCase();

    if(
      ALPHABET.includes(letter) ||
      letter === "Ç"
    ){

      const btn = findKey(letter);

      if(btn){
        btn.classList.remove("key-pressed");
      }
    }
  });

  // Inicia o jogo
  startWord();

})();