function renderizarJogo() {
  // Reseta o canvas (folha em branco)
  context.clearRect(0, 0, wCanvas, hCanvas);

  // Desenha área do jogo
  for (let x = 0; x < matrizAreaJogo.length; x++) {
    context.beginPath();
    context.fillStyle = "brown";
    context.fillRect(
      matrizAreaJogo[x].x,
      matrizAreaJogo[x].y,
      matrizAreaJogo[x].w,
      matrizAreaJogo[x].h
    );
  }
  // Desenha o player
  context.beginPath();
  context.fillStyle = player.color;
  context.fillRect(player.x, player.y, player.w, player.h);

  // Desenha A COMIDA
  context.beginPath();
  context.fillStyle = comida.color;
  context.fillRect(comida.x, comida.y, comida.w, comida.h);

  //Atribui novos valores aos elementos html
  pontuacaoEl.innerText = pontuacao;
  posicaoXelemento.innerText = player.x;
  posicaoYelemento.innerText = player.y;
  movimentosElementos.innerText = movimentos;
  movimentosTotaisElementos.innerText = movimentosTotais;
  movimentosRestantesElementos.innerText = movimentosRestantes;

  // redesenha o canvas em 60fps
  requestAnimationFrame(renderizarJogo);
}

// function random(min, max) {
//   return min + Math.floor((max - min) * Math.random());
// }

renderizarJogo();
