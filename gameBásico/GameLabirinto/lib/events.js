document.body.addEventListener("keyup", eventoTeclado);
canvas.addEventListener("mousedown", eventoMouse);


function eventoTeclado(e) {
  const teclaPressionada = e.key;
  const teclasPermitidas = ["ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight"];

  if (teclasPermitidas.includes(teclaPressionada)) {
    movimenta(teclaPressionada);
  } else {
    console.log("Tecla não permitida: " + teclaPressionada);
  }
}

function movimentaPlayer(x, y) {
    if (interseccaoPixels(matrizAreaJogo, x, y)) {
      return;
    }
    player.x = x;
    player.y = y;
    movimentos++;
    movimentosTotais++;
    movimentosRestantes--;
    if (movimentosRestantes <= 0) {
      //executa o game Over e da Restart
      alert("Game Over");
      comecarNovoJogo();
    }
    colidiuComComida();
  }
  function colidiuComComida() {
    if (interseccaoPixels([comida], player.x, player.y)) {
      pontuacao++;
      movimentos = 0;
      //movimentosRestantes += 20;
      movimentosRestantes = movimentosInicial
      const posicaoComida = defineNovaPosicaoComida();
      comida.x = posicaoComida.x;
      comida.y = posicaoComida.y;
    }
  }
  function defineNovaPosicaoComida() {
    let x = rangePosicoesX[random(0, rangePosicoesX.length)];
    let y = rangePosicoesY[random(0, rangePosicoesY.length)];
    // return {x, y};
  
    const objeto = {
      x: x,
      y: y,
    };
    if (
      interseccaoPixels(matrizAreaJogo, x, y, comida) ||
      interseccaoPixels([player], x, y, comida)
    ) {
      return defineNovaPosicaoComida();
    }
    return objeto;
  }
  function eventoTeclado(e) {
    const teclaPressionada = e.key;
    const teclasPermitidas = ["ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight"];
  
    if (teclasPermitidas.includes(teclaPressionada)) {
      movimenta(teclaPressionada);
    } else {
      console.log("Tecla não permitida: " + teclaPressionada);
    }
  }
  
  function eventoMouse(e) {
    const { offsetX, offsetY } = e;
    for (let x = 0; x < rangePosicoesX.length; x++) {
      for (let y = 0; y < rangePosicoesY.length; y++) {
        if (
          offsetX >= rangePosicoesX[x] &&
          offsetX <= rangePosicoesX[x] + tamanhos.w &&
          offsetY >= rangePosicoesY[y] &&
          offsetY <= rangePosicoesY[y] + tamanhos.h
        ) {
          const possivelBloco = {
            w: tamanhos.w,
            h: tamanhos.h,
            x: rangePosicoesX[x],
            y: rangePosicoesY[y],
          };
          if (
            !interseccaoPixels(
              matrizAreaJogo,
              possivelBloco.x,
              possivelBloco.y,
              possivelBloco
            )
          ) {
            matrizAreaJogo.push(possivelBloco);
          } else {
            retiraItemMatrizAreaJogo(possivelBloco);
          }
        }
      }
    }
  }